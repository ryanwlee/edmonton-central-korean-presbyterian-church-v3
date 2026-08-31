import { screen } from "@testing-library/react";
import Direction from "./Direction";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Direction />);
});

it("shows the address and embeds the map", () => {
  const { baseElement } = renderWithRouter(<Direction />);

  expect(
    screen.getByText("2551 Ellwood Dr SW, Edmonton, AB T6X 0P7")
  ).toBeInTheDocument();
  expect(baseElement.querySelector("iframe")).toHaveAttribute(
    "src",
    expect.stringContaining("google.com/maps/embed")
  );
});
