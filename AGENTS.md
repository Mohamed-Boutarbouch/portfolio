**Agents Guide**
- Purpose: help agentic coding agents (and humans) build, lint, test and follow code-style rules in this repository.
- Location: workspace root. Keep this file up-to-date when tooling or rules change.

1) Quick commands (what exists now)
- `npm run dev` — starts the dev server (`astro dev`).
- `npm run build` — production build (`astro build`).
- `npm run preview` — preview a production build (`astro preview`).
- `npm run astro` — run the `astro` binary.
- Node requirement: `node >=22.12.0` (see `package.json` `engines`).

2) Recommended tooling and commands (not yet in scripts)
- Linting (ESLint): install and run with `npm i -D eslint` then
  - `npx eslint "src/**/*.{js,ts,jsx,tsx,astro}"` — lint whole codebase.
  - `npx eslint "path/to/file.js" --fix` — lint & auto-fix a single file.
- Formatting (Prettier): install and run with `npm i -D prettier` then
  - `npx prettier --check .` — check formatting.
  - `npx prettier --write .` — format entire repo.
- Tests (Vitest recommended): install and run with `npm i -D vitest` then
  - `npx vitest` — run all tests (watch runs by default when not using `--run`).
  - `npx vitest run` — run tests once (CI style).
  - Run a single test file: `npx vitest path/to/test.file --run` or `npm run test -- path/to/test.file` if you create a script `"test": "vitest"`.
  - Run a single test by name: `npx vitest -t "should do X" --run` (use a unique name substring).
- E2E / browser tests: consider Playwright (`npm i -D @playwright/test`) and run single spec with `npx playwright test path/to/spec`.

3) How to run a single test (concise)
- If using Vitest: `npx vitest path/to/file.test.ts --run`.
- If using Jest (not in this repo): `npx jest path/to/file.test.js -t "test name"`.
- If a `test` script is added to `package.json`: `npm run test -- path/to/file` forwards the path to the test runner.

4) When editing package.json or adding tooling
- Do not change the `type: "module"` unless you intentionally migrate to CommonJS.
- Add scripts instead of relying on long npx invocations; examples:
  - `"lint": "eslint \"src/**/*.{js,ts,jsx,tsx,astro}\""`
  - `"format": "prettier --write ."`
  - `"test": "vitest"`

5) Cursor & Copilot rules
- This repository has no `.cursor/rules/` or `.cursorrules` directory.
- There is no `.github/copilot-instructions.md` present. If these files are added, copy their contents into this section and follow the rules strictly.

6) Code style guidelines (rules for agents and contributors)
- Files & modules
  - Use ESM imports/exports (this repo sets `type: "module"`). Prefer `import X from 'pkg'` and `export function/const`.
  - Keep one export per file when the file describes a single concept; for small related helpers, group them.
  - File extensions: use `.js`, `.ts`, `.astro`, `.css`/`.pcss` consistently. Prefer `.ts` for new non-component code where type safety helps.

- Imports ordering
  - Order imports as: builtin (node) → external packages → internal absolute aliases → relative imports.
  - Separate groups with a blank line.
  - Prefer named imports when importing multiple utilities from the same package: `import {a, b} from 'pkg'`.

- Formatting
  - Use Prettier as the source of truth for formatting. Default style: 2 spaces, single newline at EOF, semicolons optional (pick one and add config); add a `.prettierrc` when standardising.
  - Wrap long lines at ~100-120 characters.
  - Keep JSX/TSX/ASTRO components readable: props each on new line when >2 props.

- Types and typing
  - Prefer TypeScript for non-trivial modules; add `tsconfig.json` at repo root when converting. For JS files, use JSDoc annotations where helpful.
  - Keep types small and focused: prefer intersection/union types for domain models rather than huge global interfaces.
  - Avoid `any`. If unavoidable, add an inline comment explaining why and add a TODO to replace with a real type.

- Naming conventions
  - Variables and functions: `camelCase`.
  - Constants (module-level fixed values): `UPPER_SNAKE_CASE` or `camelCase` for exported constants—pick one and stay consistent.
  - React/Component/ASTRO components: `PascalCase` filenames and export names.
  - Files: prefer `kebab-case` or `camelCase` consistently across the repo. Do not mix both styles in the same directory.

- Component structure
  - Small components (<150 LOC): keep in a single file. Larger components: split into a main file plus a sibling `*.styles.js/ts` or `*.helpers.js/ts` where appropriate.

- Error handling and logging
  - Fail fast: validate inputs early and return descriptive errors.
  - Use `try/catch` around async/await boundaries; rethrow errors with context: `throw new Error(`loadUser: ${err.message}`)` or use an Error subclass.
  - Do not swallow errors silently. If an error is expected, handle it explicitly and document why.
  - For logging in dev: use console with a consistent prefix (e.g. `[app]`) or a small logging wrapper. For production, integrate a structured logger.

- Performance & side effects
  - Prefer pure functions for logic; keep side effects (I/O, DOM mutations) isolated in thin adapter layers.
  - Cache expensive computations where appropriate and document cache invalidation strategy.

- Security
  - Escape or sanitize any user-provided HTML. Avoid trusting input that is rendered to the client.
  - Do not commit secrets. If a secrets file exists, add it to `.gitignore` and rotate secrets if accidentally committed.

7) PR & commit hygiene for agents
- Make small, focused changes with descriptive commit messages. One logical change per PR.
- Run lint and tests locally before creating a PR. If adding a new dependency, include a short justification in the PR description.

8) Tests & fixtures guidelines
- Favor unit tests for utilities and functions; write integration tests for pages/routers.
- Keep fixtures minimal and store them under `tests/fixtures/` or `__fixtures__/`.
- Make tests deterministic; avoid network calls — mock them, or use a recorded VCR-like approach for external services.

9) When you are blocked
- Check this file first, then `package.json`, and top-level configs (`tsconfig.json`, `.eslintrc`, `.prettierrc`, etc.).
- If no tests/linters are present and you need them, document the exact changes you will make and prefer adding them behind a single commit.

10) Maintenance notes for future agents
- If you add rules in `.cursor` or Copilot instructions, also mirror a short summary here so agents can obey them even if those files aren't parsed.

Appendix: Useful example scripts to add to `package.json` (suggested)
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "lint": "eslint \"src/**/*.{js,ts,jsx,tsx,astro}\"",
    "format": "prettier --write .",
    "test": "vitest"
  }

If you want, I can add a starter ESLint/Prettier/Vitest configuration and scripts — tell me which test runner and formatting rules you prefer.
