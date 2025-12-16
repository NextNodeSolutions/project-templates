# {{project_name}}

{{project_description}}

## Installation

```bash
pnpm add {{project_name}}
```

## Usage

```typescript
import {} from '{{project_name}}'

// TODO: Add usage examples
```

## Development

### Commands

```bash
# Development
pnpm build              # Build with tsup (minified ESM + .d.ts)
pnpm clean              # Remove dist directory
pnpm type-check         # TypeScript validation
pnpm size               # Check bundle size

# Testing
pnpm test               # Run tests once
pnpm test:watch         # Watch mode for tests
pnpm test:coverage      # Generate coverage report
pnpm test:ui            # Open Vitest UI

# Code Quality
pnpm lint               # Lint with Biome (auto-fix)
pnpm format             # Format with Prettier

# Version Management
pnpm changeset          # Create changeset for version bump
pnpm changeset:version  # Update versions from changesets
pnpm changeset:publish  # Publish to NPM registry
```

## License

{{project_license}}
