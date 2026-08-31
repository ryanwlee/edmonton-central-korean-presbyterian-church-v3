import { renderHook } from "@testing-library/react";
import useCollapse from "./useCollapse";

// Duplicated from Education/useCollapse.js in the app source; tested separately
// so a change to one copy cannot pass unnoticed on the strength of the other.
const withScrollHeight = (result, value) => {
  const node = document.createElement("div");
  Object.defineProperty(node, "scrollHeight", { value });
  result.current.ref.current = node;
};

it("reports zero height while collapsed", () => {
  const { result } = renderHook(() => useCollapse(true));

  expect(result.current.height).toBe("0px");
});

it("grows to the content height once expanded", () => {
  const { result, rerender } = renderHook(
    ({ collapsed }) => useCollapse(collapsed),
    { initialProps: { collapsed: true } }
  );

  withScrollHeight(result, 180);
  rerender({ collapsed: false });

  expect(result.current.height).toBe("180px");
});

it("returns to zero height when collapsed again", () => {
  const { result, rerender } = renderHook(
    ({ collapsed }) => useCollapse(collapsed),
    { initialProps: { collapsed: true } }
  );

  withScrollHeight(result, 180);
  rerender({ collapsed: false });
  rerender({ collapsed: true });

  expect(result.current.height).toBe("0px");
});
