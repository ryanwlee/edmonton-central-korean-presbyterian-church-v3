import { screen } from "@testing-library/react";
import EducationInfoCollapse from "./EducationInfoCollapse";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot when collapsed", () => {
  expectSnapshot(
    <EducationInfoCollapse collapsed>
      <p>details</p>
    </EducationInfoCollapse>
  );
});

it("matches snapshot when expanded", () => {
  expectSnapshot(
    <EducationInfoCollapse collapsed={false}>
      <p>details</p>
    </EducationInfoCollapse>
  );
});

it("keeps children mounted but clipped while collapsed", () => {
  renderWithRouter(
    <EducationInfoCollapse collapsed>
      <p>details</p>
    </EducationInfoCollapse>
  );

  const panel = screen.getByText("details").parentElement;

  expect(screen.getByText("details")).toBeInTheDocument();
  expect(panel).toHaveStyle({ height: "0px", overflow: "hidden" });
});
