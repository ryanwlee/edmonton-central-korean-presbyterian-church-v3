import { screen } from "@testing-library/react";
import Announcement from "./Announcement";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Announcement />);
});

it("renders the upcoming events section", () => {
  renderWithRouter(<Announcement />);

  expect(screen.getByText("다가오는 행사")).toBeInTheDocument();
});
