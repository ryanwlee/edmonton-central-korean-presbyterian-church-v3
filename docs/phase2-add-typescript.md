# Phase 2: Add TypeScript — Detailed Plan

## Pre-migration State (after Phase 1)

- All JSX files renamed to `.jsx`, pure JS stays `.js`
- Vite with `resolve.extensions: [".js", ".jsx", ".ts", ".tsx"]`
- No existing type annotations, no `prop-types` usage in source
- 41 source files total under `src/`
- Props are simple: mostly string/number/boolean/callback, a few data arrays

---

## Step 1: Install TypeScript and Type Definitions

**Add to devDependencies:**
- `typescript`
- `@types/react`
- `@types/react-dom`

---

## Step 2: Create `tsconfig.json`

Create at project root:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "jsx": "react-jsx",
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

## Step 3: Add Vite type reference

Create `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />
```

This gives TypeScript awareness of Vite's special imports (images, CSS, etc.).

---

## Step 4: Add type declaration for image/font imports

Create `src/types/assets.d.ts`:

```ts
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.ttf" {
  const src: string;
  export default src;
}

declare module "*.woff" {
  const src: string;
  export default src;
}

declare module "*.woff2" {
  const src: string;
  export default src;
}
```

---

## Step 5: Rename files `.jsx` → `.tsx` and `.js` → `.ts`

**Rename to `.tsx`** (files with JSX):
- `src/index.jsx` → `src/index.tsx`
- `src/App.jsx` → `src/App.tsx`
- `src/NavBar.jsx` → `src/NavBar.tsx`
- `src/Footer.jsx` → `src/Footer.tsx`
- `src/Hero.jsx` → `src/Hero.tsx`
- `src/Container.jsx` → `src/Container.tsx`
- `src/Home/Home.jsx` → `src/Home/Home.tsx`
- `src/Home/Explorer.jsx` → `src/Home/Explorer.tsx`
- `src/Home/MonthVerse.jsx` → `src/Home/MonthVerse.tsx`
- `src/Home/Direction.jsx` → `src/Home/Direction.tsx`
- `src/Home/Service.jsx` → `src/Home/Service.tsx`
- `src/Intro/Intro.jsx` → `src/Intro/Intro.tsx`
- `src/Intro/Pastor.jsx` → `src/Intro/Pastor.tsx`
- `src/Intro/Pastors.jsx` → `src/Intro/Pastors.tsx`
- `src/Intro/Handler.jsx` → `src/Intro/Handler.tsx`
- `src/Intro/HistoryHandler.jsx` → `src/Intro/HistoryHandler.tsx`
- `src/Service/Service.jsx` → `src/Service/Service.tsx`
- `src/Service/ServiceIntro.jsx` → `src/Service/ServiceIntro.tsx`
- `src/Service/Donation.jsx` → `src/Service/Donation.tsx`
- `src/Education/Education.jsx` → `src/Education/Education.tsx`
- `src/Education/EducationTable.jsx` → `src/Education/EducationTable.tsx`
- `src/Education/EducationInfoCollapse.jsx` → `src/Education/EducationInfoCollapse.tsx`
- `src/Serving/Serving.jsx` → `src/Serving/Serving.tsx`
- `src/Serving/ServingTable.jsx` → `src/Serving/ServingTable.tsx`
- `src/Serving/ServingInfoCollapse.jsx` → `src/Serving/ServingInfoCollapse.tsx`
- `src/Jubo/Jubo.jsx` → `src/Jubo/Jubo.tsx`
- `src/Jubo/PDFView.jsx` → `src/Jubo/PDFView.tsx`
- `src/Announcement/Announcement.jsx` → `src/Announcement/Announcement.tsx`
- `src/Announcement/Events.jsx` → `src/Announcement/Events.tsx`
- `src/Reservation/Intro.jsx` → `src/Reservation/Intro.tsx`
- `src/Admin/Admin.jsx` → `src/Admin/Admin.tsx`
- `src/Admin/JuboUpload.jsx` → `src/Admin/JuboUpload.tsx`

**Rename to `.ts`** (no JSX):
- `src/styles.js` → `src/styles.ts`
- `src/Style/index.js` → `src/Style/index.ts`
- `src/Intro/HistoryData.js` → `src/Intro/HistoryData.ts`
- `src/Education/useCollapse.js` → `src/Education/useCollapse.ts`
- `src/Serving/useCollapse.js` → `src/Serving/useCollapse.ts`

**Leave as-is** (orphaned, will be deleted in Phase 4):
- `src/screens/HomeScreen.js`
- `src/Component.js`

**Update `index.html`** script tag: change `src="/src/index.jsx"` → `src="/src/index.tsx"`

---

## Step 6: Add Props Interfaces

Components that accept props need interfaces. Based on the source analysis:

### `src/Hero.tsx`
```ts
interface HeroProps {
  heroImage: string;
  visible?: boolean;
  transitionTime?: number;
}
```

### `src/NavBar.tsx`
```ts
interface NavBarProps {
  handleDrawerToggle: () => void;
}
```

### `src/Container.tsx`
```ts
interface ContainerProps {
  component: React.ReactNode;
}
```

### `src/Jubo/PDFView.tsx`
```ts
interface PDFViewProps {
  file: string;
}
```

### `src/Intro/HistoryHandler.tsx`
```ts
interface TimelineEntry {
  year: number;
  percent: number;
  history: HistoryRow[];
}

interface HistoryData {
  year: number;
  initialYear?: number;
  initialPercent?: number;
  timeLineArr: number[];
  timeLine: Record<string | number, TimelineEntry>;
}

interface HistoryHandlerProps {
  data: HistoryData;
  initialYear: number;
  shortInitialYear: number;
  initialShow: boolean;
}
```

### `src/Intro/Handler.tsx`
```ts
interface HandlerRow {
  date: string;
  background?: string;
  content: string[];
}
```

### `src/Education/useCollapse.ts` and `src/Serving/useCollapse.ts`
```ts
const useCollapse = (collapsed: boolean): { ref: React.RefObject<HTMLDivElement | null>; height: string }
```

### Styled-components transient props (`Hero.tsx`, `NavBar.tsx`, `ServingTable.tsx`)
Styled-components with props need typed template parameters:
```ts
const HeroContainer = styled.div<{ visible: boolean; transitionTime: number }>`...`;
const NavItemCss = styled(Link)<{ active: boolean }>`...`;
const ServingInfoRow = styled.div<{ collapsed: boolean }>`...`;
```

---

## Step 7: Fix TypeScript Errors

Common fixes needed across the codebase:

1. **`useRef` initialization** — add type parameter:
   ```ts
   const menuRef = useRef<HTMLDivElement>(null);
   const timelineRef = useRef<HTMLImageElement>(null);
   const ref = useRef<HTMLDivElement>(null);
   ```

2. **Event handlers** — type the events:
   ```ts
   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... }
   const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => { ... }
   ```

3. **Unused variables** — remove:
   - `PDFView.tsx`: remove unused `page` / `setPage`
   - `Events.tsx`: remove unused `Height`, `Widgets` imports from MUI icons

4. **`styled-components` prop typing** — existing props like `visible`, `active`, `collapsed` passed to styled components need `$` prefix (transient props) or explicit typing to avoid DOM warnings.

5. **MUI `Unstable_Grid2`** — may need `@mui/material` type augmentation or switch to stable `Grid2` in Phase 3.

---

## Step 8: Add type-check script

Update `package.json` scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc --noEmit && vite build",
  "preview": "vite preview",
  "typecheck": "tsc --noEmit"
}
```

---

## Step 9: Remove `prop-types`

Remove from `package.json` dependencies:
- `prop-types`

(It's listed as a dependency but never imported in source.)

---

## Step 10: Verify

Run `npm run typecheck` — should pass with zero errors.
Run `npm run dev` — app should work identically to before.

---

## File Change Summary

```
CREATE:  tsconfig.json
CREATE:  src/vite-env.d.ts
CREATE:  src/types/assets.d.ts
MODIFY:  index.html                     (script src .jsx → .tsx)
MODIFY:  package.json                   (add TS deps, remove prop-types, add typecheck script)
RENAME:  ~32 files .jsx → .tsx
RENAME:  ~5 files .js → .ts
MODIFY:  All renamed files              (add interfaces, type annotations, fix errors)
```

---

## Complexity Notes

This is a relatively easy TypeScript migration because:
- Props are simple (strings, numbers, booleans, callbacks)
- No Redux or complex state shapes
- No generic components or HOCs
- No dynamic prop spreading (`{...props}`)
- The only complex type is `HistoryData` which has a nested record structure
