# CLAUDE.md - Library Template

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

This is a **library template** for NextNode TypeScript packages. It follows patterns from `@nextnode/http-client`, `@nextnode/logger`, `@nextnode/validation`, and `@nextnode/email-manager`.

**Features:**

- **TypeScript strict mode** with `@nextnode/standards`
- **ESM-only package** with tsup bundling
- **Multi-entry point** support (prepared for subpath exports)
- **Modern CI/CD** with automated version management and publishing
- **Comprehensive tooling** (Biome, Vitest, Husky, Changesets)

## Template Structure

```
library/
├── .changeset/              # Version management
├── .github/workflows/       # CI/CD (test, version, auto-publish, manual-publish, changeset-check)
├── .husky/                  # Git hooks (pre-commit, commit-msg, pre-push)
├── src/
│   ├── lib/                # Core library modules
│   ├── types/              # Type definitions
│   ├── utils/              # Utilities (logger)
│   └── index.ts            # Main entry point
├── package.json
├── tsconfig.json           # Development config (extends @nextnode/standards)
├── tsconfig.build.json     # Build config
├── tsup.config.ts          # Bundler configuration
├── vitest.config.ts        # Test configuration
├── biome.json              # Formatting (extends @nextnode/standards)
└── template_config.json    # Template generation config
```

## Commands

### Build & Development

```bash
pnpm build              # Build with tsup (minified ESM + .d.ts)
pnpm clean              # Remove dist directory
pnpm type-check         # TypeScript validation
pnpm size               # Check bundle size
```

### Testing

```bash
pnpm test               # Run tests once
pnpm test:watch         # Watch mode
pnpm test:coverage      # Coverage report
pnpm test:ui            # Vitest UI
```

### Code Quality

```bash
pnpm lint               # Biome lint (auto-fix)
pnpm format             # Prettier format
```

### Version Management

```bash
pnpm changeset          # Create changeset
pnpm changeset:version  # Update versions
pnpm changeset:publish  # Publish to NPM
```

## Build Configuration

**tsup.config.ts:**

- Format: ESM only
- Multiple entry points supported
- Minification + tree-shaking enabled
- Code splitting enabled
- Target: ES2023
- External: `@nextnode/logger` (and other peer deps)

**Adding a new entry point:**

```typescript
// tsup.config.ts
export default defineConfig({
	entry: {
		index: 'src/index.ts',
		subpath: 'src/subpath/index.ts',
	},
	// ...
})
```

Then update package.json exports:

```json
"exports": {
  ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
  "./subpath": { "types": "./dist/subpath.d.ts", "import": "./dist/subpath.js" }
}
```

## CI/CD Workflows

| Workflow              | Trigger           | Purpose                                        |
| --------------------- | ----------------- | ---------------------------------------------- |
| `test.yml`            | PR to main        | Quality checks (lint, typecheck, tests, build) |
| `version.yml`         | Push to main      | Creates version bump PR                        |
| `auto-publish.yml`    | Version PR merged | Auto-publishes to NPM                          |
| `manual-publish.yml`  | Manual dispatch   | Emergency publishing                           |
| `changeset-check.yml` | PR opened         | Ensures changesets for source changes          |

## TypeScript Configuration

- Extends `@nextnode/standards/typescript/library`
- Path aliases: `@/*` → `src/*`
- Libs: ES2023, DOM, WebWorker
- Strict mode with all safety checks

## Template Variables

| Variable                  | Usage                                          |
| ------------------------- | ---------------------------------------------- |
| `{{project_name}}`        | Package name (e.g., `@nextnode/my-lib`)        |
| `{{project_description}}` | Package description                            |
| `{{project_version}}`     | Initial version                                |
| `{{project_author}}`      | Author name                                    |
| `{{project_license}}`     | License type                                   |
| `{{repository_name}}`     | GitHub repo (e.g., `NextNodeSolutions/my-lib`) |

## Dependencies

**Production:**

- `@nextnode/logger` - Structured logging

**Development:**

- `@nextnode/standards` - Shared configs (TypeScript, Biome, Prettier, Commitlint)
- `tsup` - Bundler
- `vitest` - Testing
- `@changesets/cli` - Version management
- `husky` + `lint-staged` - Git hooks

## Best Practices

1. **Logging**: Use scoped loggers from `utils/logger.ts`
2. **Types**: Export types separately with `export type *`
3. **Tests**: Colocate with source (`*.test.ts`)
4. **Imports**: Use `.js` extensions for ESM compatibility
5. **Changesets**: Always add for source changes

## Environment

- Node.js: >=24.0.0
- pnpm: 10.11.0
- TypeScript: 5.x
