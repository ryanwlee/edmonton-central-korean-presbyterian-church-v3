import { screen } from "@testing-library/react";
import { timeTableHandler } from "./Handler";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

const rows = [
  { date: "9.18", content: ["첫 예배를 드림", "두 번째 줄"], background: "grey" },
  { date: "9.25", content: ["노회 가입을 승인"], background: "white" },
];

it("matches snapshot", () => {
  expectSnapshot(timeTableHandler(rows));
});

it("renders a row per entry with all of its content lines", () => {
  renderWithRouter(timeTableHandler(rows));

  expect(screen.getByText("9.18")).toBeInTheDocument();
  expect(screen.getByText("첫 예배를 드림")).toBeInTheDocument();
  expect(screen.getByText("두 번째 줄")).toBeInTheDocument();
  expect(screen.getByText("노회 가입을 승인")).toBeInTheDocument();
});

it("renders nothing for an empty history", () => {
  const { container } = renderWithRouter(timeTableHandler([]));

  expect(container.firstChild).toBeEmptyDOMElement();
});
