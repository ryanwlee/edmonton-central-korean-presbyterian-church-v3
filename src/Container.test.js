import { screen } from "@testing-library/react";
import Container from "./Container";
import { expectSnapshot, renderWithRouter } from "./test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Container component={<p>page content</p>} />);
});

it("renders whatever component it is given", () => {
  renderWithRouter(<Container component={<p>page content</p>} />);

  expect(screen.getByText("page content")).toBeInTheDocument();
});
