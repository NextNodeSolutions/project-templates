# CLAUDE.md - Library Template

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **library template** for NextNode TypeScript packages. It follows the established patterns from `@nextnode/config-manager` and `@nextnode/logger` with modern CI/CD workflows and comprehensive tooling.

**Template Features:**
- **TypeScript strict mode** with maximum type safety
- **ESM-only package** with proper exports configuration
- **Modern CI/CD** with automated version management and publishing
- **Comprehensive tooling** (ESLint, Biome, Vitest, Husky)
- **Automated release management** with changesets and NPM provenance

## Template Structure

```
library/
├── .changeset/              # Version management configuration
├── .github/workflows/       # CI/CD workflows (test, version, publish)
├── .husky/                  # Git hooks configuration
├── src/                     # Source code
│   ├── lib/                # Core library modules
│   ├── types/              # Type definitions
│   ├── utils/              # Utility functions
│   └── index.ts            # Main export file
├── package.json            # Package configuration
├── tsconfig.json           # TypeScript config (development)
├── tsconfig.build.json     # TypeScript config (build)
├── vitest.config.ts        # Test configuration
├── eslint.config.mjs       # ESLint configuration
├── biome.json              # Formatting configuration
└── template_config.json    # Template generation config
```

## Development Commands

### Build & Development
```bash
pnpm build              # Build library (clean + tsc + tsc-alias)
pnpm clean              # Remove dist directory
pnpm type-check         # TypeScript validation
```

### Testing
```bash
pnpm test               # Run tests once
pnpm test:watch         # Watch mode for tests
pnpm test:coverage      # Generate coverage report
pnpm test:ui            # Open Vitest UI
```

### Code Quality
```bash
pnpm lint               # ESLint with @nextnode/eslint-plugin (auto-fix)
pnpm format             # Format with Biome
```

### Version Management & Publishing
```bash
pnpm changeset          # Create changeset for version bump
pnpm changeset:version  # Update versions from changesets
pnpm changeset:publish  # Publish to NPM registry
```

## CI/CD Workflows

The template includes modern GitHub Actions workflows following NextNode standards:

### Test Workflow (`test.yml`)
- **Trigger**: Pull requests to main/master
- **Node.js**: Version 24 (latest)
- **Quality checks**: Lint, typecheck, tests, build
- **Coverage**: Enabled by default

### Version Management (`version.yml`)
- **Trigger**: Pushes to main branch, manual dispatch
- **Function**: Creates version bump PRs using changesets
- **Auto-merge**: Enabled for automated workflow

### Auto Publish (`auto-publish.yml`)
- **Trigger**: Repository dispatch when version PR is merged
- **Function**: Automatically publishes to NPM with provenance
- **GitHub Releases**: Creates releases automatically

### Manual Publish (`manual-publish.yml`)
- **Trigger**: Manual workflow dispatch
- **Function**: Emergency publishing without version PR

### Changeset Check (`changeset-check.yml`)
- **Trigger**: Pull request creation/updates
- **Function**: Ensures changesets are added for source code changes
- **Smart detection**: Only requires changesets for actual code changes

## TypeScript Configuration

### Strict Mode Settings
- **Maximum type safety**: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- **ESNext modules**: Modern module resolution with bundler mode
- **Path mapping**: `@/*` aliases for clean imports
- **Build separation**: Development config with `noEmit`, separate build config

### Module System
- **ESM-only**: No CommonJS support, pure ES modules
- **Exports**: Properly configured with types and import paths
- **Extension mapping**: `.js` extensions in imports for Node.js compatibility

## Template Variables

The `template_config.json` defines replaceable variables:

### Package.json Variables
- `{{project_name}}`: Package name (e.g., `@nextnode/my-library`)
- `{{project_description}}`: Package description
- `{{project_author}}`: Author information
- `{{project_keywords}}`: Keywords array
- `{{project_license}}`: License type
- `{{project_version}}`: Initial version

### Repository Variables
- Used in changeset configuration and README updates
- Automatically replaced during template generation

## Code Quality Standards

### ESLint Configuration
- Uses `@nextnode/eslint-plugin` for consistent NextNode standards
- **Zero warnings policy**: `--max-warnings 0`
- **Auto-fix enabled**: Automatically fixes issues during lint

### Formatting
- **Biome**: Fast alternative to Prettier
- **No errors on unmatched**: Handles various file types gracefully
- **Pre-commit hooks**: Automatic formatting before commits

### Testing
- **Vitest**: Modern test runner with built-in TypeScript support
- **Coverage reporting**: V8 provider for accurate coverage
- **UI testing**: Interactive test interface available

## Dependency Management

### Development Dependencies
- **@nextnode/eslint-plugin**: Shared linting rules
- **@biomejs/biome**: Modern formatting and linting
- **@vitest/coverage-v8**: Test coverage reporting
- **@changesets/cli**: Version management system
- **typescript**, **tsc-alias**: TypeScript compilation with path mapping
- **husky**, **lint-staged**: Git hooks and pre-commit checks

### Production Dependencies
- Template is designed to be lightweight
- Add production dependencies based on library functionality
- Consider peer dependencies for framework integrations

## Release Management

### Automated Workflow
1. **Development**: Create feature branches, implement changes
2. **Changeset**: Run `pnpm changeset` to describe changes
3. **Pull Request**: Create PR, automated checks run
4. **Merge**: Version management creates version PR automatically
5. **Auto-publish**: Version PR merge triggers NPM publishing

### Manual Workflow
- Use manual-publish workflow for emergency releases
- Changeset check ensures proper version tracking
- GitHub releases created automatically with changelog

## Template Usage

### From Template Generator
```bash
# Using NextNode project generator
project-generator new library my-awesome-library
```

### Manual Setup
1. Copy template files to new directory
2. Replace template variables in package.json, README.md
3. Update changeset configuration with correct repository
4. Initialize git repository and push to GitHub
5. Configure NPM_TOKEN secret for publishing

## Best Practices

### Code Organization
- **lib/**: Core library functionality, organized by feature
- **types/**: TypeScript type definitions and interfaces
- **utils/**: Shared utility functions and helpers
- **index.ts**: Single entry point with clean exports

### Documentation
- **README.md**: User-facing documentation with examples
- **CHANGELOG.md**: Generated automatically by changesets
- **API documentation**: Consider TypeDoc for complex libraries

### Testing Strategy
- **Unit tests**: Test individual functions and classes
- **Integration tests**: Test module interactions
- **Type tests**: Ensure TypeScript types work correctly
- **Coverage**: Aim for >80% coverage on new code

### Version Management
- **Semantic versioning**: Following semver standards
- **Conventional commits**: Use conventional commit messages
- **Changesets**: Always create changesets for changes affecting users
- **Breaking changes**: Clearly document in changeset descriptions

## Environment Requirements

- **Node.js**: >=24.0.0 (latest LTS)
- **pnpm**: 10.11.0+ (specified in packageManager)
- **TypeScript**: 5.0+ for modern language features
- **Git**: For version control and hooks

## Migration Notes

This template incorporates lessons learned from:
- **@nextnode/config-manager**: Advanced TypeScript patterns, automated type generation
- **@nextnode/logger**: Clean architecture, zero-dependency design
- **Modern CI/CD**: Automated version management and publishing workflows

### From Older Templates
- Updated to Node 24 from Node 20
- New release workflow system replacing single release.yml
- Enhanced TypeScript strict mode settings
- Updated dependency versions and tooling