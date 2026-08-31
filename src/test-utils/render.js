import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export function renderWithRouter(ui, { route = "/" } = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    ),
  });
}

// baseElement rather than container, so MUI portal content (the Drawer in App
// and the Menu in NavBar) is captured too.
export function expectSnapshot(ui, options) {
  const { baseElement } = renderWithRouter(ui, options);
  expect(baseElement).toMatchSnapshot();
  return baseElement;
}
