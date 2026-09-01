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
```

## Project Structure

```
react-portfolio/
├── public/
│   ├── favicon.ico, favicon-16x16.png, favicon-32x32.png
│   ├── apple-touch-icon.png, safari-pinned-tab.svg
│   ├── manifest.json
│   └── profile.json            # GitHub API adatok (fetch.js generálja)
├── src/
│   ├── App.tsx / App.css
│   ├── index.tsx / index.css
│   ├── portfolio.tsx           # Tartalmi konfiguráció (szövegek, linkek)
│   ├── utils.tsx
│   ├── vite-env.d.ts
│   ├── logo.svg
│   ├── assets/
│   │   ├── fonts/               # Agustina.woff, Montserrat-Regular.ttf
│   │   ├── images/               # webp logók, placeholder.webp, talksCardBack.svg
│   │   └── lottie/               # splashAnimation, landingPerson, codingPerson, build, email .json
│   ├── components/
│   │   ├── achievementCard/     # AchievementCard.tsx / .css
│   │   ├── button/               # Button.tsx / .css
│   │   ├── displayLottie/        # DisplayLottie.tsx
│   │   ├── educationCard/        # EducationCard.tsx / .css
│   │   ├── experienceCard/       # ExperienceCard.tsx / .css
│   │   ├── footer/               # Footer.tsx / .css
│   │   ├── githubProfileCard/    # GithubProfileCard.tsx / .css
│   │   ├── githubRepoCard/       # GithubRepoCard.tsx / .css
│   │   ├── header/               # Header.tsx / .css
│   │   ├── socialMedia/          # SocialMedia.tsx / .css
│   │   ├── softwareSkills/       # SoftwareSkill.tsx / .css
│   │   ├── talkCard/             # TalkCard.tsx / .css
│   │   └── ToggleSwitch/         # ToggleSwitch.tsx / .css
│   ├── containers/
│   │   ├── Main.tsx / Main.css   # Fő layout, dark mode állapot
│   │   ├── achievement/          # Achievement.tsx / .css
│   │   ├── contact/              # Contact.tsx / .css
│   │   ├── education/            # Education.tsx / .css
│   │   ├── greeting/             # Greeting.tsx / .css + CV PDF-ek (HU/EN)
│   │   ├── loading/              # Loading.tsx / loading.css
│   │   ├── profile/              # Profile.tsx
│   │   ├── projects/             # Projects.tsx / Project.css
│   │   ├── skillProgress/        # skillProgress.tsx / Progress.css
│   │   ├── skills/               # Skills.tsx / Skills.css
│   │   ├── splashScreen/         # SplashScreen.tsx / .css
│   │   ├── StartupProjects/      # StartupProject.tsx / .css
│   │   ├── topbutton/            # Top.tsx / .css
│   │   └── workExperience/       # WorkExperience.tsx / .css
│   ├── contexts/
│   │   ├── StyleContext.tsx
│   │   └── StyleProvider.tsx
│   ├── hooks/
│   │   ├── useHeadroom.tsx
│   │   ├── useLocalStorage.tsx
│   │   └── useStyle.tsx
│   ├── styles/
│   │   ├── variables.css         # Globális CSS custom property-k (design tokenek)
│   │   └── shared.css            # Közös, több komponens közt duplikált osztályok (.subTitle, .card-title, .card-subtitle, .card-image)
│   └── types/
│       ├── AchievementCard.types.ts
│       ├── Button.types.ts
│       ├── EducationCard.types.ts
│       ├── ExperienceCard.types.ts
│       ├── GithubProfileCard.types.ts
│       ├── GithubRepo.types.ts
│       ├── StyleContextType.ts
│       └── TalkCard.types.ts
├── Dockerfile
├── fetch.js                      # GitHub GraphQL + Medium RSS adatlekérő build előtt
├── index.html
├── netlify.toml
├── package.json
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── eslint.config.js
```

Section content (text, links, images, skills, work experience, etc.) is configured centrally in `src/portfolio.tsx` — no need to touch component code to update the content.

## Deployment

Deployed automatically via Netlify on push to `main`. Node version is pinned via `netlify.toml` (see `NODE_VERSION`).

## Roadmap

- [x] Migrate all styling from SCSS to native CSS
- [x] Replace remaining `any` types with proper typings
- [x] Fix any errors and dead code
- [ ] Code-split large bundle (Lottie / animation-heavy chunks)
- [ ] Update project 


# Changelog

All notable changes to this project are documented in this file.

## [0.4.2] - 2026-09-01
 
### Fixed
- `Main.tsx`: `window.matchMedia("(prefers-color-scheme: dark)")` was re-evaluated on every render — wrapped in `useMemo` so it only runs once
- `index.html`: removed hand-copied, hash-pinned font `preload` links (`Montserrat-Regular.dKSYcarW.ttf`, `Agustina.QfTSMhmS.woff`) that would silently 404 and stop preloading once a build regenerated different content hashes; replaced with a `?url`-based dynamic preload in `src/index.tsx` that always resolves to the actual current build asset
- `index.html` / `index.tsx`: corrected the `type` attribute for the Montserrat font preload from `font/woff` to `font/ttf`, matching its actual file extension
### Removed
- `Projects.tsx`: removed the unnecessary `FailedLoading = () => null` wrapper component — the failure branch now returns `null` directly
### Notes
- No visual or functional changes — this release is a bugfix + dead-code cleanup pass only

## [0.4.1] - 2026-09-01

### Fixed
- `Footer.tsx`: both `<p>` elements were empty, rendering a functionally invisible footer — content added back
- `Contact.tsx`: fallback `<img>` (shown when `illustration.animated === false`) was missing a `src`, resulting in a broken image — now uses `new URL(..., import.meta.url).href` for the placeholder asset, consistent with `skillProgress.tsx`
- `Greeting.tsx`, `Skills.tsx`: fallback placeholder `<img src="../../assets/images/placeholder.webp">` used a raw relative path instead of a Vite-resolved URL, which can point to a stale/incorrect path after build hashing — switched to `new URL(..., import.meta.url).href`
- `Footer.css`: the unscoped, global `.dark-mode` rule (with `!important`) could collide with the intentionally global `.dark-mode` wrapper rule in `Main.css` and leak onto unrelated elements — scoped it to `.dark-mode.footer-text`
- `Profile.tsx`: removed a runtime mutation of the imported `openSource` module object (`openSource.showGithubProfile = "false"`) inside the fetch error handler — an anti-pattern that also had no functional effect, since the render branch already short-circuits on `prof !== null`

### Removed
- `GithubProfileCard.types.ts`: dropped the unused `hireable?: string` field from the `GithubProfile` interface (the component actually reads the `isHireable` boolean from `portfolio.tsx`, never this field)

### Changed
- Extracted CSS classes duplicated verbatim across multiple stylesheets into a single shared file, `src/styles/shared.css` (imported once in `index.css`):
  - `.subTitle` — previously redefined identically in `App.css`, `Achievement.css`, `GithubProfileCard.css`, `Greeting.css` (twice, including an internal duplicate), `Skills.css`, and `StartupProjects.css`
  - `.card-title`, `.card-subtitle`, `.card-image` — previously redefined identically in `AchievementCard.css` and `StartupProjects.css`
- `Greeting.css`: removed a duplicated `.greeting-main { display: flex; }` block that was declared twice in the same file
- Kept the `!important`-overridden `.subTitle` in `Contact.css` as-is (intentional override, not a duplicate)

### Notes
- No visual or functional changes — this release is a bugfix + dead-code/structural cleanup pass only

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