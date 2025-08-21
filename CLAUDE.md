# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a collection of project templates designed to bootstrap new projects using the Nextnode ecosystem. The repository contains templates for different project types that can be used with a Rust-based template generator.

## Template Categories

- **apps/**: Application templates (Astro, Next.js)
- **packages/**: Package templates (API libraries, CLI tools, reusable libraries)
- **utils/**: Utility templates (configurations, scripts, tools)

## Template Structure

Each template contains:
- Complete project structure with all necessary files
- `template_config.json` defining variable replacements for project generation
- Technology-specific configurations (tsconfig.json, eslint.config.mjs, etc.)
- Development tooling setup (testing, linting, formatting)

## Development Commands

### Root Level (Workspace Management)
```bash
pnpm format              # Format all files with Biome
pnpm commitlint         # Validate commit messages
```

### Astro Template (apps/astro/)
```bash
# Development
pnpm dev                # Start development server
pnpm build              # Build for production (includes astro check)
pnpm preview            # Preview production build

# Quality Assurance
pnpm lint               # ESLint with @nextnode/eslint-plugin
pnpm lint:fix           # Auto-fix ESLint issues
pnpm type-check         # TypeScript validation
pnpm test               # Run tests with Vitest
pnpm test:coverage      # Run tests with coverage
pnpm test:watch         # Watch mode testing
pnpm format             # Format with Prettier
```

### Library Template (packages/library/)
```bash
# Build & Publishing
pnpm build              # Compile TypeScript to dist/
pnpm clean              # Remove dist/ directory
pnpm prepublishOnly     # Pre-publish build hook

# Changesets (Version Management)
pnpm changeset          # Create a changeset
pnpm changeset:version  # Bump versions based on changesets
pnpm changeset:publish  # Publish to NPM

# Quality Assurance
pnpm lint               # ESLint with zero warnings
pnpm type-check         # TypeScript type checking
pnpm test               # Run test suite
pnpm test:coverage      # Coverage reporting
pnpm format             # Biome formatting
```

## Technology Stack

### Astro Template
- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS v4 with Vite integration
- **Testing**: Vitest with Testing Library and coverage
- **Linting**: ESLint with @nextnode/eslint-plugin
- **Formatting**: Prettier with Astro and Tailwind plugins
- **Deployment**: Fly.io with Docker, GitHub Actions CI/CD

### Library Template
- **Language**: TypeScript with strict configuration
- **Build**: TSC with multiple tsconfig files (build, eslint, vitest)
- **Testing**: Vitest with coverage
- **Versioning**: Changesets for semantic versioning
- **Publishing**: NPM with @nextnode scope
- **Formatting**: Biome (replaces Prettier)

## Template Configuration System

Templates use `template_config.json` to define variable replacements:
- File-based replacements for package.json, README.md, etc.
- Supports string and array value types
- Handles placeholders like `{{project_name}}`, `{{project_description}}`
- Default values for optional variables

## Development Standards

### Package Management
- **Required**: pnpm (configured in packageManager field)
- **Node Version**: >=20.0.0 (specified in engines)
- **Workspace**: Uses pnpm-workspace.yaml for monorepo structure

### Code Quality Requirements
- ESLint with @nextnode/eslint-plugin and zero warnings policy
- TypeScript strict mode configuration
- Conventional commits with commitlint
- Pre-commit hooks with husky and lint-staged
- 100% test coverage expectation for new utilities

### Git Workflow
- Conventional commits enforced via commitlint
- Husky pre-commit hooks for quality checks
- GitHub Actions for CI/CD (in Astro template)

## Architecture Notes

### Template Generation Flow
1. Rust generator selects template directory
2. Reads `template_config.json` for replacement rules
3. Processes file content with variable substitutions
4. Copies processed template to target location

### Multi-Config TypeScript Setup (Library)
- `tsconfig.json`: Base configuration for development
- `tsconfig.build.json`: Production build configuration  
- `tsconfig.eslint.json`: ESLint-specific TypeScript settings
- `tsconfig.vitest.json`: Test-specific configuration

### Deployment Strategy (Astro)
- Docker containerization with multi-stage builds
- Fly.io deployment with automatic scaling
- Environment-based deployments (dev/prod workflows)
- Health check endpoints configured