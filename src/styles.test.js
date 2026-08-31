import { render } from "@testing-library/react";
import GlobalFonts from "./styles";

it("injects the bundled font faces", () => {
  render(<GlobalFonts />);

  const injected = Array.from(document.querySelectorAll("style"))
    .map((tag) => tag.textContent)
    .join("\n");

  expect(injected).toMatchSnapshot();
});
