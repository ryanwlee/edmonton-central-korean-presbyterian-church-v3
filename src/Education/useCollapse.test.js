import { renderHook } from "@testing-library/react";
import useCollapse from "./useCollapse";

// jsdom reports scrollHeight as 0, so the expanded case is pinned to a stubbed
// element rather than a real measurement.
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

  withScrollHeight(result, 240);
  rerender({ collapsed: false });

  expect(result.current.height).toBe("240px");
});

it("returns to zero height when collapsed again", () => {
  const { result, rerender } = renderHook(
    ({ collapsed }) => useCollapse(collapsed),
    { initialProps: { collapsed: true } }
  );

  withScrollHeight(result, 240);
  rerender({ collapsed: false });
  rerender({ collapsed: true });

  expect(result.current.height).toBe("0px");
});
