import routes, { childRoutes } from "./routes";
import { ROUTE_PATHS } from "./routePaths";

it("mounts every page under the App layout", () => {
  expect(routes).toHaveLength(1);
  expect(routes[0].path).toBe("/");
  expect(routes[0].children).toBe(childRoutes);
});

// The Playwright suite reads ROUTE_PATHS because it cannot import JSX. This is
// what stops the two lists from drifting apart.
it("keeps ROUTE_PATHS in sync with the router config", () => {
  const configured = childRoutes
    .map((route) => route.path)
    .filter((path) => path !== "*");

  expect(configured).toEqual(ROUTE_PATHS);
});

it("falls back to the home page for unknown paths", () => {
  const wildcard = childRoutes.find((route) => route.path === "*");

  expect(wildcard).toBeDefined();
  expect(wildcard.element).toBeTruthy();
});
