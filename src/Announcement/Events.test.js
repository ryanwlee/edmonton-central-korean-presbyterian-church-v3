import { screen } from "@testing-library/react";
import Events from "./Events";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Events />);
});

it("shows the event date badge and placeholder copy", () => {
  renderWithRouter(<Events />);

  expect(screen.getByText("MAR")).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
  expect(screen.getByText("이벤트 타이틀")).toBeInTheDocument();
});
