import { screen } from "@testing-library/react";
import Hero from "./Hero";
import { expectSnapshot, renderWithRouter } from "./test-utils/render";

it("matches snapshot when visible", () => {
  expectSnapshot(<Hero heroImage="hero.png" visible transitionTime={1000} />);
});

it("matches snapshot when hidden", () => {
  expectSnapshot(
    <Hero heroImage="hero.png" visible={false} transitionTime={1000} />
  );
});

it("shows the sunday service times", () => {
  renderWithRouter(<Hero heroImage="hero.png" />);

  expect(screen.getByText("주일 예배")).toBeInTheDocument();
  expect(screen.getByText("1부 | 오전 9:00")).toBeInTheDocument();
  expect(screen.getByText("2부 | 오전 11:00")).toBeInTheDocument();
});
