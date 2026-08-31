import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryHandler from "./HistoryHandler";
import HistoryData from "./HistoryData";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

const props = {
  data: HistoryData[1980],
  initialYear: 1988,
  shortInitialYear: 80,
};

it("matches snapshot when expanded", () => {
  expectSnapshot(<HistoryHandler {...props} initialShow />);
});

it("matches snapshot when collapsed", () => {
  expectSnapshot(<HistoryHandler {...props} initialShow={false} />);
});

it("hides the timeline until the decade is expanded", async () => {
  const user = userEvent.setup();
  renderWithRouter(<HistoryHandler {...props} initialShow={false} />);

  expect(screen.queryByAltText("Timeline")).toBeNull();

  await user.click(screen.getByText("1980 년대"));

  expect(screen.getByAltText("Timeline")).toBeInTheDocument();
});

it("collapses again when the decade label is clicked twice", async () => {
  const user = userEvent.setup();
  renderWithRouter(<HistoryHandler {...props} initialShow />);

  await user.click(screen.getByText("1980 년대"));

  expect(screen.queryByAltText("Timeline")).toBeNull();
});

it("swaps the history entries when a timeline year is picked", async () => {
  const user = userEvent.setup();
  renderWithRouter(<HistoryHandler {...props} initialShow />);

  const [, secondYear] = screen.getAllByAltText("Ellipse");
  await user.click(secondYear);

  expect(screen.getByText("1989")).toBeInTheDocument();
});
