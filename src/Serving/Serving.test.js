import { screen } from "@testing-library/react";
import Serving from "./Serving";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Serving />);
});

it("renders the committee table", () => {
  renderWithRouter(<Serving />);

  expect(screen.getByText("제직회 각 위원회")).toBeInTheDocument();
});
