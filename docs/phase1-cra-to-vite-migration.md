# Phase 1: CRA to Vite Migration — Detailed Plan

## Pre-migration State

- Entry: `src/index.js` (JSX with React Router)
- HTML shell: `public/index.html` (uses `%PUBLIC_URL%` in 2 places)
- No `process.env` usage anywhere in source
- No ejected config, no CRACO
- Assets: ~30 image imports via ES module `import`, 4 font imports, 1 `require()` in orphaned `screens/HomeScreen.js`
- Public folder: `index.html`, `manifest.json`, `robots.txt`, `favicon.ico`

---

## Step 1: Install Vite and remove CRA

**Remove from `package.json` dependencies:**
- `react-scripts`
- `web-vitals`
- `@babel/plugin-proposal-private-property-in-object`

**Remove from `package.json` devDependencies:**
- (none CRA-specific currently)

**Add to devDependencies:**
- `vite` (latest)
- `@vitejs/plugin-react` (latest)

**Remove `eslintConfig` and `browserslist` blocks** from `package.json` (Vite does not use them).

---

## Step 2: Create `vite.config.js`

Create at project root:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
```

Port 3000 + auto-open matches the CRA dev experience you're used to.

---

## Step 3: Move and transform `index.html`

Move `public/index.html` to the **project root** and make these changes:

1. Replace `%PUBLIC_URL%/favicon.ico` with `/favicon.ico`
2. Replace `%PUBLIC_URL%/manifest.json` with `/manifest.json`
3. Add `<script type="module" src="/src/index.jsx"></script>` before `</body>`

Result:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Edmonton Central Korean Presbyterian Church" />
    <link rel="manifest" href="/manifest.json" />
    <title>Edmonton Central Korean Presbyterian Church</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
```

---

## Step 4: Rename entry file

Rename `src/index.js` to `src/index.jsx` (Vite requires explicit `.jsx` extension for files containing JSX).

Similarly rename all `.js` files that contain JSX to `.jsx`. Approximately **34 component files** need renaming:
- `src/App.js` -> `src/App.jsx`
- `src/NavBar.js` -> `src/NavBar.jsx`
- `src/Footer.js` -> `src/Footer.jsx`
- `src/Hero.js` -> `src/Hero.jsx`
- `src/Container.js` -> `src/Container.jsx`
- All files under `src/Home/`, `src/Intro/`, `src/Service/`, `src/Education/`, `src/Serving/`, `src/Jubo/`, `src/Announcement/`, `src/Reservation/`, `src/Admin/`

Files that are pure JS (no JSX) can stay as `.js`:
- `src/styles.js` (createGlobalStyle tagged template, no JSX)
- `src/Style/index.js` (styled-components + objects, no JSX)
- `src/Intro/HistoryData.js` (data only)
- `src/Education/useCollapse.js` (hook only)
- `src/Serving/useCollapse.js` (hook only)

**Important:** Add resolve extensions in vite config so existing extensionless imports continue to work:

```js
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

With this config, existing imports like `import App from "./App"` will resolve without changes.

---

## Step 5: Update `package.json` scripts

Replace the CRA scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

- `npm run dev` replaces `npm start`
- `npm run build` produces output to `dist/` (Vite default) instead of `build/`
- `npm run preview` lets you locally preview the production build

---

## Step 6: Delete CRA boilerplate files

Remove these files and their imports:

1. **`src/reportWebVitals.js`** — delete file
   - Remove `import reportWebVitals from "./reportWebVitals";` from `src/index.jsx` (line 5)
   - Remove `reportWebVitals();` call from `src/index.jsx` (line 79)

2. **`src/setupTests.js`** — delete file (no tests currently)

3. **`src/App.css`** — contains only empty `.App {}` rule, delete file
   - Remove `import "./App.css";` from `src/App.jsx` (line 20)

---

## Step 7: Handle the `require()` in orphaned file

`src/screens/HomeScreen.js` uses `require("../assets/church.jpg")`. This file is part of the orphaned React Native stub (not used by the web app). Simply leave it alone for now — it will be deleted in Phase 4c along with root `App.js` and `mobile/`.

---

## Step 8: Update `.gitignore`

Replace the current contents with:

```
node_modules
dist
.env
.env.local
package-lock.json
```

- `dist` replaces `build` (Vite's output dir)
- Remove `yarn.lock` from gitignore (yarn lockfiles **should** be committed for reproducible builds)
- Keep `package-lock.json` excluded (you're using yarn, not npm)

---

## Step 9: Install dependencies

Run the following to install Vite and remove old CRA packages:

```bash
yarn install
```

This will:
- Install `vite` and `@vitejs/plugin-react`
- Remove `react-scripts`, `web-vitals`, and Babel plugin
- Update `yarn.lock`

---

## Step 10: Move remaining `public/` assets

After moving `index.html` to root, the `public/` folder keeps:
- `manifest.json`
- `robots.txt`
- `favicon.ico`

These stay in `public/` — Vite serves files from `public/` as static assets at the root path, same as CRA. No change needed.

---

## Step 11: Verify committed `build/` directory is removed

The `build/` directory should already be removed from git tracking (done in pre-Phase 1 cleanup). Verify:

```bash
git status  # build/ should not appear as tracked files
```

If `build/` still appears, it was not cleaned up properly. The directory itself can remain locally (gitignored), but no files should be tracked.

---

## Step 12: Verify

Run `yarn dev` (or `npm run dev`). The app should start on `localhost:3000` with the same behavior as before. Check:
- All routes load (/, /intro, /service, /education, /serving, /jubo, /reserve, /announcement, /admin)
- Images render correctly
- Custom fonts (KoPubWorld, establishRetrosans) load
- PDF viewer works on /jubo
- Mobile drawer opens

Test both desktop and mobile viewports to ensure responsive behavior works.

---

## File change summary

```
DELETE:  public/index.html          (moved to root)
CREATE:  index.html                 (at project root, modified)
CREATE:  vite.config.js
DELETE:  src/reportWebVitals.js
DELETE:  src/setupTests.js
DELETE:  src/App.css
DELETE:  build/                     (git tracking removed in pre-Phase 1 cleanup)
RENAME:  src/index.js -> src/index.jsx  (+ remove reportWebVitals import/call)
RENAME:  src/App.js -> src/App.jsx      (+ remove App.css import)
RENAME:  ~34 other .js -> .jsx files (all component files)
MODIFY:  package.json               (deps, scripts, remove eslintConfig/browserslist)
MODIFY:  .gitignore                 (use dist, commit yarn.lock)
RUN:     yarn install               (install Vite, remove CRA packages)
```
