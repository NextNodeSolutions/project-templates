# Astro Template

A modern, high-performance Astro template with TypeScript, Tailwind CSS, and best practices for building fast websites and applications.

## Features

- ⚡ **Astro** - Build faster websites with less JavaScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔧 **TypeScript** - Type-safe development experience
- 🧪 **Vitest** - Fast unit testing framework
- 📝 **ESLint** - Code linting and formatting
- 🎯 **Biome** - Fast formatter and linter
- 📦 **Changesets** - Version management and changelog generation
- 🐶 **Husky** - Git hooks for code quality
- 🔄 **Commitlint** - Conventional commit messages

## Quick Start

### Prerequisites

- Node.js 20.0.0 or higher
- pnpm 10.11.0 or higher

### Installation

1. Clone this template:
```bash
git clone <repository-url>
cd astro-template
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Biome
- `pnpm type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
├── pages/          # Astro pages (routes)
└── styles/         # Global styles
```

## Customization

### Configuration Files

- `astro.config.mjs` - Astro configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `biome.json` - Biome formatter/linter configuration
- `eslint.config.mjs` - ESLint configuration

### Styling

This template uses Tailwind CSS for styling. You can customize the design system by modifying the `tailwind.config.js` file.

### Components

The template includes several pre-built components:
- `Header.astro` - Navigation header
- `Hero.astro` - Hero section component
- `Features.astro` - Features showcase
- `Footer.astro` - Footer component
- `BaseLayout.astro` - Base page layout

## Development Workflow

### Code Quality

This template includes several tools to maintain code quality:

1. **ESLint** - Lints your code for potential errors
2. **Biome** - Formats your code consistently
3. **Husky** - Runs pre-commit hooks
4. **Commitlint** - Ensures conventional commit messages

### Testing

Tests are written using Vitest and can be found in the `src/` directory with `.spec.ts` or `.test.ts` extensions.

### Version Management

This template uses Changesets for version management:

1. Create a changeset: `pnpm changeset`
2. Version packages: `pnpm changeset:version`
3. Publish packages: `pnpm changeset:publish`

## Deployment

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run the test suite
6. Submit a pull request

## License

This template is licensed under the ISC License.

## Support

For support and questions, please open an issue on the repository.
