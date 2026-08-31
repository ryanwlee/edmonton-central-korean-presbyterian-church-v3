import { screen } from "@testing-library/react";
import Pastor from "./Pastor";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Pastor />);
});

it("shows the senior pastor's name and title", () => {
  renderWithRouter(<Pastor />);

  expect(screen.getByText("정동호")).toBeInTheDocument();
  expect(screen.getByText("담임 목사")).toBeInTheDocument();
});
