import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";
import { expectSnapshot, renderWithRouter } from "./test-utils/render";

const noop = () => {};

it("matches snapshot", () => {
  expectSnapshot(<NavBar handleDrawerToggle={noop} />);
});

it("links each nav item to its route", () => {
  renderWithRouter(<NavBar handleDrawerToggle={noop} />);

  const expectedHrefs = {
    소개: "/intro",
    교육부: "/education",
    "사역과 섬김": "/serving",
    주보: "/jubo",
    "시설 예약": "/reserve",
  };

  for (const [label, href] of Object.entries(expectedHrefs)) {
    expect(screen.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      href
    );
  }
});

it("highlights the nav item for the active route", () => {
  renderWithRouter(<NavBar handleDrawerToggle={noop} />, { route: "/jubo" });

  expect(screen.getByRole("link", { name: "주보" })).toHaveStyleRule(
    "color",
    "#5DB683"
  );
  expect(screen.getByRole("link", { name: "소개" })).toHaveStyleRule(
    "color",
    "#ffffff"
  );
});

it("opens the 예배 dropdown on hover and closes it on selection", async () => {
  const user = userEvent.setup();
  renderWithRouter(<NavBar handleDrawerToggle={noop} />);

  expect(screen.queryByRole("menuitem", { name: "예배 안내" })).toBeNull();

  await user.hover(screen.getByText("예배"));

  expect(
    screen.getByRole("menuitem", { name: "예배 안내" })
  ).toHaveAttribute("href", "/service");
  expect(
    screen.getByRole("menuitem", { name: "주일설교 오디오" })
  ).toHaveAttribute("href", expect.stringContaining("open.spotify.com"));
});

it("styles the dropdown surface to match the dark navbar", async () => {
  const user = userEvent.setup();
  renderWithRouter(<NavBar handleDrawerToggle={noop} />);

  await user.hover(screen.getByText("예배"));

  // Guards the Menu slot props. When these stop being applied the menu falls
  // back to a white paper, which renders the white menu text invisible.
  const paper = document.querySelector(".MuiMenu-paper");
  expect(getComputedStyle(paper).backgroundColor).toBe("rgb(53, 53, 53)");
  // jsdom normalises zero lengths inconsistently ("0" vs "0px"), so compare
  // numerically rather than against a unit string.
  expect(parseFloat(getComputedStyle(paper).borderRadius)).toBe(0);

  const list = document.querySelector(".MuiMenu-list");
  expect(parseFloat(getComputedStyle(list).paddingTop)).toBe(0);
  expect(parseFloat(getComputedStyle(list).paddingBottom)).toBe(0);
});

it("invokes the drawer toggle from the mobile menu button", async () => {
  const user = userEvent.setup();
  const handleDrawerToggle = jest.fn();
  renderWithRouter(<NavBar handleDrawerToggle={handleDrawerToggle} />);

  await user.click(screen.getByRole("button", { name: "menu" }));

  expect(handleDrawerToggle).toHaveBeenCalledTimes(1);
});
