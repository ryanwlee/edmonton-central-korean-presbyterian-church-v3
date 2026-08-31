const { defineConfig, devices } = require("@playwright/test");

const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const viewport = (width, height) => ({
  ...devices["Desktop Chrome"],
  viewport: { width, height },
});

module.exports = defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  reporter: [["list"]],
  use: {
    baseURL: BASE_URL,
  },
  expect: {
    toHaveScreenshot: {
      // Enough slack for text antialiasing, not enough to hide a layout shift.
      maxDiffPixelRatio: 0.002,
      animations: "disabled",
      caret: "hide",
    },
  },
  // Chromium only. Firefox and WebKit would triple the baseline count without
  // saying anything extra about a dependency upgrade.
  projects: [
    { name: "mobile", use: viewport(390, 844) },
    { name: "tablet", use: viewport(834, 1112) },
    { name: "desktop", use: viewport(1440, 900) },
  ],
  // The production build, not the dev server, so what is measured is what ships.
  webServer: {
    command: `npx serve -s build -l ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
