import { screen } from "@testing-library/react";
import ServiceIntro from "./ServiceIntro";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<ServiceIntro />);
});

it("shows the office hours and the live stream link", () => {
  renderWithRouter(<ServiceIntro />);

  expect(
    screen.getByText("화, 수, 목, 금 오전 9:30 ~ 오후 4:00")
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "라이브 방송 보기" })).toHaveAttribute(
    "href",
    "https://www.youtube.com/channel/UCzz-Hi9PzGYiQE0zEOn8idg/live"
  );
});

it("shows the schedule table alongside the church map", () => {
  renderWithRouter(<ServiceIntro />);

  expect(
    screen.getByRole("table", { name: "예배 시간 안내" })
  ).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    expect.stringContaining("churchMap")
  );
});
