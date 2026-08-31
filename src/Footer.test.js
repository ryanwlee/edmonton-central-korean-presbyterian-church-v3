import { screen } from "@testing-library/react";
import Footer from "./Footer";
import { expectSnapshot, renderWithRouter } from "./test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Footer />);
});

it("shows the church contact details", () => {
  renderWithRouter(<Footer />);

  expect(
    screen.getByText("2551 Ellwood Dr SW, Edmonton, AB T6X 0P7")
  ).toBeInTheDocument();
  expect(screen.getByText("+1 (780)437-6229")).toBeInTheDocument();
  expect(screen.getByText("eckpc1988@gmail.com")).toBeInTheDocument();
});

it("links out to the youtube live stream and grace central", () => {
  renderWithRouter(<Footer />);

  expect(screen.getByAltText("Youtube").closest("a")).toHaveAttribute(
    "href",
    "https://www.youtube.com/channel/UCzz-Hi9PzGYiQE0zEOn8idg/live"
  );
  expect(screen.getByAltText("Gracechurch").closest("a")).toHaveAttribute(
    "href",
    "https://www.grace-central.com/"
  );
});
