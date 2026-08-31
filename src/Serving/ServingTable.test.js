import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ServingTable from "./ServingTable";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

const COMMITTEES = [
  "예배 위원회",
  "선교 위원회",
  "봉사 위원회",
  "새가족 위원회",
  "양육 위원회",
  "관리 위원회",
  "교육 위원회",
  "재정 위원회",
  "기획 위원회",
  "감사 위원회",
  "찬양대",
];

it("matches snapshot", () => {
  expectSnapshot(<ServingTable />);
});

it("lists every committee", () => {
  renderWithRouter(<ServingTable />);

  for (const name of COMMITTEES) {
    expect(screen.getByText(name)).toBeInTheDocument();
  }
});

// The panel height comes from scrollHeight, which jsdom always reports as 0, so
// expansion is observed through the row's own styling and its +/- icon instead.
it("expands a committee to reveal its duties, and collapses it again", async () => {
  const user = userEvent.setup();
  renderWithRouter(<ServingTable />);
  const row = () => screen.getByText("예배 위원회").parentElement;

  expect(row()).toHaveStyleRule("background-color", "#ffffff");
  expect(within(row()).getByTestId("AddIcon")).toHaveStyle("display: block");

  await user.click(screen.getByText("예배 위원회"));

  expect(row()).toHaveStyleRule("background-color", "#5DB683");
  expect(within(row()).getByTestId("RemoveIcon")).toHaveStyle("display: block");

  await user.click(screen.getByText("예배 위원회"));

  expect(row()).toHaveStyleRule("background-color", "#ffffff");
  expect(within(row()).getByTestId("AddIcon")).toHaveStyle("display: block");
});

it("keeps committee duties in the DOM so they can be revealed", () => {
  renderWithRouter(<ServingTable />);

  expect(screen.getByText("강단 장식")).toBeInTheDocument();
});
