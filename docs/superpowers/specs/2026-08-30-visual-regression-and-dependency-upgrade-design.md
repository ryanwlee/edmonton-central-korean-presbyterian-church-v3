# Visual regression harness + staged dependency upgrade

**Date:** 2026-08-30
**Status:** Complete (see Outcomes)

## Goal

Upgrade every outdated package in `package.json` without changing how the site
looks or behaves. Build the safety net first, then move one package at a time so
any regression is attributable to a single commit.

## The actual root problem: an unpinned dependency tree

Neither lockfile is committed (`.gitignore` excludes both `package-lock.json`
and `yarn.lock`), so every `npm install` re-resolves the whole transitive tree
to the newest versions still inside each semver range. `react-scripts@5.0.1`
declares loose ranges, so the tree had already drifted into a state where
`npm run build` fails on an unmodified checkout:

- `webpack` — declared `^5.64.4`, resolved to **5.110.2**. That version no
  longer picks the `module` field for MUI's nested `package.json` subpath
  folders, so it loads their CommonJS entries instead. Those define exports via
  `Object.defineProperty(exports, "default", { get })`, which webpack's ESM
  interop cannot see statically, producing a cascade of misleading errors such
  as `'@mui/utils/refType' does not contain a default export`. Pinned to
  `5.88.2` via `overrides`.
- `eslint` — `fork-ts-checker-webpack-plugin` declares an optional peer of
  `eslint: ">= 6"`, so npm hoisted **10.3.0** and pushed CRA's own eslint 8 and
  `eslint-config-react-app` down into `react-scripts/node_modules`. The project
  root can then no longer resolve the `"react-app"` config. Pinned to `8.57.1`
  via `overrides`, which fixes the version but not the nesting, so CRA's lint
  step is switched off in `.env` with `DISABLE_ESLINT_PLUGIN=true`. Linting does
  not affect emitted output.

This reframes the task. The direct dependencies being old is the lesser problem;
the tree drifting on every install is the bigger one. **Committing a lockfile is
the highest-value change available here** and should happen before any upgrade,
otherwise every step is measured against a moving target.

Note the two MUI imports that first appeared to break the build
(`Height`/`Widgets` in `Events.js`, `Button` in `Hero.js`) were red herrings.
They are unused, but they compile fine once webpack is pinned, so the app source
is left untouched.

## Constraints discovered during exploration

- `react-scripts@5.0.1` is the final Create React App release. It did not appear
  in `npm outdated` because nothing newer exists. Decision: stay on CRA, revisit
  only if an upgrade actually breaks the build.
- `@react-pdf-viewer/*@3.12` is unmaintained, hard-pins `pdfjs-dist@3.4.120`, and
  declares a React `^16 || ^17 || ^18` peer range. `pdfjs-dist` therefore cannot
  move at all, and the React 19 step will hit a peer conflict. Decision: defer,
  handle it when the React 19 step reaches it.
- All fonts are bundled locally (`src/fonts/*.ttf|woff`). No webfont CDN, so
  screenshots are font-stable and blocking Google in tests is safe.
- Nothing in `src/` uses `matchMedia`, `IntersectionObserver`, or `Date`.
  Responsiveness is entirely styled-components media queries, so jsdom needs no
  special handling today.
- Dead code, excluded from testing: `src/Admin/JuboUpload.js` (superseded by the
  copy inlined into `Admin.js`), `src/screens/HomeScreen.js`, `src/Component.js`.

## Architecture

Two independent layers. Neither depends on the other; both must pass.

### Layer 1 — Jest + React Testing Library (jsdom)

Runs under the existing `react-scripts test`. Fast inner loop, ~35 test files.

- `src/setupTests.js` registers the `jest-styled-components` and `@emotion/jest`
  snapshot serializers. This is the load-bearing decision: without them a MUI
  upgrade shows up as `css-1a2b3c` → `css-9x8y7z`, which is unreviewable. With
  them the snapshot contains the actual CSS declarations, so the diff reads
  `padding: 16px` → `padding: 12px`. It also stubs `matchMedia`, which MUI's
  `Drawer` and `Modal` begin using in later majors.
- `src/test-utils/render.js` exposes `renderWithRouter` and `snapshotOf`, so each
  test file is a handful of lines rather than repeating router setup 35 times.
  Snapshots capture `baseElement` (not `container`) so MUI portal content —
  the `Drawer` in `App.js` and the `Menu` in `NavBar.js` — is included.
- `@react-pdf-viewer/core` and `/default-layout` are replaced via Jest
  `moduleNameMapper` with a single stub, since jsdom has no canvas or worker.
  `moduleNameMapper` is one of the few Jest keys CRA allows to be overridden.
- `GlobalFonts` is deliberately *not* wrapped around every render; four
  `@font-face` blocks in all 35 snapshots would be pure noise. It gets its own
  dedicated snapshot test instead.

Every component and page gets a render-and-snapshot test. Five areas also get
behavior tests, where a snapshot alone would miss a regression:

| Area | Behavior asserted |
| --- | --- |
| `NavBar` | hover menu opens, nav links point at the right routes |
| `EducationTable` | row expands and collapses, +/- icons swap |
| `ServingTable` | row expands and collapses |
| `Admin` | validation messages, upload success and failure vs. mocked `fetch` |
| `Reservation/Intro` | each room button opens its calendar URL |

`ServiceTimeTable` additionally asserts its service times as text, because that
content is edited by hand often and a stale snapshot would silently bless a typo.

### Layer 2 — Playwright (real pixels)

- Chromium only, three viewports: 390×844, 834×1112, 1440×900. Firefox and
  WebKit would triple the baselines to 81 PNGs and say nothing extra about a
  MUI upgrade.
- 9 routes × 3 viewports = 27 baseline PNGs committed under `tests/visual/`.
- Runs against a production build served by `serve` on port 4173, not the dev
  server, so what is measured is what ships.
- Determinism: abort all requests to `google.com`, `unpkg.com`, and
  `edmontoncc.net`; mask the two iframes and the PDF viewer region; capture with
  `animations: "disabled"` and `caret: "hide"`; allow `maxDiffPixelRatio` 0.002
  for antialiasing.

### Supporting refactor

`src/index.js` calls `createRoot` at module load, so its route table cannot be
imported by a test. The table moves to `src/routes.js` and `index.js` imports it.
Without this, the Jest and Playwright layers would each hardcode their own copy
of the route list.

## Upgrade order

Cheapest and least visual first, so a failure is easy to attribute. One commit
per step; full suite between each; revert the single commit on regression.

1. `web-vitals` 2 → 6 (only consumed by `reportWebVitals.js`)
2. `@testing-library/{jest-dom,react,user-event}` (test-only)
3. `react-router-dom` 6 → 7
4. `react` + `react-dom` 18 → 19 (expected peer conflict with `@react-pdf-viewer`)
5. `@mui/material` + `@mui/icons-material` 5 → 6 → 7 → 8 → 9, one major at a
   time with the official codemods. Nearly all visual risk lives here.
6. `pdfjs-dist` — blocked until the PDF viewer question is reopened.

A screenshot diff is not automatically a failure. At each step the diff is
reviewed: if the change is explainable and acceptable, the baseline is updated in
the same commit; if not, that commit is reverted on its own.

## Outcomes

Every step landed. Final suite: 36 Jest files / 112 tests / 36 snapshots, and 27
Playwright screenshots, all passing against a production build.

`package-lock.json` is now tracked and `yarn.lock` is deleted, so the tree no
longer re-resolves on install. This was the prerequisite that made the rest of
the ladder measurable.

Deviations from the plan and what each cost:

- **`web-vitals` 2 → 6.** The `getCLS`-style API is gone in favour of `onCLS`.
  `reportWebVitals.js` and its test were rewritten against the new names.
- **`react-router-dom` 6 → 7.** Two Jest-only problems, neither affecting the
  app. Router 7 needs `TextEncoder`, absent from CRA's jsdom, so `setupTests.js`
  polyfills it. And Jest 27 ignores `package.json` `exports`, so it cannot
  resolve the `react-router/dom` subpath; a `moduleNameMapper` entry points at
  the real file. Router 7 also adds `data-discover="true"` to every `Link`
  anchor, which is cosmetic — snapshots were regenerated.
- **`react` 18 → 19.** The predicted `@react-pdf-viewer` peer conflict was a
  warning only, not a break. Because the automated suite masks the PDF region,
  `/jubo` was verified by hand with `tests/manual/jubo-live-check.js`, which
  loads the real remote PDF (proxied to add the CORS header the origin omits)
  and asserts canvases render with no console errors. Two pages rendered clean.
- **`@mui/material` 5 → 6 → 7 → 9.** v8 had nothing needing separate handling,
  so it was folded into the v9 step. Grid moved twice — `Unstable_Grid2` →
  `Grid2` in v6, then `Grid2` → `Grid` in v7 — and responsive props changed from
  `xs={12} md={6}` to `size={{ xs: 12, md: 6 }}`, touching `Pastors.js` and
  `Home/Explorer.js`. v7 and v9 also renamed Drawer/Grid classes and added
  dialog a11y attributes, all cosmetic in snapshots.

  The only real pixel diff of the whole ladder was `/intro` at 390px on v6, and
  it was a fix: MUI 5's negative-margin Grid overflowed the viewport by 12px,
  and v6's gap-based Grid does not. Baseline accepted.
- **`styled-components`, `@fontsource/roboto`, `prettier`** took their remaining
  minors with no diff.
- **`pdfjs-dist` stays at 3.4.120,** as planned. `@react-pdf-viewer@3.12` hard-
  pins it and `PDFView.js` loads a matching worker from unpkg, so it can only
  move when the viewer itself is replaced.

Still outstanding, by decision rather than oversight: CRA remains the build tool,
its lint step remains disabled in `.env`, and `webpack`/`eslint` remain pinned
through `overrides`. All three are load-bearing for the build and should be
revisited together whenever CRA is replaced.

## Postscript: the harness missed `npm start`

After the ladder was declared green, `npm start` failed with 39 errors while
`npm run build` still succeeded. **The harness only ever exercised the
production build**, so a dev-server-only breakage survived every gate. That is
the significant gap, not the specific bug.

Two independent faults were involved:

1. **`node_modules` had drifted from the lockfile.** Disk carried webpack
   5.110.2 while the lockfile correctly pinned 5.88.2, and `npm ls` flagged the
   tree `invalid`. This reproduced the original MUI CommonJS errors. `npm ci`
   restored the locked tree and the build compiled again; a subsequent plain
   `npm install` held the pin, so the tree is stable once correct. The exact
   command that desynced it was never identified — the npm logs in the window
   contain only unrelated global installs.

   **`npm ci` is the correct install command for this project.** `npm install`
   is what allowed the drift to persist unnoticed.

2. **`react-refresh` was duplicated**, which is what actually broke `npm start`.
   `@pmmmwh/react-refresh-webpack-plugin@0.5.17` declares a wide peer range
   (`>=0.10.0 <1.0.0`), so npm hoisted **0.17.0** to the root and pushed CRA's
   own `^0.11.0` down into `react-scripts/node_modules`. CRA allowlists the Fast
   Refresh runtime in `ModuleScopePlugin` via `require.resolve` from inside
   `react-scripts`, which finds the nested 0.11.0 copy — but the import Babel
   injects into every module resolves to the hoisted 0.17.0 copy. The two paths
   differ, so `ModuleScopePlugin` rejected every file in `src/` with "falls
   outside of the project src/ directory".

   Fixed by adding `react-refresh: 0.11.0` to `overrides`, collapsing both to a
   single deduped copy. This is the same failure mode as webpack and eslint: a
   loose transitive range inside an unmaintained CRA 5.0.1.

Verified after the fix: dev server compiles and renders, production build
compiles, 112 Jest tests and 27 Playwright screenshots pass.

Worth adding: a smoke check that boots `npm start`, waits for "Compiled
successfully", and loads one page. Every gate in this document tests the shipped
bundle, and nothing tests the loop the developer actually works in.

## Postscript 2: the harness missed interactive state

The navbar's 예배 dropdown rendered as a white rounded panel with its white menu
text effectively invisible. Cause: `NavBar.js` styled the menu through the
top-level `PaperProps` and `MenuListProps`, which MUI replaced with
`slotProps.paper` and `slotProps.list`. By v9 the old props are ignored
outright, so every style silently reverted to the default light Paper.

This is the failure mode the emotion snapshot serializer was chosen to prevent,
and it still slipped through, for the same reason as the dev server: **nothing
exercised the open menu.** The page screenshots only capture the navbar at rest,
and the existing Jest dropdown test asserted `href`s rather than appearance.

Fixed by moving both to `slotProps`. The list also needed `disablePadding`
instead of `sx: { padding: 0 }` — MUI's `MuiList-padding` class still won on
specificity, leaving the original 8px top and bottom padding in place.

Two guards were added, one per gap:

- `NavBar.test.js` asserts the menu paper's background and radius and the
  list's padding, so the styling contract fails fast in jsdom.
- `pages.spec.js` opens the dropdown and screenshots it, desktop only — the
  navbar links are `display: none` below the 900px `md` breakpoint.

The general lesson across both postscripts: this harness verifies *the built
bundle at rest*. Anything that only exists in the dev server, or only after a
user interacts, is still unguarded unless a test explicitly puts it there.

Unrelated pre-existing noise surfaced while checking the dev console: custom
props (`active`, `visible`, `transitionTime`) are forwarded to DOM nodes by
styled-components, and two iframe attributes are lowercased
(`allowfullscreen`, `referrerpolicy`). React 19 reports these more loudly. They
do not affect rendering and were left alone.
