# Phase 4: Architecture Restructuring — Detailed Plan

## Pre-restructuring State (after Phase 3)

- Vite + TypeScript + React 19 + MUI v6 + React Router v7
- styled-components still in use (to be removed in 4a)
- Flat file structure with feature folders directly under `src/`
- Duplicated hooks, orphaned files, inconsistent styling

---

## Execution Order

Execute Phase 4 substeps **sequentially**:

1. **4a first** (styling consolidation) - removes styled-components dependency
2. **4b second** (file reorganization) - moves files to new structure
3. **4c third** (cleanup) - removes orphaned files and fixes issues
4. **4d last** (environment config) - adds config files

**Do not run these in parallel** - each substep depends on the previous being complete.

---

## 4a. Consolidate Styling → MUI Theme Only

### Goal

Remove styled-components and inline style objects. Use a single styling system: MUI's `sx` prop + `styled()` from `@mui/material/styles` + a centralized theme.

### Step 4a-1: Create the MUI theme

Create `src/app/theme.ts`:

```ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#5DB683" },
    text: { primary: "#353535" },
    background: { default: "#FFFFFF", paper: "#F5F6F6" },
  },
  typography: {
    fontFamily: "'KoPubWorld Dotum Light', sans-serif",
    h1: {
      fontFamily: "establishRetrosansOTF",
      fontSize: "22px",
      fontWeight: 500,
      color: "#353535",
    },
    h2: {
      fontFamily: "establishRetrosansOTF",
      fontSize: "22px",
      fontWeight: 500,
      color: "#5DB683",
    },
    body1: {
      fontFamily: "'KoPubWorld Dotum Light'",
      fontSize: "16px",
      color: "#353535",
    },
    body2: {
      fontFamily: "'KoPubWorld Dotum Medium'",
      fontSize: "16px",
      color: "#353535",
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1280, xl: 1440 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'KoPubWorld Dotum Bold';
          src: url('/src/assets/fonts/KoPubWorldDotumBold.ttf');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'KoPubWorld Dotum Light';
          src: url('/src/assets/fonts/KoPubWorldDotumLight.woff');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'establishRetrosansOTF';
          src: url('/src/assets/fonts/establishRetrosansOTF.woff');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'KoPubWorld Dotum Medium';
          src: url('/src/assets/fonts/KoPubWorldDotumMedium.ttf');
          font-weight: normal;
          font-style: normal;
        }
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `,
    },
  },
});

export default theme;
```

**Note:** Font paths shown use absolute paths assuming fonts will be moved to `public/fonts/`. If keeping fonts in `src/assets/fonts/`, use module imports instead:

```ts
import KoPubWorldDotumBold from '../assets/fonts/KoPubWorldDotumBold.ttf';

// Then in styleOverrides:
src: url('${KoPubWorldDotumBold}');
```

### Step 4a-2: Wire the theme into the app

Update `src/index.tsx`:
```tsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./app/theme";

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
```

This replaces `<GlobalFonts />` (the styled-components `createGlobalStyle`) and `index.css`.

### Step 4a-3: Migrate styled-components → MUI `sx` or `styled()`

For each file currently using `styled-components`:

| File | Current pattern | Migration approach |
|------|----------------|-------------------|
| `src/styles.ts` | `createGlobalStyle` for fonts | Replaced by theme `CssBaseline` overrides (Step 4a-1) — delete file |
| `src/Style/index.ts` | Shared `Container`, `Wrapper`, breakpoints, style objects | Convert to MUI Box + sx prop, or keep as plain objects used in `sx` |
| `src/Hero.tsx` | `HeroContainer`, `HeroContent` with transition props | Use MUI `styled()` from `@mui/material/styles` |
| `src/NavBar.tsx` | `NavItemCss`, `DropdownContainer`, `Divider`, etc. | Use MUI `styled()` for nav items, `sx` for simple styles |
| `src/Home/Explorer.tsx` | `ExplorerContainer`, `Card` | `sx` prop on Box components |
| `src/Home/MonthVerse.tsx` | `Doublequote`, `MonthVerseContainer`, etc. | `sx` prop on Box/img |
| `src/Home/Service.tsx` | `ImageContainer`, `StyledImage` | MUI `styled()` for responsive images |
| `src/Serving/ServingTable.tsx` | Many styled divs (`ServingInfoRow`, etc.) | MUI `styled()` for interactive/conditional styles |
| `src/Serving/ServingInfoCollapse.tsx` | Collapse wrapper | MUI `styled()` or `sx` |
| `src/Education/EducationTable.tsx` | Similar to ServingTable | Same approach |
| `src/Education/EducationInfoCollapse.tsx` | Collapse wrapper | Same approach |
| `src/Reservation/Intro.tsx` | Buttons, containers | MUI `Button` + `sx`, `Box` with `sx` |
| `src/Intro/HistoryHandler.tsx` | Positioned elements | MUI `styled()` for complex positioning |
| `src/Container.tsx` | Empty wrapper | Delete entirely (see 4c) |

**Migration rules:**
- **Simple static styles** → use `sx` prop on MUI `Box` or component
- **Conditional/dynamic styles** (props-based) → use `styled()` from `@mui/material/styles`
- **Responsive styles** → use `sx` with theme breakpoints: `sx={{ px: { xs: 2, md: 8, lg: 25 } }}`
- **Shared style objects** (like `FlexRow`, `Label`, `Content`) → convert to theme typography variants or keep as `sx` objects in a shared file

### Step 4a-4: Replace `src/Style/index.ts`

Current exports like `Container`, `Wrapper`, `FlexRow`, `Label`, etc. become:

Create `src/app/styles.ts` (shared sx objects):
```ts
import { SxProps, Theme } from "@mui/material/styles";

export const pageContainer: SxProps<Theme> = {
  px: { xs: 2.5, sm: 7.5, md: 7.5, lg: 10, xl: 25 },
  py: { xs: 5, md: 10 },
  textAlign: "center",
};

export const flexRow: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
};

export const flexColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

export const GREY_BG_COLOR = "#F5F6F6";
export const GREEN_COLOR = "#5DB683";
```

Components then use:
```tsx
<Box sx={pageContainer}>...</Box>
```

### Step 4a-5: Remove styled-components

```bash
npm uninstall styled-components
```

Delete:
- `src/styles.ts` (GlobalFonts)
- `src/Style/index.ts` (replaced by `src/app/styles.ts`)
- `src/index.css` (replaced by CssBaseline)
- `src/App.css` (already empty/deleted in Phase 1)

### Step 4a-6: Verify styling migration

Run `yarn dev` after completing 4a. The app should start without build errors (styling may look broken until components are updated, but no import errors should appear).

---

## 4b. Restructure File Organization

### Target structure

```
src/
  app/
    App.tsx              ← layout shell (NavBar + Hero + Outlet + Footer)
    router.tsx           ← route definitions (extracted from index.tsx)
    theme.ts             ← MUI theme (created in 4a)
    styles.ts            ← shared sx objects (created in 4a)
  components/
    layout/
      NavBar.tsx         ← from src/NavBar.tsx
      Footer.tsx         ← from src/Footer.tsx
      Hero.tsx           ← from src/Hero.tsx
      MobileDrawer.tsx   ← extracted from App.tsx (drawer logic)
    common/
      PDFViewer.tsx      ← from src/Jubo/PDFView.tsx
      CollapseSection.tsx ← shared collapse UI component
  pages/
    Home/
      Home.tsx
      Direction.tsx
      Service.tsx
    Intro/
      Intro.tsx
      Pastor.tsx
      Pastors.tsx
      HistoryHandler.tsx
      Handler.tsx
      HistoryData.ts
    Service/
      Service.tsx
      ServiceIntro.tsx
      Donation.tsx
    Education/
      Education.tsx
      EducationTable.tsx
    Serving/
      Serving.tsx
      ServingTable.tsx
    Jubo/
      Jubo.tsx
    Reservation/
      Reservation.tsx    ← renamed from Intro.tsx
    Announcement/
      Announcement.tsx
      Events.tsx
    Admin/
      Admin.tsx          ← single JuboUpload component
  data/
    history.ts           ← from src/Intro/HistoryData.ts
    navigation.ts        ← extracted nav items config
  hooks/
    useCollapse.ts       ← single shared copy
  assets/
    fonts/               ← from src/fonts/
    images/              ← from src/images/
  types/
    assets.d.ts          ← from Phase 2
  vite-env.d.ts
  index.tsx              ← minimal entry (ThemeProvider + RouterProvider)
```

### Step 4b-1: Create directory structure

```bash
mkdir -p src/{app,components/{layout,common},pages,data,hooks,assets/{fonts,images},types}
```

### Step 4b-2: Move files

| From | To |
|------|-----|
| `src/App.tsx` | `src/app/App.tsx` |
| `src/NavBar.tsx` | `src/components/layout/NavBar.tsx` |
| `src/Footer.tsx` | `src/components/layout/Footer.tsx` |
| `src/Hero.tsx` | `src/components/layout/Hero.tsx` |
| `src/Home/*` | `src/pages/Home/*` |
| `src/Intro/*` | `src/pages/Intro/*` |
| `src/Service/*` | `src/pages/Service/*` |
| `src/Education/*` | `src/pages/Education/*` (remove useCollapse.ts) |
| `src/Serving/*` | `src/pages/Serving/*` (remove useCollapse.ts) |
| `src/Jubo/Jubo.tsx` | `src/pages/Jubo/Jubo.tsx` |
| `src/Jubo/PDFView.tsx` | `src/components/common/PDFViewer.tsx` |
| `src/Reservation/Intro.tsx` | `src/pages/Reservation/Reservation.tsx` |
| `src/Announcement/*` | `src/pages/Announcement/*` |
| `src/Admin/Admin.tsx` | `src/pages/Admin/Admin.tsx` |
| `src/Education/useCollapse.ts` | `src/hooks/useCollapse.ts` |
| `src/Intro/HistoryData.ts` | `src/data/history.ts` |
| `src/fonts/*` | `src/assets/fonts/*` |
| `src/images/*` | `src/assets/images/*` |

### Step 4b-3: Extract router into `src/app/router.tsx`

Move route definitions out of `src/index.tsx`:

```tsx
// src/app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home/Home";
// ... other page imports

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div />,
    children: [
      { index: true, element: <Home /> },
      { path: "intro", element: <Intro /> },
      { path: "service", element: <Service /> },
      { path: "education", element: <Education /> },
      { path: "serving", element: <Serving /> },
      { path: "jubo", element: <Jubo /> },
      { path: "reserve", element: <Reservation /> },
      { path: "announcement", element: <Announcement /> },
      { path: "admin", element: <Admin /> },
      { path: "*", element: <Home /> },
    ],
  },
]);
```

### Step 4b-4: Simplify `src/index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import theme from "./app/theme";
import { router } from "./app/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
```

### Step 4b-5: Extract `MobileDrawer.tsx`

Pull the drawer logic out of `App.tsx` into `src/components/layout/MobileDrawer.tsx`:

```tsx
interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}
```

This keeps `App.tsx` as a clean layout shell: NavBar → Hero → Outlet → Footer.

### Step 4b-6: Add path aliases BEFORE updating imports

**First**, add path aliases to make import updates easier.

In `vite.config.ts`:
```ts
resolve: {
  alias: {
    "@": "/src",
  },
  extensions: [".js", ".jsx", ".ts", ".tsx"], // Keep from Phase 1
}
```

In `tsconfig.json`:
```json
{
  "compilerOptions": {
    // ... existing options
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**Then**, run `yarn typecheck` - TypeScript will show all broken imports with clear error messages.

### Step 4b-7: Update all import paths

Use the `@` alias for cleaner imports:
```ts
import theme from "@/app/theme";
import NavBar from "@/components/layout/NavBar";
import { pageContainer } from "@/app/styles";
```

Fix every broken import shown by `yarn typecheck`. This is tedious but TypeScript makes it impossible to miss any.

### Step 4b-8: Verify file reorganization

Run `yarn typecheck` - should pass with zero errors (all imports resolved).
Run `yarn dev` - app should load correctly with new structure.

---

## 4c. Fix Architectural Issues

### Step 4c-1: Remove orphaned files

Delete:
- Root `App.js` (React Native stub, not used by web app)
- `mobile/` directory (empty)
- `src/screens/HomeScreen.js` (React Native screen)
- `src/Component.jsx` (unused, empty component with broken import)
- `src/Admin/JuboUpload.tsx` (duplicate of Admin.tsx — keep Admin.tsx)

**Keep** (needed for cPanel deployment):
- `.htaccess` / `.htaccessBackup` (Apache configuration for SPA routing and PHP settings)

### Step 4c-2: Remove the `Container` wrapper

Currently every route wraps content in:
```tsx
<Container component={<Home />} />
```

Where `Container` is just an empty `<div>`. Remove it — apply page padding via the theme or a shared `sx` object in each page's root `Box`.

In `router.tsx`, change:
```tsx
// Before
{ path: "/", element: <Container component={<Home />} /> }

// After
{ index: true, element: <Home /> }
```

Each page already has its own `<Container>` from `Style/index.ts` (now replaced by `pageContainer` sx in 4a).

### Step 4c-3: Extract navigation config

Create `src/data/navigation.ts`:
```ts
export interface NavItem {
  name: string;
  to?: string;
  href?: string;
  external?: boolean;
  img?: string | null;
}

export const navItems: NavItem[] = [
  { name: "소개", to: "intro" },
  { name: "예배", to: "service" },
  { name: "교육부", to: "education" },
  { name: "사역과 섬김", to: "serving" },
  { name: "주보", to: "jubo" },
  { name: "시설 예약", to: "reserve" },
  {
    name: "주일설교 오디오",
    href: "https://open.spotify.com/show/2Lkolq2OcdFktuWOxbY20d?si=YHcjVU_4QhmF9JKjB1XYyg",
    external: true,
  },
];
```

Import this in `App.tsx`, `NavBar.tsx`, and `MobileDrawer.tsx` instead of defining inline.

### Step 4c-4: Fix external links in Footer

`Footer.tsx` currently uses React Router `<Link to="https://...">` for external links (YouTube, Grace Church). This is incorrect - React Router's `Link` is for internal navigation only.

Change to standard `<a>` tags:
```tsx
<a href="https://www.youtube.com/channel/UCzz-Hi9PzGYiQE0zEOn8idg/live" target="_blank" rel="noopener noreferrer">
  <img src={Youtube} alt="YouTube" style={snsImage} />
</a>

<a href="https://www.grace-central.com/" target="_blank" rel="noopener noreferrer">
  <img src={Gracechurch} alt="Grace Church" style={snsImage} />
</a>
```

Or use MUI's `Link` component with `href` prop (not `to`).

### Step 4c-5: Deduplicate `useCollapse`

Delete:
- `src/Education/useCollapse.ts`
- `src/Serving/useCollapse.ts`

Keep single copy at `src/hooks/useCollapse.ts`. Update imports in `EducationInfoCollapse` and `ServingInfoCollapse`.

### Step 4c-6: Clean up `build/` from git history (if not done in Phase 1)

```bash
git rm -r --cached build/
```

Ensure `.gitignore` has `dist` (Vite output, already done in Phase 1).

### Step 4c-7: Verify cleanup

Check that no orphaned files are imported anywhere:
```bash
grep -r "Component\|HomeScreen\|JuboUpload" src --include="*.tsx" --include="*.ts"
```

Should return no import statements (only this verification command output).

---

## 4d. Environment Configuration

### Step 4d-1: Create constants file

Create `src/data/config.ts`:
```ts
export const JUBO_PDF_URL = import.meta.env.VITE_JUBO_PDF_URL || "https://edmontoncc.net/jubofile/jubo.pdf";
export const UPLOAD_API_URL = import.meta.env.VITE_UPLOAD_API_URL || "/server/apis/jubo.php";

export const EXTERNAL_LINKS = {
  spotify: "https://open.spotify.com/show/2Lkolq2OcdFktuWOxbY20d?si=YHcjVU_4QhmF9JKjB1XYyg",
  youtube: "https://www.youtube.com/channel/UCzz-Hi9PzGYiQE0zEOn8idg/live",
  graceChurch: "https://www.grace-central.com/",
  googleCalendar: "https://calendar.google.com/calendar/embed?src=edmontonccreservation%40gmail.com&ctz=America%2FEdmonton&mode=MONTH&showCalendars=0&showTitle=0",
} as const;
```

### Step 4d-2: Create `.env.example`

```env
# PDF URL for Jubo page
VITE_JUBO_PDF_URL=https://edmontoncc.net/jubofile/jubo.pdf

# Upload API endpoint
VITE_UPLOAD_API_URL=/server/apis/jubo.php
```

### Step 4d-3: Update components to use config

- `Jubo.tsx` → import `JUBO_PDF_URL` from config
- `Admin.tsx` → import `UPLOAD_API_URL` from config
- `Footer.tsx` → import `EXTERNAL_LINKS` from config
- `NavBar.tsx` → Spotify link from `navigation.ts` (already using `navItems`)
- `Reservation.tsx` → Google Calendar embed from config or leave inline (it's complex)

**Ensure `.env` is in `.gitignore`** (should already be from Phase 1).

### Step 4d-4: Verify environment configuration

Test that environment variables load correctly:
```bash
yarn dev
```

Open browser console and check that URLs are loading from config. Try changing a value in `.env` (create it if needed), restart dev server, and verify the change takes effect.

---

## Verification Checklist

After all Phase 4 changes:

- [ ] `yarn typecheck` passes with zero errors
- [ ] `yarn lint` passes (if ESLint configured in Phase 3)
- [ ] `yarn dev` starts without errors
- [ ] All routes render correctly (/, /intro, /service, /education, /serving, /jubo, /reserve, /announcement, /admin)
- [ ] No `styled-components` imports remain in source (grep check)
- [ ] No orphaned files exist (Component, HomeScreen, JuboUpload not imported)
- [ ] `import.meta.env` values load correctly (check browser console)
- [ ] Fonts render correctly (KoPubWorld, establishRetrosans)
- [ ] Responsive breakpoints work (mobile drawer, grid layouts)
- [ ] `Unstable_Grid2` replaced with stable `Grid2` (from Phase 3)
- [ ] External links work correctly (Footer YouTube, Grace Church, Spotify)
- [ ] PDF viewer works on /jubo
- [ ] File upload works on /admin
- [ ] `yarn build` produces clean `dist/` with no warnings

### Per-Substep Verification

- **After 4a:** `yarn dev` runs (may have style issues but no build errors)
- **After 4b:** `yarn typecheck` passes (all imports resolved)
- **After 4c:** No orphaned file references remain
- **After 4d:** Environment variables load correctly

---

## File Change Summary

```
CREATE:   src/app/theme.ts
CREATE:   src/app/styles.ts
CREATE:   src/app/router.tsx
CREATE:   src/components/layout/MobileDrawer.tsx
CREATE:   src/data/navigation.ts
CREATE:   src/data/config.ts
CREATE:   .env.example
MOVE:     ~30 files to new directory structure
DELETE:   src/styles.ts (GlobalFonts)
DELETE:   src/Style/index.ts
DELETE:   src/index.css
DELETE:   src/Container.tsx
DELETE:   src/Admin/JuboUpload.tsx
DELETE:   src/Education/useCollapse.ts
DELETE:   src/Serving/useCollapse.ts
DELETE:   src/screens/HomeScreen.js
DELETE:   src/Component.jsx
DELETE:   root App.js
DELETE:   mobile/
MODIFY:   Every remaining file (import paths)
MODIFY:   package.json (remove styled-components)
MODIFY:   vite.config.ts (add @ alias)
MODIFY:   tsconfig.json (add paths)
```
