# Agent Guidelines

## Layout

- `themes/base/token-colors.json` — TextMate scopes shared by every variant. Add language support here.
- `themes/base/semantic-token-colors.json` — semantic tokens (`rust-analyzer`, TS, etc.), only apply when the user enables semantic highlighting.
- `themes/partials/<variant>.json` — UI colors per variant (`colors`, `name`, `type`); `scripts/build-themes.js` merges them with both base files.
- `themes/generated/` — build output, gitignored. Never edit or commit it.

A syntax change goes in `token-colors.json`; a UI color change goes in the affected partial.

## Commands

No dependencies: from a fresh clone, `npm run build` regenerates `themes/generated/` and `npm run package` builds that plus a `.vsix`. There are no tests or linters.

## Releasing

Follow *Releasing* in the README. Never run `npm run publish`, and never create or push a `v*` tag unless the user asks: the tag publishes publicly and cannot be undone.
