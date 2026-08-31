import { screen } from "@testing-library/react";
import Education from "./Education";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Education />);
});

it("renders the education table", () => {
  renderWithRouter(<Education />);

  expect(screen.getByText("교육부")).toBeInTheDocument();
});
