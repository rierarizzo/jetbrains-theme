# Agent Guidelines for JetBrains Theme

## Before Publishing Changes

1. Update version in `package.json`
2. Update `CHANGELOG.md` with the new version and changes
3. Commit with a clear message describing what was changed

## Workflow

```bash
# After making changes:
npm version patch  # or minor/major depending on the change
git add <changed-files>
git commit -m "description"
git push
npm run publish
git push --tags
```

## Files

- `package.json` - Version metadata
- `CHANGELOG.md` - Change history
- `themes/*.json` - Theme definition files
