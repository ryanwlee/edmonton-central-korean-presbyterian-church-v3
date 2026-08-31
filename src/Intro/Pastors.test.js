import { screen } from "@testing-library/react";
import Pastors from "./Pastors";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

const STAFF = [
  "최요한 목사(행정, 청년부)",
  "유지영 목사(유아, 유치부)",
  "김회민 목사(중,고등부)",
  "유민아 전도사(아동부)",
];

it("matches snapshot", () => {
  expectSnapshot(<Pastors />);
});

it("lists every staff member with a portrait", () => {
  renderWithRouter(<Pastors />);

  for (const name of STAFF) {
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByAltText(name)).toBeInTheDocument();
  }
});

it("gives every staff member their own portrait", () => {
  renderWithRouter(<Pastors />);

  const sources = STAFF.map((name) =>
    screen.getByAltText(name).getAttribute("src")
  );

  expect(new Set(sources).size).toBe(STAFF.length);
  expect(sources).not.toContain(expect.stringContaining("placeholder"));
});
