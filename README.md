# Molnár Bálint – Portfolio

A personal one-page portfolio site built to showcase skills, work experience, and projects. Built with **React 19**, **TypeScript**, and **Vite**, deployed on **Netlify**.

🔗 Live site: [molnarbalint-portfolio.netlify.app](https://molnarbalint-portfolio.netlify.app)

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server & build tool
- **SCSS** — styling (planned migration to native CSS)
- **react-awesome-reveal** — scroll animations
- **lottie-react** — Lottie animations
- **GitHub GraphQL API** — pulls pinned repos & profile data at build/runtime (`fetch.js`)

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build → ./build
npm run preview   # preview the production build locally
npm run lint       # run ESLint
npm run format      # format with Prettier
```

## Project Structure

```
src/
├── components/     # reusable UI pieces (Button, Header, cards, etc.)
├── containers/     # page sections (Greeting, Skills, Education, Projects, ...)
├── contexts/       # StyleContext (dark/light mode)
├── hooks/          # useLocalStorage, useHeadroom
├── types/          # shared TypeScript types
└── portfolio.tsx   # all content/config for the site lives here
```

Section content (text, links, images, skills, work experience, etc.) is configured centrally in `src/portfolio.tsx` — no need to touch component code to update the content.

## Deployment

Deployed automatically via Netlify on push to `main`. Node version is pinned via `netlify.toml` (see `NODE_VERSION`).

## Roadmap

- [ ] Migrate all styling from SCSS to native CSS
- [ ] Code-split large bundle (Lottie / animation-heavy chunks)
- [ ] Replace remaining `any` types with proper typings


# Changelog

All notable changes to this project are documented in this file.

## [0.4.0] - 2026-09-01

### Removed
- Full SCSS → native CSS migration: all 25 `.scss` files converted to `.css`
- `_globalColor.scss` → `src/styles/variables.css` (CSS custom properties, `:root`)
- Removed `sass-embedded` dependency
- Removed `.scss` extension from the `format` / `check-format` npm script glob patterns

### Changed
- Updated all component/container `.tsx` imports from `.scss` to `.css`
- Design tokens (colors, shadows, gradients) are now loaded once, centrally (`index.css` → `styles/variables.css`), instead of being imported per-file via `@use`

### Notes
- Visual appearance and functionality unchanged — only the styling implementation was refactored

## [0.3.0] - 2026-09-01

### Major dependency upgrades
- **React**: 18.3.1 → 19.2.8 (ran official `types-react-codemod` migration)
- **TypeScript**: 5.6.2 → 6.0.3
- **Vite**: 5.4.10 → 8.x
- **ESLint** + `typescript-eslint` + related plugins updated to latest, mutually compatible versions
- Node.js pinned to v22 for local dev and Netlify builds (required by Vite 8)

### Removed
- `@emotion/react` — re-added after discovering it's an actual peer dependency of `react-awesome-reveal` (initially thought unused)
- `react-twitter-embed` — unused, no longer referenced anywhere
- `gh-pages` — unused (no `deploy` script; project deploys via Netlify)
- `glob` — unused, no direct references in source
- `jest`, `jest-canvas-mock`, `@testing-library/jest-dom` — test setup was broken (`test` script called a non-existent `vite test` command) and unused; removed entirely
- `react-headroom` — replaced with a small custom `useHeadroom` hook (no dependency, avoids peer-dependency conflicts with React 19)
- `react-easy-emoji` — replaced with native Unicode emoji strings (no longer needed on modern platforms)
- `src/App.test.js` — removed along with the Jest setup
- `src/serviceWorker.tsx` — dead code, `register()` was never called; only `unregister()` was used, and it relied on broken `process.env` references incompatible with Vite

### Fixed
- `skillProgress.tsx`: replaced CommonJS `require()` image import with Vite-compatible `new URL(..., import.meta.url).href`
- `vite.config.ts`: removed obsolete `css.preprocessorOptions.scss.api: 'modern-compiler'` option (modern Sass API is the default since Vite 6)
- Added `@types/node` + `"types": ["node"]` in `tsconfig.node.json` to fix missing Node typings in `vite.config.ts`
- Worked around a Vite 8 CJS/ESM default-export interop issue affecting `lottie-react` and `react-headroom` (unwrapped `.default` manually before the headroom replacement)
- `GithubRepoCard.tsx`, `StartupProject.tsx`: `var` → `const`
- Removed a stale `eslint-disable-next-line jsx-a11y/anchor-is-valid` comment referencing a plugin that isn't installed
- Replaced `any` types with proper types/generics in `DisplayLottie.tsx`, `useLocalStorage.tsx`, and `Projects.tsx` (now uses the existing `GithubRepo` type)
- `npm audit`: resolved all reported vulnerabilities (dev-only, transitive ESLint tooling dependencies)

### Cleaned up
- Removed dead `eslintConfig` field from `package.json` (leftover from Create React App, conflicted with the flat ESLint config)
- Removed dead `browserslist` field from `package.json` (not read by Vite/esbuild; no `autoprefixer` or legacy plugin consumes it)
- Removed duplicate Sass installation — kept `sass-embedded` only (matches the modern compiler API used by Vite)

### Infrastructure
- Added `netlify.toml` pinning `NODE_VERSION = "22"` to match Vite 8's Node requirement

---

## [0.2.0] - prior state

- React 18 + Vite 5 + TypeScript 5.6 project baseline (CRA-to-Vite migration already completed prior to this changelog).