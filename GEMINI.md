# Project Context: JetBrains Theme for VS Code

## Project Overview
This project is a **Visual Studio Code Extension** that provides a dark color theme inspired by JetBrains IDEs (IntelliJ IDEA, WebStorm, etc.). It aims to replicate the visual style of JetBrains' default dark theme for VS Code users.

**Key Metadata:**
- **Publisher:** `kenethriera`
- **Extension Name:** `jb-theme`
- **Display Name:** JetBrains Theme
- **Version:** 1.0.20
- **License:** CC0-1.0

## Architecture & Structure
The project follows the standard structure for a VS Code Color Theme extension.

- **`package.json`**: The manifest file that defines the extension, its metadata, and contribution points (`contributes.themes`).
- **`themes/jetbrains-dark-color_theme.json`**: The core file containing the color definitions (token colors and UI colors) for VS Code.
- **`jetbrains-dark-color-scheme.icls`**: Likely the original IntelliJ IDEA Color Scheme file used as a reference or source for the port.
- **`images/`**: Contains the extension icon.
- **`captures/`**: Contains screenshots used for the extension gallery/marketplace.

## Development & Usage

### Prerequisites
- **Node.js**: Required to run VS Code extension tools.
- **vsce**: The Visual Studio Code Extensions CLI tool (`npm install -g @vscode/vsce`) is required for packaging and publishing.

### Build & Commands
Since this is a pure JSON theme extension, there is no compilation step (e.g., no TypeScript/Webpack).

**Available Scripts (via `package.json`):**
- **Package Extension:** `npm run package` (Runs `vsce package` to create a `.vsix` file).
- **Publish Extension:** `npm run publish` (Runs `vsce publish` to upload to the Marketplace).

### Debugging
To test the theme locally:
1. Open this directory in VS Code.
2. Press `F5` to open the **Extension Development Host**.
3. In the new window, the "JetBrains Dark Theme" should be available in the Color Theme list.

## Conventions
- **Theme Definition:** The theme is defined in standard VS Code JSON format (`themes/*.json`).
- **Color Hex Codes:** Colors are hardcoded in hex format.
- **Scope Naming:** TextMate scopes are used for syntax highlighting rules.
