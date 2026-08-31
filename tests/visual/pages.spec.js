import { expect, test } from "@playwright/test";
import { ROUTE_PATHS } from "../../src/routePaths";

// Third-party embeds would otherwise make every screenshot depend on Google's
// and the church host's current output.
const BLOCKED = [/google\.com/, /gstatic\.com/, /unpkg\.com/, /edmontoncc\.net/];

// App.js staggers the hero in over a 1000ms transition plus a 100ms delay.
const HERO_SETTLE_MS = 1500;

const nameFor = (path) => (path === "/" ? "home" : path.replace(/\//g, ""));

test.describe("page screenshots", () => {
  for (const path of ROUTE_PATHS) {
    test(nameFor(path), async ({ page }) => {
      await page.route("**/*", (route) =>
        BLOCKED.some((pattern) => pattern.test(route.request().url()))
          ? route.abort()
          : route.continue()
      );

      await page.goto(path);
      await page.waitForLoadState("networkidle");
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(HERO_SETTLE_MS);

      await expect(page).toHaveScreenshot(`${nameFor(path)}.png`, {
        fullPage: true,
        // The embeds are blocked above, so what is left is an error or loading
        // state that is free to change between runs.
        mask: [page.locator('iframe, [class*="rpv-core"]')],
      });
    });
  }
});

// The page screenshots above only ever capture the navbar at rest, so the
// dropdown's styling went unverified through the whole MUI upgrade.
test.describe("navbar dropdown", () => {
  test("service menu open", async ({ page }, testInfo) => {
    test.skip(
      testInfo.project.use.viewport.width <= 900,
      "navbar links are hidden below the md breakpoint"
    );

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(HERO_SETTLE_MS);

    await page.getByText("예배", { exact: true }).first().hover();
    await expect(page.getByRole("menuitem", { name: "예배 안내" })).toBeVisible();

    await expect(page).toHaveScreenshot("navbar-dropdown-open.png", {
      clip: { x: 0, y: 0, width: 1440, height: 320 },
    });
  });
});
