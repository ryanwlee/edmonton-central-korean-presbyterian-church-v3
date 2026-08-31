import { screen } from "@testing-library/react";
import Donation from "./Donation";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<Donation />);
});

it("shows the e-transfer recipient details", () => {
  renderWithRouter(<Donation />);

  expect(
    screen.getByText("이메일 헌금(Interac e-Transfer)")
  ).toBeInTheDocument();
  // The address appears both in the table and in the fraud warning below it.
  expect(screen.getAllByText("eckpc1988jj@gmail.com")).not.toHaveLength(0);
});

it("shows the cheque mailing address", () => {
  renderWithRouter(<Donation />);

  expect(
    screen.getByText("2551 Ellwood Dr, SW, Edmonton, AB T6X 0P7")
  ).toBeInTheDocument();
});
