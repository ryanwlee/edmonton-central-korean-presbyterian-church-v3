# Church Site Modernization Plan

## Current State Summary

- **Framework:** Create React App (`react-scripts` 5.0.1) — **deprecated and unmaintained**
- **React:** 18.2, **Router:** v6, **UI:** MUI v5 + styled-components v6 + inline styles (mixed)
- **Language:** JavaScript (no TypeScript, no jsconfig)
- **Content:** Mostly static (hardcoded Korean text, one PHP upload endpoint)
- **Deployment:** cPanel / Apache with committed `build/` directory
- **Issues:** orphaned React Native stub at root, duplicated hooks, no-op `Container` wrapper, external links using `<Link>` incorrectly

---

## Phase 1: Migrate from CRA to Vite

CRA is deprecated. Vite is the recommended replacement — same dev experience, much faster builds, actively maintained.

- Initialize Vite with React template
- Move `public/index.html` to Vite's `index.html` (root-level, with `<script type="module">` entry)
- Replace `react-scripts` scripts with Vite equivalents
- Remove `react-scripts`, `web-vitals`, `reportWebVitals.js`, `setupTests.js`
- Add `vite.config.js` with proper SPA fallback for react-router

---

## Phase 2: Add TypeScript

- Add `tsconfig.json` with strict settings
- Rename `.js` → `.tsx` / `.ts` across the project
- Add proper type annotations (props interfaces, event types)
- Remove `prop-types` dependency (redundant with TS)

---

## Phase 3: Upgrade Dependencies

| Package | Current | Target | Notes |
|---------|---------|--------|-------|
| react / react-dom | 18.2 | 19.x | New hooks, compiler-ready |
| react-router-dom | 6.22 | 7.x | Framework-agnostic upgrade from v6 |
| @mui/material | 5.15 | 6.x | New theming, pigment CSS |
| @mui/icons-material | 5.15 | 6.x | Match MUI core |
| @emotion/react | 11.11 | 11.x (latest) | Minor bump |
| styled-components | 6.1 | **Remove** | Consolidate to MUI/Emotion only |
| @react-pdf-viewer | 3.12 | 4.x | Requires pdfjs-dist update |
| pdfjs-dist | 3.4.120 | 4.x+ | Match viewer |
| prettier | 3.4 | 3.x (latest) | Minor bump |

**Remove entirely:**
- `@babel/plugin-proposal-private-property-in-object` (CRA workaround)
- `@testing-library/*` (move to Vitest if tests needed later)
- `@fontsource/roboto` (load via CDN or keep — minor)
- `prop-types`

**Add:**
- `vite`, `@vitejs/plugin-react`
- `typescript`, `@types/react`, `@types/react-dom`
- `eslint` + `@eslint/js` + `typescript-eslint` (replace CRA eslint config)

---

## Phase 4: Architecture Restructuring

### 4a. Consolidate Styling → MUI Theme Only

Currently three styling systems coexist. Consolidate to **MUI's `sx` prop + a custom theme**:

- Create a proper MUI theme (`theme.ts`) with the church's colors (`#5DB683` green, `#353535` text), typography (KoPubWorld fonts, establishRetrosans), and breakpoints
- Replace all styled-components (`Style/index.js`, `styles.js`, `NavBar`, `Hero`, etc.) with MUI `sx` or `styled()` from `@mui/material/styles`
- Remove `createGlobalStyle` — use MUI's `CssBaseline` + theme `components` overrides for global font-face
- Remove `styled-components` package entirely

### 4b. Restructure File Organization

```
src/
  app/
    App.tsx            (layout shell)
    router.tsx         (route definitions)
    theme.ts           (MUI theme + fonts)
  components/
    layout/
      NavBar.tsx
      Footer.tsx
      Hero.tsx
      MobileDrawer.tsx
    common/
      PDFViewer.tsx
      CollapseSection.tsx   (single shared hook)
  pages/
    Home/
    Intro/
    Service/
    Education/
    Serving/
    Jubo/
    Reservation/
    Announcement/
    Admin/
  data/
    history.ts
    navigation.ts
  hooks/
    useCollapse.ts     (single copy, shared)
  assets/
    fonts/
    images/
```

### 4c. Fix Architectural Issues

- **Remove orphaned files:** root `App.js`, `mobile/`, `src/screens/HomeScreen.js`, `yarn-error.log`
- **Remove committed `build/`** — add proper `.gitignore`
- **Remove no-op `Container` wrapper** — apply padding via layout/theme
- **Extract nav config** into `data/navigation.ts` instead of inline in App
- **Fix external links** — use `<a>` or MUI `Link` with `href` for external URLs
- **Deduplicate `useCollapse`** — one copy in `hooks/`
- **Merge duplicate Admin components** — `Admin.js` and `JuboUpload.js` are the same; keep one
- **Rename `Reservation/Intro.js` → `Reservation/Reservation.js`** for clarity (avoid confusion with `Intro/` page)

### 4d. Environment Configuration

- Add `.env` support via Vite (`VITE_` prefix)
- Move hardcoded URLs (PDF path, Spotify, etc.) to env vars or a `config.ts` constants file
- Add `.env.example` to repo
