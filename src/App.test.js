import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// App staggers its hero animation across setTimeout calls, so snapshots are only
// stable once those have run.
const renderApp = (route = "/") => {
  const result = render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div>home page</div>} />
          <Route path="education" element={<div>education page</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  return result;
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

it("matches snapshot on the home route", () => {
  const { baseElement } = renderApp("/");
  expect(baseElement).toMatchSnapshot();
});

it("renders the hero on the home route", () => {
  renderApp("/");

  expect(screen.getByAltText("Hero")).toBeInTheDocument();
  expect(screen.getByText("주일 예배")).toBeInTheDocument();
});

it("hides the hero on routes that have no hero image", () => {
  renderApp("/education");

  expect(screen.queryByAltText("Hero")).toBeNull();
});

it("renders the routed page and the footer", () => {
  renderApp("/education");

  expect(screen.getByText("education page")).toBeInTheDocument();
  expect(screen.getByText("CONTACT")).toBeInTheDocument();
});

it("keeps the drawer navigation mounted for mobile", () => {
  renderApp("/");

  // ModalProps.keepMounted means the drawer contents exist even while closed.
  expect(screen.getByText("메뉴")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "사역과 섬김" })
  ).toHaveAttribute("href", "/serving");
});
