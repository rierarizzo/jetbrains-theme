const fs = require('fs');
const path = require('path');
const manifest = require('../package.json');

const baseDir = path.join(__dirname, '..', 'themes');
const partialsDir = path.join(baseDir, 'partials');
const generatedDir = path.join(baseDir, 'generated');
const tokenColorsPath = path.join(baseDir, 'base', 'token-colors.json');
const semanticTokenColorsPath = path.join(baseDir, 'base', 'semantic-token-colors.json');

const tokenColors = JSON.parse(fs.readFileSync(tokenColorsPath, 'utf8'));
const semanticTokenColors = JSON.parse(fs.readFileSync(semanticTokenColorsPath, 'utf8'));

// generated/ is gitignored build output: wipe it so deleted or renamed partials do not linger in a package.
fs.rmSync(generatedDir, { recursive: true, force: true });
fs.mkdirSync(generatedDir, { recursive: true });

const partialFiles = fs.readdirSync(partialsDir);

partialFiles.forEach(file => {
    if (!file.endsWith('.json')) return;

    const partialPath = path.join(partialsDir, file);
    const partial = JSON.parse(fs.readFileSync(partialPath, 'utf8'));

    const theme = {
        ...partial,
        tokenColors,
        semanticTokenColors
    };

    const baseName = file.replace('.json', '');
    const outputName = `${baseName}-color_theme.json`;
    const outputPath = path.join(generatedDir, outputName);

    fs.writeFileSync(outputPath, JSON.stringify(theme, null, 4) + '\n');
    console.log(`Generated: ${outputName}`);
});

// Keep package.json and the build in sync: a renamed partial or an unlisted theme would ship broken.
const generated = new Set(fs.readdirSync(generatedDir));
const declared = new Set(manifest.contributes.themes.map(theme => path.basename(theme.path)));
const missing = [...declared].filter(file => !generated.has(file));
const unlisted = [...generated].filter(file => !declared.has(file));

if (missing.length || unlisted.length) {
    missing.forEach(file => console.error(`Missing from themes/generated: ${file}`));
    unlisted.forEach(file => console.error(`Not listed in package.json: ${file}`));
    process.exit(1);
}

console.log('Build complete!');