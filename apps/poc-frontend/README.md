# {{project_name}}

{{project_description}}

A modern POC frontend built with Preact, Vite, Tailwind CSS v4, and TypeScript following NextNode standards.

## Features

- ⚡️ **Blazing Fast**: Preact + Vite for instant hot reload
- 🎨 **Modern Styling**: Tailwind CSS v4 with utility-first approach
- 🔒 **Type-Safe**: TypeScript strict mode throughout
- 💾 **LocalStorage Patterns**: Type-safe data persistence without backend
- 📝 **Structured Logging**: @nextnode/logger integration
- ✅ **Testing Setup**: Vitest with comprehensive examples
- 🎯 **Pre-commit Hooks**: Automated quality checks
- 📦 **Component Library**: Reusable UI components (Button, Card, Modal)
- 🪝 **Custom Hooks**: useLocalStorage, useModal, and more

## Quick Start

### Prerequisites

- Node.js >= 24.0.0
- pnpm >= 10.12.4

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## Available Scripts

### Development

```bash
pnpm dev          # Start development server with hot reload
pnpm build        # Build for production
pnpm preview      # Preview production build locally
```

### Testing

```bash
pnpm test              # Run tests once
pnpm test:watch        # Run tests in watch mode
pnpm test:coverage     # Run tests with coverage report
pnpm test:ui           # Open Vitest UI for interactive testing
```

### Code Quality

```bash
pnpm lint              # Run ESLint (zero warnings policy)
pnpm lint:fix          # Auto-fix ESLint issues
pnpm format            # Format code with Biome
pnpm format:check      # Check formatting without changes
pnpm type-check        # TypeScript type checking
```

## Project Structure

```
{{project_name}}/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── Button.tsx   # Button with variants
│   │   │   ├── Card.tsx     # Card component family
│   │   │   └── Modal.tsx    # Modal with hooks
│   │   └── features/        # Business logic components
│   │       └── ExampleFeature.tsx
│   ├── hooks/               # Custom Preact hooks
│   │   ├── useLocalStorage.ts
│   │   └── useModal.ts
│   ├── lib/                 # Core utilities
│   │   ├── storage.ts       # LocalStorage utilities
│   │   ├── logger.ts        # Logger instances
│   │   └── utils.ts         # Helper functions
│   ├── types/               # TypeScript definitions
│   ├── styles/              # Global styles
│   ├── app.tsx              # Main App component
│   └── main.tsx             # Application entry
├── __tests__/               # Test files
└── public/                  # Static assets
```

## Technology Stack

### Core

- **[Preact](https://preactjs.com/)** - 3KB React alternative
- **[Vite](https://vite.dev/)** - Next-generation frontend tooling
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[class-variance-authority](https://cva.style/)** - Type-safe component variants
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Intelligent class merging

### NextNode Standards

- **[@nextnode/standards](https://github.com/NextNodeSolutions/standards)** - Unified configurations
- **[@nextnode/logger](https://github.com/NextNodeSolutions/logger)** - Structured logging
- **[@nextnode/eslint-plugin](https://github.com/NextNodeSolutions/eslint-plugin)** - Code quality standards

### Testing & Quality

- **[Vitest](https://vitest.dev/)** - Blazing fast unit test framework
- **[@testing-library/preact](https://testing-library.com/docs/preact-testing-library/intro/)** - Component testing utilities
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for quality gates

## Usage Examples

### Using LocalStorage Hook

```typescript
import { useLocalStorage } from '@/hooks/useLocalStorage'

const MyComponent = () => {
	const [data, setData, clearData] = useLocalStorage('my-key', initialValue)

	return (
		<div>
			<button onClick={() => setData(newValue)}>Update</button>
			<button onClick={clearData}>Clear</button>
		</div>
	)
}
```

### Using Modal Hook

```typescript
import { useModal } from '@/hooks/useModal'
import { Modal } from '@/components/common/Modal'

const MyComponent = () => {
	const { isOpen, open, close } = useModal()

	return (
		<>
			<button onClick={open}>Open Modal</button>
			<Modal isOpen={isOpen} onClose={close} title="My Modal">
				<p>Modal content here</p>
			</Modal>
		</>
	)
}
```

### Using Common Components

```typescript
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'

const MyFeature = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Feature Title</CardTitle>
			</CardHeader>
			<CardContent>
				<Button variant="default" onClick={handleClick}>
					Action
				</Button>
			</CardContent>
		</Card>
	)
}
```

### Logging

```typescript
import { appLogger } from '@/lib/logger'

// Info logging
appLogger.info('User action', { userId: '123', action: 'click' })

// Error logging
appLogger.error('Operation failed', {
	error: error.message,
	context: 'user-registration',
})
```

## Development Guidelines

### Code Style

- **TypeScript strict mode**: No `any` types, handle null/undefined explicitly
- **Conventional commits**: Required for all commits (`feat:`, `fix:`, `docs:`, etc.)
- **Zero warnings policy**: All ESLint warnings must be fixed before commit
- **Tailwind utilities**: Primary styling method, custom CSS only when necessary

### Component Guidelines

- **Composition over inheritance**: Build complex UIs from simple components
- **Single responsibility**: Each component does one thing well
- **Props typing**: Always define TypeScript interface for component props
- **Reusability**: Extract common patterns into shared components

### Testing Guidelines

- **Test behavior, not implementation**: Focus on what the component does
- **Aim for >80% coverage**: Especially for business logic
- **Mock external dependencies**: Use Vitest mocks for clean tests
- **Use testing-library**: Query by role, text, or label for accessible tests

## Pre-commit Hooks

This project uses Husky to enforce quality standards before commits:

- **ESLint**: Checks code quality and fixes auto-fixable issues
- **Biome**: Formats code consistently
- **Commitlint**: Validates conventional commit format

Commits will be blocked if any checks fail.

## Contributing

1. Create a new branch from `main`
2. Make your changes following the guidelines
3. Ensure all tests pass: `pnpm test`
4. Run quality checks: `pnpm lint && pnpm type-check`
5. Commit with conventional format: `feat: add new feature`
6. Create a pull request

## License

{{project_license}}

## Support

For issues or questions, please check the [CLAUDE.md](./CLAUDE.md) file for detailed documentation.

---

Built with [NextNode POC Frontend Template](https://github.com/NextNodeSolutions/project-templates)
