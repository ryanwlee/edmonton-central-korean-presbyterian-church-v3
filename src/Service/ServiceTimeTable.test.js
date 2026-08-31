import { screen } from "@testing-library/react";
import ServiceTimeTable from "./ServiceTimeTable";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

// This content is hand-edited often, so it is asserted as text rather than left
// to the snapshot alone: a stale snapshot would happily bless a wrong time.
const SCHEDULE = [
  ["주일 예배", "주일", ["오전 9시", "오전 11시"], ["본당", "본당 (온라인)"]],
  ["수요 예배", "수", ["오후 7시 30분"], ["본당"]],
  ["새벽기도", "화-토", ["오전 6시"], ["본당"]],
  ["영 · 유아 · 유치부", "주일", ["오전 11시"], ["영유아, 유치부실"]],
  ["아동부", "주일", ["오전 11시"], ["아동부실"]],
  ["중 · 고등부", "주일", ["오전 11시"], ["교육관"]],
  ["청년부 예배", "주일", ["오후 1시 30분"], ["본당"]],
  ["다락방 모임", "매월1회", ["다락방 별 상이"], ["다락방 별 상이"]],
];

const rowFor = (name) =>
  screen.getByText(name).closest('[role="row"]');

it("matches snapshot", () => {
  expectSnapshot(<ServiceTimeTable />);
});

it("renders one row per service, in order", () => {
  renderWithRouter(<ServiceTimeTable />);

  const names = screen
    .getAllByRole("row")
    .map((row) => row.firstChild.textContent);

  expect(names).toEqual(SCHEDULE.map(([name]) => name));
});

// Compared without whitespace because the 다락방 badge is split across two
// spans, and every slot is rendered twice (desktop columns plus mobile stack).
const squash = (value) => value.replace(/\s+/g, "");

it.each(SCHEDULE)(
  "shows %s with its day badge, times and locations",
  (name, badge, times, locations) => {
    renderWithRouter(<ServiceTimeTable />);
    const row = squash(rowFor(name).textContent);

    for (const value of [badge, ...times, ...locations]) {
      expect(row).toContain(squash(value));
    }
  }
);

it("shows the 청년부 service at 오후 1시 30분 without a 부 number", () => {
  renderWithRouter(<ServiceTimeTable />);
  const row = rowFor("청년부 예배");

  expect(row).toHaveTextContent("오후 1시 30분");
  expect(row).not.toHaveTextContent("3부");
});
