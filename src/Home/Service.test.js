import { screen } from "@testing-library/react";
import Service from "./Service";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Service />);
});

it("shows the schedule table alongside the church map", () => {
  renderWithRouter(<Service />);

  expect(screen.getByRole("table", { name: "예배 시간 안내" })).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    expect.stringContaining("churchMap")
  );
});
