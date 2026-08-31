import { screen } from "@testing-library/react";
import Service from "./Service";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Service />);
});

it("shows both the service intro and the donation guide", () => {
  renderWithRouter(<Service />);

  expect(screen.getByText("예배 안내")).toBeInTheDocument();
  expect(screen.getByText("헌금 안내")).toBeInTheDocument();
});
