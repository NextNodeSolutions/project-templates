# CLAUDE.md - POC Frontend Template

This file provides guidance to Claude Code (claude.ai/code) when working with code generated from this template.

## Project Overview

This is a **POC (Proof of Concept) frontend template** for NextNode projects, designed for rapid prototyping and validation of ideas. Built with modern tools and following NextNode standards, this template provides everything needed to quickly build interactive web applications.

**Key Features:**
- **Preact + Vite**: Lightweight and blazing-fast development
- **Tailwind CSS v4**: Modern utility-first styling
- **TypeScript strict mode**: Maximum type safety
- **localStorage Patterns**: Type-safe data persistence without backend
- **@nextnode/logger**: Structured logging system
- **@nextnode/standards**: Unified configurations across all tools
- **Complete testing setup**: Vitest with comprehensive examples
- **Pre-commit hooks**: Automated quality checks

## Technology Stack

### Core Framework
- **Preact 10.x**: 3KB React alternative with same API
- **Vite 7.x**: Next-generation frontend tooling
- **TypeScript 5.9**: Strict mode with comprehensive type safety

### Styling
- **Tailwind CSS v4**: Latest version with @tailwindcss/vite plugin
- **class-variance-authority**: Type-safe component variants
- **tailwind-merge**: Intelligent class name merging

### NextNode Standards
- **@nextnode/standards**: Shared configurations for TypeScript, Vitest, Prettier, Biome
- **@nextnode/logger**: Structured logging with environment-aware formatting
- **@nextnode/eslint-plugin**: Consistent code quality standards

### Testing & Quality
- **Vitest**: Modern test runner with built-in TypeScript support
- **@testing-library/preact**: Component testing utilities
- **ESLint + Biome**: Linting and formatting
- **Husky + lint-staged**: Pre-commit quality gates

## Development Commands

### Primary Workflow
```bash
pnpm dev              # Start development server (http://localhost:5173)
pnpm build            # TypeScript check + production build
pnpm preview          # Preview production build locally
```

### Testing Commands
```bash
pnpm test             # Run tests once
pnpm test:watch       # Watch mode for active development
pnpm test:coverage    # Generate coverage report
pnpm test:ui          # Open Vitest UI for interactive testing
```

### Code Quality Commands
```bash
pnpm lint             # ESLint with zero warnings policy
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format           # Format code with Biome
pnpm format:check     # Check formatting without changes
pnpm type-check       # TypeScript type checking without build
```

### Git Hooks (Automatic)
```bash
# Pre-commit (runs automatically)
- lint-staged: ESLint + Biome on staged files

# Commit-msg (runs automatically)
- commitlint: Validates conventional commit messages
```

## Project Architecture

### Directory Structure

```
{{project_name}}/
├── .husky/                     # Git hooks configuration
│   ├── commit-msg             # Commitlint validation
│   └── pre-commit             # Lint-staged execution
├── public/                     # Static assets
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/
│   │   ├── common/            # Reusable UI components
│   │   │   ├── Button.tsx     # Button with variants
│   │   │   ├── Card.tsx       # Card component family
│   │   │   └── Modal.tsx      # Modal with hooks
│   │   └── features/          # Business logic components
│   │       └── ExampleFeature.tsx # Full-featured example
│   ├── hooks/                 # Custom Preact hooks
│   │   ├── useLocalStorage.ts # Type-safe localStorage
│   │   └── useModal.ts        # Modal state management
│   ├── lib/                   # Core utilities
│   │   ├── storage.ts         # LocalStorage class + helpers
│   │   ├── logger.ts          # Logger instances
│   │   └── utils.ts           # Helper functions (cn, etc.)
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Global types
│   ├── styles/
│   │   └── index.css          # Global styles + Tailwind
│   ├── app.tsx                # Main App component
│   └── main.tsx               # Application entry point
├── __tests__/                 # Test files
│   ├── setup.ts               # Test setup + mocks
│   ├── utils.spec.ts          # Utils tests
│   └── storage.spec.ts        # Storage tests
├── biome.json                 # Biome configuration
├── commitlint.config.js       # Commitlint configuration
├── eslint.config.mjs          # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── vitest.config.ts           # Vitest configuration
└── CLAUDE.md                  # This file
```

### Component Organization

#### Common Components (src/components/common/)
Reusable UI components that can be used throughout the application:

- **Button**: Button component with variants (default, destructive, outline, etc.)
- **Card**: Card component family (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- **Modal**: Full-featured modal with backdrop, keyboard shortcuts, and body scroll locking

#### Feature Components (src/components/features/)
Business logic components that combine common components with application logic:

- **ExampleFeature**: Complete example demonstrating localStorage, modals, and component composition

## Core Patterns and Best Practices

### 1. Component Patterns

#### Using Common Components

```typescript
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'

export const MyFeature = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>My Feature</CardTitle>
			</CardHeader>
			<CardContent>
				<Button variant="default" onClick={handleClick}>
					Click Me
				</Button>
			</CardContent>
		</Card>
	)
}
```

#### Component Variants with CVA

```typescript
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const myComponentVariants = cva(
	'base-classes-here',
	{
		variants: {
			variant: {
				default: 'default-classes',
				primary: 'primary-classes',
			},
			size: {
				sm: 'small-classes',
				lg: 'large-classes',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'sm',
		},
	}
)

export const MyComponent = ({ variant, size, className }: VariantProps<typeof myComponentVariants>) => {
	return <div className={cn(myComponentVariants({ variant, size }), className)} />
}
```

### 2. State Management Patterns

#### LocalStorage Persistence

```typescript
import { useLocalStorage } from '@/hooks/useLocalStorage'

// Basic usage
const [user, setUser] = useLocalStorage('user', { name: 'Guest' })

// With configuration
const [settings, setSettings, clearSettings] = useLocalStorage(
	'app-settings',
	{ theme: 'light', language: 'en' },
	{
		prefix: 'myapp',
		version: '1.0',
	}
)
```

#### Modal Management

```typescript
import { useModal } from '@/hooks/useModal'

const { isOpen, open, close, toggle } = useModal(false, {
	closeOnEscape: true,
	onOpen: () => console.log('Modal opened'),
	onClose: () => console.log('Modal closed'),
})
```

### 3. Storage Patterns

#### Using LocalStorage Class

```typescript
import { LocalStorage } from '@/lib/storage'

// Create typed storage instance
const userStorage = new LocalStorage<User>('user', {
	prefix: 'myapp',
	version: '1.0',
})

// Store data
userStorage.set({ id: '1', name: 'John' })

// Retrieve data
const user = userStorage.get() // User | null

// Check existence
if (userStorage.exists()) {
	// Data exists
}

// Clear data
userStorage.clear()
```

#### File/Blob to Base64

```typescript
import { fileToBase64, blobToBase64 } from '@/lib/storage'

// Convert file to base64
const handleFileUpload = async (file: File) => {
	const base64 = await fileToBase64(file)
	// Store or process base64 string
}

// Convert blob to base64
const blob = new Blob(['data'], { type: 'text/plain' })
const base64 = await blobToBase64(blob)
```

### 4. Logging Patterns

#### Using @nextnode/logger

```typescript
import { appLogger, storageLogger, componentLogger, apiLogger } from '@/lib/logger'

// Application-level logging
appLogger.info('App initialized', { environment: 'production' })

// Storage operations
storageLogger.info('Data saved', { key: 'user', timestamp: Date.now() })

// Component lifecycle
componentLogger.info('Component mounted', { componentName: 'ExampleFeature' })

// API calls
apiLogger.info('Request sent', { method: 'POST', url: '/api/data' })

// Error logging
try {
	// Some operation
} catch (error) {
	appLogger.error('Operation failed', {
		error: error instanceof Error ? error.message : 'Unknown error',
		context: 'user-registration',
	})
}
```

### 5. Styling Patterns

#### Using cn() for Class Composition

```typescript
import { cn } from '@/lib/utils'

// Basic composition
<div className={cn('px-4 py-2', 'bg-blue-500')} />

// Conditional classes
<div className={cn(
	'base-classes',
	isActive && 'active-classes',
	isPending && 'pending-classes'
)} />

// Tailwind conflict resolution
<div className={cn(
	'px-4',      // This will be overridden
	'px-8'       // This wins
)} />

// Organized by category (MANDATORY when available)
<div className={cn(
	// Base structural classes
	'flex items-center justify-between p-4 rounded-lg shadow-md',
	// Responsive breakpoints
	'md:p-6 lg:p-8',
	// Dark mode
	'dark:bg-gray-800 dark:text-white',
	// States
	'hover:shadow-lg focus:ring-2',
	// Conditional logic
	isActive && 'bg-blue-500 text-white'
)} />
```

#### Tailwind CSS v4 Best Practices

- **ALWAYS use Tailwind utility classes** - this is the primary styling method
- **Custom CSS is FORBIDDEN** except for extremely complex cases
- **Inline classes MANDATORY** - never store classes in constants (except cva)
- **Use cn() for conditional classes** - never concatenate strings manually

## TypeScript Configuration

### Single tsconfig.json Philosophy

This template uses a single, comprehensive `tsconfig.json` instead of multiple config files:

- **Strict Mode**: All strict checks enabled (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- **ESNext Modules**: Modern module resolution with bundler mode
- **Path Aliases**: `@/*` maps to `src/*` for clean imports
- **Preact JSX**: Configured for Preact with `jsxImportSource: "preact"`
- **React Compat**: Maps `react` and `react-dom` to Preact compat layer

### Type Safety Standards

- **No `any` types**: Use proper typing or `unknown` as last resort
- **Strict null checks**: Always handle null/undefined cases
- **Index access checking**: Arrays and objects require existence checks
- **Exact optional properties**: Differentiate between `undefined` and missing properties

## Testing Strategy

### Test Organization

Tests are located in `__tests__/` directory and follow these patterns:

- `setup.ts`: Test configuration, mocks, and cleanup
- `*.spec.ts`: Component and utility tests
- Follow existing patterns from @nextnode/logger and @nextnode/config-manager

### Test Setup

```typescript
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/preact'

describe('MyComponent', () => {
	beforeEach(() => {
		// Setup before each test
	})

	afterEach(() => {
		// Cleanup after each test
		vi.clearAllMocks()
	})

	it('should render correctly', () => {
		render(<MyComponent />)
		expect(screen.getByText('Expected Text')).toBeInTheDocument()
	})
})
```

### Mock Patterns

```typescript
// Mock localStorage (already configured in setup.ts)
beforeEach(() => {
	localStorage.clear()
})

// Mock logger
vi.mock('@/lib/logger', () => ({
	appLogger: {
		info: vi.fn(),
		warn: vi.fn(),
		error: vi.fn(),
	},
}))

// Mock hooks
vi.mock('@/hooks/useLocalStorage', () => ({
	useLocalStorage: vi.fn(() => [
		null,
		vi.fn(),
		vi.fn(),
	]),
}))
```

## Using @nextnode/standards

This template leverages `@nextnode/standards` for consistent tooling configurations:

### TypeScript
- No separate config needed - comprehensive `tsconfig.json` included
- Strict mode with all recommended checks enabled

### Vitest
```typescript
// vitest.config.ts
import frontendConfig from '@nextnode/standards/vitest/frontend'

export default mergeConfig(viteConfig, defineConfig({
	test: {
		...frontendConfig.test,
		setupFiles: ['./__tests__/setup.ts'],
	},
}))
```

### Prettier
```json
// package.json
{
	"prettier": "@nextnode/standards/prettier"
}
```

### Biome
```json
// biome.json
{
	"extends": ["@nextnode/standards/biome"]
}
```

### Commitlint
```javascript
// commitlint.config.js
import config from '@nextnode/standards/commitlint'
export default config
```

## Development Workflow

### Standard Development Cycle

1. **Start development server**: `pnpm dev`
2. **Make changes**: Edit source files with hot reload
3. **Write tests**: Add tests for new features
4. **Run tests**: `pnpm test:watch` during development
5. **Quality checks**: Pre-commit hooks run automatically
6. **Commit**: Use conventional commit format

### Quality Assurance Pipeline

Before committing, ensure all checks pass:

```bash
# Run all quality checks
pnpm lint && pnpm type-check && pnpm test

# Auto-fix issues
pnpm lint:fix && pnpm format
```

### Conventional Commits

This template enforces conventional commit format:

```bash
# Feature
feat: add user authentication

# Bug fix
fix: resolve localStorage sync issue

# Documentation
docs: update CLAUDE.md with new patterns

# Refactor
refactor: simplify modal hook logic

# Test
test: add tests for storage utility
```

## POC-Specific Guidelines

### Rapid Prototyping Tips

1. **Use LocalStorage First**: No backend needed for initial POC
2. **Component Reusability**: Build on common components instead of creating new ones
3. **Logging for Debugging**: Use logger instead of console.log for better debugging
4. **Type Safety**: Leverage TypeScript for fewer runtime errors
5. **Test Critical Paths**: Focus tests on core functionality

### When to Evolve Beyond POC

Consider transitioning to a full application when:

- POC validates the concept successfully
- User base grows beyond testing group
- Data persistence needs become complex
- Real-time updates or collaboration required
- Security requirements increase

### Migration Path

To evolve this POC into production:

1. **Backend Integration**: Replace localStorage with API calls
2. **Authentication**: Add auth system (OAuth, JWT, etc.)
3. **State Management**: Consider Zustand or Jotai for complex state
4. **Database**: Implement proper data persistence
5. **Deployment**: Set up CI/CD pipeline with Railway or similar
6. **Monitoring**: Add error tracking (Sentry) and analytics

## Common Development Tasks

### Adding a New Feature

1. Create feature component in `src/components/features/`
2. Use common components and hooks for UI and state
3. Add logging for important operations
4. Write tests for the feature
5. Import and use in `app.tsx`

### Creating a Reusable Component

1. Create component in `src/components/common/`
2. Use CVA for variants if needed
3. Export from the file
4. Document with TSDoc comments
5. Add tests

### Adding a Custom Hook

1. Create hook in `src/hooks/`
2. Follow Preact hooks best practices
3. Use TypeScript for parameters and return type
4. Add tests
5. Document usage

### Adding Utility Functions

1. Add function to `src/lib/utils.ts`
2. Use TypeScript for type safety
3. Export from the file
4. Add tests
5. Document with TSDoc

## Environment Configuration

### Development
- Hot module replacement enabled
- Source maps for debugging
- Detailed error messages
- Logging to console

### Production
- Minified and optimized build
- Source maps for debugging
- JSON structured logging
- Performance optimized

## Performance Considerations

### Bundle Size
- Preact is only 3KB (vs React 40KB+)
- Tree-shaking enabled by default
- Dynamic imports for code splitting if needed

### Runtime Performance
- Preact's Virtual DOM is highly optimized
- Use memo/useMemo for expensive computations
- Avoid unnecessary re-renders with useCallback

### Build Performance
- Vite's dev server starts in milliseconds
- Hot Module Replacement (HMR) for instant updates
- Optimized production builds with esbuild

## Troubleshooting

### Common Issues

**"Module not found" errors**
- Check import paths use `@/` prefix for src files
- Ensure TypeScript path aliases match vite.config.ts

**"localStorage is not defined" in tests**
- Mock is configured in `__tests__/setup.ts`
- Ensure setup file is loaded in vitest.config.ts

**Tailwind classes not applying**
- Check `index.css` imports Tailwind directives
- Verify `@tailwindcss/vite` plugin is in vite.config.ts

**TypeScript errors**
- Run `pnpm type-check` to see all errors
- Check tsconfig.json includes all source files

**Pre-commit hooks not running**
- Run `pnpm prepare` to install Husky hooks
- Check `.husky/` files have execute permissions

## Best Practices Summary

### Code Quality
- **Zero warnings policy**: Fix all ESLint warnings before commit
- **Type safety**: No `any` types, handle null/undefined explicitly
- **Test coverage**: Aim for >80% on new features
- **Conventional commits**: Required for all commits

### Component Design
- **Composition over inheritance**: Build complex UIs from simple components
- **Single responsibility**: Each component does one thing well
- **Props typing**: Always define interface for component props
- **Reusability**: Extract common patterns into shared components

### State Management
- **Local first**: Use component state for UI-only state
- **localStorage for POC**: Type-safe persistence without backend
- **Hooks for logic**: Extract reusable logic into custom hooks
- **Minimal global state**: Keep state as local as possible

### Styling
- **Tailwind utilities**: Primary styling method
- **cn() for composition**: Merge classes with conflict resolution
- **Variants with CVA**: Type-safe component variations
- **Responsive design**: Mobile-first with Tailwind breakpoints

## Template Philosophy

This template embodies the **"Simplest but Never Easiest"** principle:

- **Simple**: Clean architecture, clear patterns, minimal complexity
- **Not Easy**: No shortcuts that compromise quality or maintainability
- **Type-safe**: TypeScript strict mode catches errors early
- **Well-tested**: Comprehensive test coverage from the start
- **Production-ready patterns**: POC code that can evolve into production

The goal is to enable rapid prototyping while maintaining code quality standards that allow smooth transition from POC to production.
