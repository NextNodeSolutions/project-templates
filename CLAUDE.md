# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the **project-templates** project.

## Project Overview

Collection of project scaffolding templates for the NextNode ecosystem. Provides standardized templates for different types of applications, packages, and utilities. Integrates with the `project-generator` CLI for automated project creation.

## Context7 MCP - Documentation Priority

**CRITICAL**: Always prioritize Context7 MCP for accessing up-to-date official documentation when available.

### Usage Protocol - MANDATORY AUTOMATIC BEHAVIOR
**Claude MUST automatically use Context7 for ANY question about supported technologies without user prompting**

1. **AUTOMATICALLY invoke Context7** when working with any listed technology
2. **NO user prompt required** - Context7 usage is mandatory and transparent
3. **Prioritize official documentation** through Context7 over general knowledge
4. **If Context7 unavailable**, fall back to general knowledge with notification

### Priority Technologies for Context7 (project-templates specific) ✅

- **Astro**: Framework features, SSR, islands architecture, configuration ✅
- **React**: Components, hooks, testing, integration patterns ✅
- **TypeScript**: Strict configuration, utility types, generic patterns ✅
- **Tailwind CSS**: Utilities, configuration, theming, responsive design ✅
- **Vite**: Build configuration, plugins, optimization strategies ✅
- **Vitest**: Testing patterns, configuration, mocking, coverage ✅
- **Docker**: Multi-stage builds, optimization, containerization ✅
- **Fly.io**: Deployment configuration, health checks, scaling ✅
- **ESLint/Prettier**: Configuration, rules, plugin development ✅
- **JSON/YAML**: Configuration formats, parsing, validation ✅

## Repository Structure

```
apps/
├── astro/              # Astro application template
└── [future-apps]       # Additional app templates

packages/
└── [future-packages]   # Reusable package templates

[template-categories]/
└── [future-templates]  # Additional template categories
```

## Available Templates

### apps/astro/
Complete Astro application template with modern tooling:

**Features:**
- Astro 5.x with SSR configuration
- React integration for interactive components
- Tailwind CSS for styling
- TypeScript with strict configuration
- Vitest for testing
- ESLint and Prettier for code quality
- Docker deployment setup
- Fly.io deployment configuration

**Structure:**
```
astro/
├── src/
│   ├── components/     # React/Astro components
│   ├── pages/         # File-based routing
│   ├── layouts/       # Page layouts
│   └── styles/        # Global styles
├── public/            # Static assets
├── tests/            # Test files
├── Dockerfile        # Container configuration
├── fly.toml          # Fly.io deployment
└── template_config.json  # Generator configuration
```

## Template Configuration

### template_config.json
Each template includes a configuration file for the generator:

```json
{
  "name": "astro-app",
  "version": "1.0.0",
  "description": "Modern Astro application template",
  "category": "app",
  "variables": {
    "PROJECT_NAME": {
      "description": "Project name",
      "default": "my-astro-app",
      "required": true
    },
    "PROJECT_DESCRIPTION": {
      "description": "Project description", 
      "default": "A new Astro application",
      "required": false
    }
  },
  "dependencies": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  },
  "postGenerate": {
    "commands": [
      "pnpm install",
      "pnpm lint:fix"
    ],
    "instructions": [
      "Run 'pnpm dev' to start development server",
      "Update README.md with project-specific information"
    ]
  }
}
```

### Variable Substitution

Templates support variable substitution in:
- **File names**: `{{PROJECT_NAME}}.config.js`
- **File contents**: `"name": "{{PROJECT_NAME}}"`
- **Directory names**: `src/{{FEATURE_NAME}}/`

**Common Variables:**
- `{{PROJECT_NAME}}`: Project name (kebab-case)
- `{{PROJECT_TITLE}}`: Project title (Title Case)
- `{{PROJECT_DESCRIPTION}}`: Project description
- `{{AUTHOR_NAME}}`: Author name
- `{{AUTHOR_EMAIL}}`: Author email

## Creating New Templates

### Template Structure
1. **Create template directory** in appropriate category (`apps/`, `packages/`, etc.)
2. **Add template_config.json** with configuration
3. **Create template files** with variable substitution
4. **Test template** with project-generator CLI

### Best Practices

#### File Organization
```
template-name/
├── template_config.json    # Required: Template metadata
├── README.md              # Template documentation
├── src/                   # Source code structure
├── tests/                 # Test files
├── .gitignore            # Git ignore patterns
├── package.json          # Package configuration with variables
└── [config-files]        # Additional configuration
```

#### Variable Usage
- Use consistent variable naming across templates
- Provide sensible defaults for optional variables
- Document all variables in template_config.json
- Test variable substitution thoroughly

#### Code Quality
- Follow NextNode TypeScript standards
- Include ESLint and Prettier configuration
- Provide comprehensive test examples
- Include proper error handling patterns

## Template Standards

### TypeScript Configuration
All templates must include strict TypeScript configuration:

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true
  }
}
```

### Code Quality Tools
Required tools in all templates:
- **ESLint**: With `@nextnode/eslint-plugin`
- **Prettier**: Consistent formatting rules
- **Husky**: Git hooks for quality enforcement
- **Commitlint**: Conventional commit validation

### Testing Setup
Include testing configuration:
- **Vitest**: For unit and integration tests  
- **Testing Library**: For component testing (React templates)
- **Coverage**: Minimum 80% coverage target
- **CI integration**: GitHub Actions workflow examples

### Deployment Configuration
Templates should include:
- **Dockerfile**: Multi-stage build for production
- **fly.toml**: Fly.io deployment configuration
- **Health checks**: Application monitoring endpoints
- **Environment**: Production-ready configuration

## Integration with Project Generator

### CLI Usage
```bash
# Use local template
project-generator generate --template astro --name my-project

# With custom variables
project-generator generate --template astro --name my-project \
  --var PROJECT_DESCRIPTION="My awesome Astro app" \
  --var AUTHOR_NAME="John Doe"
```

### Configuration File
```yaml
# generator-config.yml
template:
  name: "astro"
  source: "local"
  path: "../project-templates/apps/astro"

project:
  name: "my-astro-app"
  description: "A new Astro application"

variables:
  AUTHOR_NAME: "Developer Name"
  AUTHOR_EMAIL: "dev@example.com"
```

## Template Testing

### Manual Testing
1. **Generate project** using template
2. **Run all commands** (install, build, test, lint)
3. **Verify structure** matches expected output
4. **Test customization** with different variables

### Automated Testing
Include tests in template directory:
```
tests/
├── template.test.js       # Template generation tests
├── structure.test.js      # File structure validation  
├── build.test.js         # Build process tests
└── integration.test.js   # End-to-end tests
```

## Maintenance

### Version Management
- Use semantic versioning for templates
- Update dependencies regularly
- Test templates with latest tool versions
- Maintain changelog for template updates

### Documentation
- Keep README.md current for each template
- Document breaking changes clearly
- Provide migration guides for major updates
- Include troubleshooting sections

## Related Projects
- See [../CLAUDE.md](../CLAUDE.md) for multi-repo overview
- Used by [../project-generator/](../project-generator/) CLI
- Based on patterns from [../nextnode-front/](../nextnode-front/)
- CI/CD integration via [../github-actions/](../github-actions/)