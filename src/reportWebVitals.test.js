import reportWebVitals from "./reportWebVitals";
import * as webVitals from "web-vitals";

jest.mock("web-vitals");

// FID is deliberately absent: web-vitals v6 dropped it in favour of INP.
const METRICS = ["onCLS", "onINP", "onFCP", "onLCP", "onTTFB"];

// Checking the real package is what makes a rename in web-vitals fail loudly
// here instead of silently at runtime.
it("depends only on metric functions web-vitals actually exports", () => {
  const actual = jest.requireActual("web-vitals");

  for (const metric of METRICS) {
    expect(typeof actual[metric]).toBe("function");
  }
});

it("subscribes the callback to every metric", async () => {
  // A plain function, not jest.fn(): mock functions are created in a different
  // realm and fail reportWebVitals' `instanceof Function` guard.
  const onPerfEntry = () => {};

  reportWebVitals(onPerfEntry);
  await new Promise((resolve) => setTimeout(resolve, 0));

  for (const metric of METRICS) {
    expect(webVitals[metric]).toHaveBeenCalledWith(onPerfEntry);
  }
});

it("does nothing when not given a function", () => {
  expect(() => reportWebVitals(undefined)).not.toThrow();
  expect(() => reportWebVitals("not a function")).not.toThrow();
});
