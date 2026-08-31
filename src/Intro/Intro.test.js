import { screen } from "@testing-library/react";
import Intro from "./Intro";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Intro />);
});

it("shows the senior pastor, the staff list and every history decade", () => {
  renderWithRouter(<Intro />);

  expect(screen.getByText("정동호")).toBeInTheDocument();
  expect(screen.getByText("섬기는 사람들")).toBeInTheDocument();

  for (const decade of [1980, 1990, 2000, 2010, 2020]) {
    expect(screen.getByText(`${decade} 년대`)).toBeInTheDocument();
  }
});
