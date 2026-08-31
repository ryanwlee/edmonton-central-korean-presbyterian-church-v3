import { screen } from "@testing-library/react";
import Home from "./Home";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Home />);
});

it("shows the service schedule and the directions section", () => {
  renderWithRouter(<Home />);

  expect(screen.getByText("예배 안내")).toBeInTheDocument();
  expect(screen.getByText("오시는 길")).toBeInTheDocument();
});
