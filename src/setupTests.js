import { TextDecoder, TextEncoder } from "util";
import "@testing-library/jest-dom";
import "jest-styled-components";
import * as emotionSerializer from "@emotion/jest/serializer";

// react-router 7 uses TextEncoder, which the jsdom bundled with Jest 27 (via
// react-scripts) does not expose as a global.
global.TextEncoder = global.TextEncoder ?? TextEncoder;
global.TextDecoder = global.TextDecoder ?? TextDecoder;

// Snapshots must contain real CSS declarations rather than hashed class names,
// otherwise a MUI or styled-components upgrade produces an unreviewable diff of
// css-1a2b3c -> css-9x8y7z instead of showing what actually changed.
expect.addSnapshotSerializer(emotionSerializer);

// jsdom ships no matchMedia. Nothing in src/ calls it today, but MUI's Drawer
// and Modal begin relying on it in later majors, and the upgrade steps must not
// fail for that reason.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
