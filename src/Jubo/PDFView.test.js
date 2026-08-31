import { screen } from "@testing-library/react";
import PDFView from "./PDFView";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

it("matches snapshot", () => {
  expectSnapshot(<PDFView file="https://example.test/bulletin.pdf" />);
});

it("passes the file through to the viewer and fits it to the page", () => {
  renderWithRouter(<PDFView file="https://example.test/bulletin.pdf" />);

  expect(screen.getByTestId("pdf-viewer")).toHaveAttribute(
    "data-file-url",
    "https://example.test/bulletin.pdf"
  );
  expect(screen.getByTestId("pdf-viewer")).toHaveAttribute(
    "data-default-scale",
    "PageFit"
  );
});

// pdfjs-dist is hard-pinned to 3.4.120 by @react-pdf-viewer, and the worker is
// loaded from a CDN URL that has to match that exact version.
it("loads a worker matching the pinned pdfjs-dist version", () => {
  const { version } = require("pdfjs-dist/package.json");
  renderWithRouter(<PDFView file="https://example.test/bulletin.pdf" />);

  expect(screen.getByTestId("pdf-worker")).toHaveAttribute(
    "data-worker-url",
    `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`
  );
});
