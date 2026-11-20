# JetBrains Theme

A collection of dark themes for VS Code inspired by the UI and color schemes of JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm, GoLand, RustRover, etc.).

## Themes Included

- **JetBrains Dark Theme**: The classic experience with a soft dark UI.
- **JetBrains Dark Modern Theme**: A modern take on the classic dark theme with updated UI colors for a cleaner, more contemporary look.
- **JetBrains Deep Dark Theme**: A deeper, more modern dark experience with colors inspired by VS Code's modern high contrast/darker UI, but keeping the JetBrains syntax highlighting.

## Installation

1. Open VS Code extensions (`Ctrl+Shift+X`).
2. Search for **JetBrains Theme**.
3. Install and select one of the three variants.

## Supported Languages

Optimized highlighting for:

- JavaScript, TypeScript, React, Angular, HTML, CSS, Astro
- Java, Groovy, Python, Go, Rust, Bash
- Dart, Flutter
- JSON, YAML, TOML, XML, Terraform (HCL), Jenkinsfile

### Rust semantic highlighting

With [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer), enable semantic highlighting for Rust to get RustRover-like colors for struct fields, enum variants, methods and mutable bindings:

```json
"[rust]": {
    "editor.semanticHighlighting.enabled": true
}
```

## Colors

| Scope | Color | Hex |
| ------- | ------- | ----- |
| Comments | Gray | `#7a7e85` |
| Text | Light Gray | `#bcbec4` |
| Numbers | Cyan | `#2aacb8` |
| Keywords | Orange | `#cf8e6d` |
| Strings | Green | `#6aab73` |
| Functions | Blue | `#55a6f2` |

## Development

No dependencies are needed (Node 22+ for packaging):

```bash
npm run build    # regenerate themes/generated/ from themes/base and themes/partials
npm run package  # build and produce jb-theme-<version>.vsix
```

Releases are published by CI: bump `version` in `package.json`, add the entry to `CHANGELOG.md`, commit, and push the `v*` tag (`git push --tags`). The tag publishes to the VS Code Marketplace and Open VSX; do not run `npm run publish` locally.

## License

[CC0-1.0](LICENSE.md)
