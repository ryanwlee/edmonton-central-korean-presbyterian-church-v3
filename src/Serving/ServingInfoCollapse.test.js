import { screen } from "@testing-library/react";
import ServingInfoCollapse from "./ServingInfoCollapse";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot when collapsed", () => {
  expectSnapshot(
    <ServingInfoCollapse collapsed>
      <p>duties</p>
    </ServingInfoCollapse>
  );
});

it("matches snapshot when expanded", () => {
  expectSnapshot(
    <ServingInfoCollapse collapsed={false}>
      <p>duties</p>
    </ServingInfoCollapse>
  );
});

it("keeps children mounted but clipped while collapsed", () => {
  renderWithRouter(
    <ServingInfoCollapse collapsed>
      <p>duties</p>
    </ServingInfoCollapse>
  );

  const panel = screen.getByText("duties").parentElement;

  expect(screen.getByText("duties")).toBeInTheDocument();
  expect(panel).toHaveStyle({ height: "0px", overflow: "hidden" });
});
