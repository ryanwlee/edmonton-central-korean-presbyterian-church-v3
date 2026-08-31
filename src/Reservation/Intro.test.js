import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Reservation from "./Intro";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

const ROOMS = [
  "본당",
  "유치부실",
  "소예배실 (아동부실)",
  "교육관 1층 (체육관)",
  "교육관 2층 1 (찬양대실)",
  "교육관 2층 2 (세미나룸)",
  "주방",
];

it("matches snapshot", () => {
  expectSnapshot(<Reservation />);
});

it("offers a booking button for every room", () => {
  renderWithRouter(<Reservation />);

  for (const room of ROOMS) {
    expect(screen.getByRole("button", { name: room })).toBeInTheDocument();
  }
});

it("opens the booking calendar in a new tab when a room is picked", async () => {
  const user = userEvent.setup();
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  renderWithRouter(<Reservation />);

  await user.click(screen.getByRole("button", { name: "주방" }));

  expect(open).toHaveBeenCalledWith(
    expect.stringContaining("calendar.google.com/calendar/appointments"),
    "_blank"
  );
  open.mockRestore();
});

it("embeds the shared reservation calendar", () => {
  renderWithRouter(<Reservation />);

  expect(screen.getByTitle("calendarView")).toHaveAttribute(
    "src",
    expect.stringContaining("calendar.google.com/calendar/embed")
  );
});
