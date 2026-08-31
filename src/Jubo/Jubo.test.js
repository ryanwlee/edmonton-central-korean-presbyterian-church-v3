import { screen } from "@testing-library/react";
import Jubo from "./Jubo";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Jubo />);
});

it("renders the current bulletin PDF", () => {
  renderWithRouter(<Jubo />);

  expect(screen.getByText("주보")).toBeInTheDocument();
  expect(screen.getByTestId("pdf-viewer")).toHaveAttribute(
    "data-file-url",
    "https://edmontoncc.net/jubofile/jubo.pdf"
  );
});
