// Throwaway check, not part of the suite: @react-pdf-viewer declares a React
// <=18 peer and is stubbed in Jest and masked in the visual tests, so it is the
// one thing the automated suite cannot vouch for after the React 19 upgrade.
// Run against a served production build:  node tests/manual/jubo-live-check.js
const { chromium } = require("@playwright/test");

const URL = process.env.JUBO_URL ?? "http://127.0.0.1:4173/jubo";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const problems = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") problems.push(`console: ${msg.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));

  // The bulletin host sends no CORS header, which blocks it when the build is
  // served from localhost. Proxy it so the viewer receives a real document.
  await page.route("https://edmontoncc.net/**", async (route) => {
    const response = await route.fetch();
    await route.fulfill({
      response,
      headers: { ...response.headers(), "access-control-allow-origin": "*" },
    });
  });

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(4000);

  const canvasCount = await page.locator("canvas").count();
  const textLayer = await page.locator('[class*="rpv-core"]').count();
  await page.screenshot({ path: "tests/manual/jubo-live.png", fullPage: false });

  console.log("pdf canvases rendered:", canvasCount);
  console.log("react-pdf-viewer nodes:", textLayer);
  console.log(problems.length ? `problems:\n  ${problems.join("\n  ")}` : "no console or page errors");
  console.log("screenshot: tests/manual/jubo-live.png");

  await browser.close();
  process.exit(canvasCount > 0 && problems.length === 0 ? 0 : 1);
})();
