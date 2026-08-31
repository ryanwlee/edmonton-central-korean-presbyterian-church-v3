import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EducationTable from "./EducationTable";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

const DEPARTMENTS = [
  "영유아 유치부",
  "아동부",
  "중고등부",
  "청년부",
  "한글 학교",
];

it("matches snapshot", () => {
  expectSnapshot(<EducationTable />);
});

it("lists every department", () => {
  renderWithRouter(<EducationTable />);

  for (const name of DEPARTMENTS) {
    expect(screen.getByText(name)).toBeInTheDocument();
  }
});

// The panel height comes from scrollHeight, which jsdom always reports as 0, so
// expansion is observed through the row's own styling and its +/- icon instead.
it("expands a department to reveal its details, and collapses it again", async () => {
  const user = userEvent.setup();
  renderWithRouter(<EducationTable />);
  const row = () => screen.getByText("청년부").parentElement;

  expect(row()).toHaveStyleRule("background-color", "#ffffff");
  expect(within(row()).getByTestId("AddIcon")).toHaveStyle("display: block");

  await user.click(screen.getByText("청년부"));

  expect(row()).toHaveStyleRule("background-color", "#5DB683");
  expect(within(row()).getByTestId("RemoveIcon")).toHaveStyle("display: block");
  expect(within(row()).getByTestId("AddIcon")).toHaveStyle("display: none");

  await user.click(screen.getByText("청년부"));

  expect(row()).toHaveStyleRule("background-color", "#ffffff");
  expect(within(row()).getByTestId("AddIcon")).toHaveStyle("display: block");
});

it("shows the 청년부 worship time without a 부 number", () => {
  renderWithRouter(<EducationTable />);

  expect(screen.getByText("매주 주일 오후 1시 30분")).toBeInTheDocument();
  expect(screen.queryByText(/매주 주일 3부/)).toBeNull();
});

it("shows the current department leaders", () => {
  renderWithRouter(<EducationTable />);

  expect(
    screen.getByText("유민아 전도사, 문정란 부장, 김보영 차장")
  ).toBeInTheDocument();
  expect(
    screen.getByText("김회민 목사, 윤숙자 부장, 김병철 차장")
  ).toBeInTheDocument();
  expect(screen.queryByText(/이수지 전도사/)).toBeNull();
});
