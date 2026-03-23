const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'themes');
const partialsDir = path.join(baseDir, 'partials');
const generatedDir = path.join(baseDir, 'generated');
const tokenColorsPath = path.join(baseDir, 'base', 'token-colors.json');

const tokenColors = JSON.parse(fs.readFileSync(tokenColorsPath, 'utf8'));

if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
}

const partialFiles = fs.readdirSync(partialsDir);

partialFiles.forEach(file => {
    if (!file.endsWith('.json')) return;

    const partialPath = path.join(partialsDir, file);
    const partial = JSON.parse(fs.readFileSync(partialPath, 'utf8'));

    const theme = {
        ...partial,
        tokenColors
    };

    const baseName = file.replace('.json', '');
    const outputName = `${baseName}-color_theme.json`;
    const outputPath = path.join(generatedDir, outputName);

    fs.writeFileSync(outputPath, JSON.stringify(theme, null, 4) + '\n');
    console.log(`Generated: ${outputName}`);
});

console.log('Build complete!');