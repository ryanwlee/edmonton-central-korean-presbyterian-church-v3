import { screen } from "@testing-library/react";
import MonthVerse from "./MonthVerse";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<MonthVerse />);
});

it("shows the verse and its reference", () => {
  renderWithRouter(<MonthVerse />);

  expect(screen.getByText("8월 요절 말씀")).toBeInTheDocument();
  expect(screen.getByText("골 2:14-15")).toBeInTheDocument();
});
