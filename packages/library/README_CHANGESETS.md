# Changesets Documentation

This project uses [Changesets](https://github.com/changesets/changesets) for automated version management and publishing.

## Overview

Changesets provide a way to manage versions and changelogs with a focus on multi-package repositories. This setup includes:

- ✅ **Automated versioning** - No more manual version bumps  
- ✅ **Consistent changelogs** - Generated from changeset descriptions  
- ✅ **PR validation** - Ensures all changes are tracked  
- ✅ **Automatic publishing** - New versions published to npm automatically  
- ✅ **GitHub integration** - Changelogs link to PRs and commits  

## How It Works

### For Contributors

1. **Make your changes** to the codebase
2. **Create a changeset** by running:
   ```bash
   pnpm changeset
   ```
3. **Follow the prompts**:
   - Select the package (`@nextnode/eslint-plugin`)
   - Choose version bump type (patch/minor/major)
   - Write a description of your changes
4. **Commit the changeset file** with your changes
5. **Create a Pull Request**

### Automated Workflow

1. **PR Check**: The `changeset-check` workflow ensures every PR includes a changeset
2. **On Merge to Main**: The `release` workflow automatically:
   - Creates a "Version Packages" PR with version bumps and changelog updates
   - When that PR is merged, publishes the new version to npm

## Creating a Changeset

When you make changes that should trigger a version bump, run:

```bash
pnpm changeset
```

This interactive command will:
1. Ask which packages should be bumped (select `@nextnode/eslint-plugin`)
2. Ask what type of change this is:
   - **patch**: Bug fixes, small improvements
   - **minor**: New features, non-breaking changes
   - **major**: Breaking changes
3. Ask for a summary of the changes

This creates a markdown file in `.changeset/` that should be committed with your changes.

## Version Types

- **patch** (1.0.0 → 1.0.1): Bug fixes, documentation updates, internal improvements
- **minor** (1.0.0 → 1.1.0): New features, new rules, non-breaking enhancements
- **major** (1.0.0 → 2.0.0): Breaking changes, removed features, changed APIs

## Example Workflow

```bash
# Create a feature branch
git checkout -b feature/new-rule

# Make your changes to the code
# ... edit files ...

# Create a changeset
pnpm changeset
# Follow prompts: select package, choose "minor", describe the new rule

# Commit everything
git add .
git commit -m "feat: add new TypeScript rule"

# Push and create PR
git push origin feature/new-rule
```

## Configuration

### Project Setup

The following has been configured for this project:

#### Dependencies
- `@changesets/cli` - Core changeset functionality
- `@changesets/changelog-github` - GitHub-integrated changelog generation

#### Configuration Files
- `.changeset/config.json` - Changeset configuration
- This documentation file

#### GitHub Workflows
- `.github/workflows/release.yml` - Automated versioning and publishing
- `.github/workflows/changeset-check.yml` - Ensures PRs include changesets

#### Package.json Scripts
- `pnpm changeset` - Create a new changeset
- `pnpm changeset:version` - Apply changesets and bump versions
- `pnpm changeset:publish` - Publish to npm

### GitHub Secrets

For automatic publishing to work, the following secret must be configured in the GitHub repository:

1. Go to **Settings → Secrets and variables → Actions**
2. Add `NPM_TOKEN` with your npm publish token

## Manual Commands

```bash
# Create a new changeset
pnpm changeset

# Apply changesets and update versions (automated in CI)
pnpm changeset:version

# Publish to npm (automated in CI)
pnpm changeset:publish
```

## Troubleshooting

### Common Issues

1. **Missing changeset**: If the PR check fails, ensure you've created and committed a changeset file
2. **Publishing fails**: Check that the `NPM_TOKEN` secret is correctly configured
3. **Version conflicts**: Let the automated workflow handle version bumps to avoid conflicts

### Testing the Workflow

You can test the changeset workflow by:
1. Creating a small documentation change
2. Running `pnpm changeset` and selecting "patch"
3. Creating a PR to see the validation in action

## Resources

- [Official Changesets Documentation](https://github.com/changesets/changesets)
- [Changesets Concepts](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)
- [GitHub Actions Integration](https://github.com/changesets/action)
