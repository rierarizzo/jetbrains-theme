# Agent Guidelines for JetBrains Theme

## Project Overview

This is a VS Code theme extension that provides dark themes inspired by JetBrains IDEs. The project consists solely of JSON theme files and does not contain TypeScript/JavaScript source code.

## Project Structure

```
├── .vscode/              # VS Code settings
├── images/               # Extension icon
├── themes/               # Theme JSON files
│   ├── jetbrains-dark-color_theme.json
│   ├── jetbrains-dark-modern-color_theme.json
│   └── jetbrains-deep-dark-color_theme.json
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── jetbrains-dark-color-scheme.icls
└── package.json
```

## Build and Release Commands

```bash
# Package the extension into a .vsix file
npm run package

# Publish to VS Code Marketplace
npm run publish

# Bump version (patch, minor, or major)
npm version patch  # e.g., 1.0.30 -> 1.0.31
npm version minor  # e.g., 1.0.30 -> 1.1.0
npm version major  # e.g., 1.0.30 -> 2.0.0
```

**Note**: Publishing requires valid VS Code Marketplace credentials configured via `vsce`.

## Testing Changes

This project has no automated tests. To test theme changes:

1. Open the project in VS Code
2. Press `F5` to launch the Extension Development Host
3. Or: Run `npm run package` then install the generated `.vsix` via "Install from VSIX"

## Code Style Guidelines

### JSON Theme Files

**Indentation**: 4 spaces

**Structure**: Follow the VS Code Color Theme format with two main sections:

```json
{
    "colors": {
        // UI colors (semantic token colors)
    },
    "tokenColors": [
        {
            "scope": ["array", "of", "scopes"],
            "settings": {
                "foreground": "#hex",
                "fontStyle": "bold|italic|underline"
            }
        }
    ]
}
```

**Scope Organization**:
- Group related scopes together alphabetically within each scope array
- Use array format for multiple scopes (not string with newlines)
- Each theme entry should have `type: "dark"` or `type: "light"`

### Scope Naming Conventions

Follow TextMate scope naming conventions:
- `entity.name.tag.html` - HTML tag names
- `punctuation.definition.tag.begin.html` - Tag opening symbols `<`
- `punctuation.definition.tag.end.html` - Tag closing symbols `>`
- `entity.other.attribute-name.html` - HTML attributes
- `keyword.control.astro` - Astro keywords
- `string.quoted.double.astro` - Quoted strings

**Common patterns**:
- `punctuation.definition.*` - Punctuation that defines syntax constructs
- `entity.name.tag.*` - Tag/element names
- `entity.other.attribute-name.*` - Attribute names
- `meta.*` - Meta scopes for complex patterns
- `source.*` - Source code scopes

### Color Conventions

**Syntax Highlighting Colors** (JetBrains-inspired):
| Purpose | Hex | Usage |
|---------|-----|-------|
| Comments | `#7a7e85` | Gray |
| Text/Types | `#bcbec4` | Light gray |
| Numbers | `#2aacb8` | Cyan |
| Keywords | `#cf8e6d` | Orange |
| Strings | `#6aab73` | Green |
| Functions | `#56a8f5` | Blue |
| Yellow accent | `#d5b778` | Tags/punctuation |
| Purple | `#c77dbb` | Properties |
| Violet | `#8888c6` | Type annotations |

### Package.json Guidelines

- Follow semantic versioning (semver)
- Update version before publishing
- Document changes in CHANGELOG.md with version and date
- Keep keywords updated for marketplace discoverability

## VS Code Theme Format Reference

### Colors Section
Contains UI element colors using VS Code's semantic token names:
- `editor.background`, `editor.foreground`
- `editorLineNumber.foreground`, `editorCursor.foreground`
- `activityBar.background`, `sideBar.background`
- etc.

### Token Colors Section
Array of scope rules, each with:
- `scope`: Single scope (string) or array of scopes
- `settings`: Object with `foreground`, `fontStyle`, `background` (rare)

## Git Workflow

1. Create feature branches from `main`
2. Commit messages follow Conventional Commits:
   - `feat: add new theme variant`
   - `fix: correct punctuation color for X`
   - `docs: update changelog`
3. Push and create PR for review
4. After merge, publish to marketplace

## Important Notes

- This project does not use TypeScript or a bundler
- No linting or automated testing is configured
- Theme validation is manual (visual testing in VS Code)
- The `.icls` file is for IntelliJ IDEA color scheme compatibility
