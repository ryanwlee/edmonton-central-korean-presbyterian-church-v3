# Phase 3: Upgrade Dependencies — Detailed Plan

## Pre-upgrade State (after Phase 2)

- Vite + TypeScript fully working
- React 18.2, react-router-dom 6.22, MUI 5.15, styled-components 6.1
- @react-pdf-viewer 3.12 with pdfjs-dist 3.4.120
- No prop-types usage (removed in Phase 2)

---

## Overview

Upgrades are ordered by dependency chain — React first (everything depends on it), then router, then UI libraries. Each step should be verified before moving to the next.

---

## Step 1: Upgrade React 18 → 19

**Install:**
```bash
yarn add react@^19 react-dom@^19
yarn add -D @types/react@^19 @types/react-dom@^19
```

**Code changes required:**

1. **None for this project.** The church site does not use any of the removed APIs:
   - No string refs (uses `useRef` only)
   - No `PropTypes` (removed in Phase 2)
   - No `defaultProps` on function components (uses default parameter values instead)
   - No legacy Context API
   - No `ReactDOM.render` (already uses `createRoot`)
   - No `React.createFactory`

2. **Optional cleanup** — can remove explicit `React` import in files that only use JSX:
   
   **React 19 JSX Transform:** React 19's new JSX transform means files with only JSX don't need `import React from 'react'`. The transform is already enabled by Vite, so existing code works without changes. You can optionally remove unused React imports to reduce bundle size.

**Verify:** `yarn dev` — app renders correctly, all routes work, no console errors.

---

## Step 2: Upgrade React Router v6 → v7

**Background:** React Router v7 is a non-breaking upgrade focused on better framework integration. For SPA apps (like this project), the API is identical to v6. **Important:** Continue using `react-router-dom` - it's still the correct package for browser apps.

**Install:**
```bash
yarn add react-router-dom@^7
```

**Code changes:**

**None required.** All imports stay exactly the same:
```ts
import { createBrowserRouter, RouterProvider, Link, Outlet, useLocation } from "react-router-dom";
```

Files using router (no changes needed):
- `src/index.tsx` — `createBrowserRouter`, `RouterProvider`
- `src/App.tsx` — `Outlet`, `useLocation`, `Link`
- `src/NavBar.tsx` — `Link`, `useLocation`
- `src/Footer.tsx` — `Link`

**What changed in v7:**
- Improved type safety
- Better tree-shaking
- Framework features (not used in this project)
- All v6 APIs remain compatible

**Verify:** 
- All routes navigate correctly (/, /intro, /service, /education, /serving, /jubo, /reserve, /announcement, /admin)
- Browser back/forward buttons work
- Mobile drawer links navigate correctly
- No TypeScript errors

---

## Step 3: Upgrade MUI v5 → v6

**Install:**
```bash
yarn add @mui/material@^6 @mui/icons-material@^6 @emotion/react@latest @emotion/styled@latest
```

**Note:** MUI v9 is currently in alpha. Explicitly install v6 for stability.

**Optional:** MUI v6 introduces Pigment CSS (zero-runtime CSS-in-JS). For this migration, stick with Emotion (already installed). Pigment can be evaluated later as an optimization.

**Run codemods** (automates most changes):
```bash
npx @mui/codemod@latest v6.0.0/all src/
```

**Manual code changes:**

### 3a. `Unstable_Grid2` → `Grid2`

The project imports `@mui/material/Unstable_Grid2` in:
- `src/Home/Explorer.tsx`
- `src/Intro/Pastors.tsx`

Change to stable import:
```ts
// Before
import Grid from "@mui/material/Unstable_Grid2";

// After
import Grid from "@mui/material/Grid2";
```

Grid2 in MUI v6 uses `size` prop instead of breakpoint names:
```tsx
// Before
<Grid xs={12} md={6}>

// After
<Grid size={{ xs: 12, md: 6 }}>
```

### 3b. Verify `sx` prop usage

The project already uses `sx` prop correctly on MUI components (`NavBar.tsx`, `App.tsx`). No system props (like `mt`, `p`) are used directly on MUI components, so no deprecation issues.

### 3c. Menu/Paper component props

`NavBar.tsx` uses `MenuListProps` and `PaperProps` on `<Menu>`:
```tsx
// Before
<Menu
  MenuListProps={{ onMouseLeave: handleMenuClose, sx: {...} }}
  PaperProps={{ sx: {...} }}
>

// After (MUI v6 deprecates componentProps in favor of slotProps)
<Menu
  slotProps={{
    list: { onMouseLeave: handleMenuClose, sx: {...} },
    paper: { sx: {...} },
  }}
>
```

### 3d. Drawer `ModalProps`

`src/App.tsx` uses `ModalProps` on `<Drawer>`:
```tsx
// Before
<Drawer ModalProps={{ keepMounted: true }}>

// After (MUI v6 - keepMounted stays as root prop)
<Drawer keepMounted>
```

**Note:** The `keepMounted` prop remains on the Drawer itself in v6. `ModalProps` is deprecated in favor of `slotProps`, but `keepMounted` is not a slot prop.

If other modal props are used:
```tsx
// Before
<Drawer ModalProps={{ BackdropProps: { invisible: true } }}>

// After
<Drawer slotProps={{ backdrop: { invisible: true } }}>
```

The codemod should handle this automatically.

**Verify:** 
- NavBar dropdown menu works
- Mobile drawer opens/closes smoothly
- Grid layouts render correctly (Explorer, Pastors pages)
- No console warnings about deprecated props

---

## Step 4: Handle @react-pdf-viewer + pdfjs-dist

**Situation:** `@react-pdf-viewer` v4 with pdfjs-dist v4 support was merged in the repo but may not have a stable npm release. pdfjs-dist v3 has known security vulnerabilities (CVE-2024-4367, XSS via malicious PDFs).

**Recommended approach — switch to `@react-pdf/renderer` or use pdfjs-dist directly:**

Since the project only displays a single PDF with basic controls, the simplest approach is to upgrade pdfjs-dist and use it with the viewer if v4 is available, or fall back to an iframe embed.

**Option A: Try @react-pdf-viewer v4 (if released)**
```bash
npm install @react-pdf-viewer/core@latest @react-pdf-viewer/default-layout@latest pdfjs-dist@^4
```

Update `PDFView.tsx`:
```tsx
// Worker URL must match installed pdfjs-dist version
<Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.mjs`}>
```

**Option B: If v4 is not available, use iframe fallback (simplest)**

Replace `PDFView.tsx` with a Google Docs viewer or direct PDF embed:
```tsx
const PDFView = ({ file }: PDFViewProps) => (
  <iframe
    src={file}
    width="100%"
    height="800px"
    style={{ border: "none" }}
    title="주보 PDF"
  />
);
```

Then remove:
- `@react-pdf-viewer/core`
- `@react-pdf-viewer/default-layout`
- `pdfjs-dist`

**Option C: Use react-pdf (actively maintained)**
```bash
npm install react-pdf
npm uninstall @react-pdf-viewer/core @react-pdf-viewer/default-layout pdfjs-dist
```

This is a well-maintained alternative that supports pdfjs v4 natively.

**Decision:** Check npm at execution time. If `@react-pdf-viewer@4.x` exists, use Option A. Otherwise, Option C (`react-pdf`) is the best maintained alternative. Option B is the zero-dependency fallback.

---

## Step 5: Remove styled-components (prepare for Phase 4)

**Do NOT remove yet.** styled-components is still used throughout the codebase. In this phase, just ensure it's compatible with React 19:

```bash
npm install styled-components@latest
```

styled-components v6 supports React 19. Actual removal happens in Phase 4a when styles are migrated to MUI theme.

---

## Step 6: Remove unused/unnecessary packages

**Remove from dependencies:**
- `@babel/plugin-proposal-private-property-in-object` (CRA workaround, already removed in Phase 1)
- `@testing-library/jest-dom` (no tests)
- `@testing-library/react` (no tests)
- `@testing-library/user-event` (no tests)
- `web-vitals` (already removed in Phase 1)

```bash
npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

---

## Step 7: Update Prettier

```bash
npm install -D prettier@latest
```

No config changes needed.

---

## Step 8: Add ESLint (replaces CRA's embedded config)

```bash
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks
```

Create `eslint.config.ts`:
```ts
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  { ignores: ["dist/"] }
);
```

Add lint script to `package.json`:
```json
"lint": "eslint src/"
```

---

## Step 9: Verify Everything

```bash
npm run typecheck    # TypeScript passes
npm run lint         # ESLint passes (fix any issues)
npm run dev          # App runs correctly
npm run build        # Production build succeeds
```

Check:
- All routes render
- PDF viewer works (whichever option chosen)
- Fonts load
- Drawer and menu interactions work
- No console errors

---

## Final `package.json` Dependencies (target)

```json
{
  "dependencies": {
    "@emotion/react": "^11.x",
    "@emotion/styled": "^11.x",
    "@fontsource/roboto": "^5.x",
    "@mui/icons-material": "^6.x",
    "@mui/material": "^6.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "react-router": "^7.x",
    "styled-components": "^6.x",
    "react-pdf": "^9.x"
  },
  "devDependencies": {
    "@eslint/js": "^9.x",
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "@vitejs/plugin-react": "^4.x",
    "eslint": "^9.x",
    "eslint-plugin-react-hooks": "^5.x",
    "prettier": "^3.x",
    "typescript": "^5.x",
    "typescript-eslint": "^8.x",
    "vite": "^6.x"
  }
}
```

---

## Risk Assessment

| Upgrade | Risk | Reason |
|---------|------|--------|
| React 18→19 | Low | No deprecated APIs used |
| react-router 6→7 | Low | Simple router, no fetchers/loaders |
| MUI 5→6 | Medium | Grid API change, slotProps migration, codemod helps |
| PDF viewer | Medium | Depends on npm availability of v4, may need library swap |
| styled-components | None | Just version bump, removal is Phase 4 |
| Testing libs removal | None | Never used in source |
