# Project Templates Repository

This repository contains a collection of project templates that can be used to bootstrap new projects using a Rust-based template generator.

## Repository Structure

```
.
├── apps/              # Application templates
│   ├── astro/         # Astro app templates
│   └── nextjs/        # Next.js app templates
│
├── packages/          # Package templates
│   ├── api/           # API package templates
│   ├── cli/           # Command-line tool templates
│   └── library/       # Library package templates
│
└── utils/             # Utility templates
    ├── config/        # Configuration templates
    ├── scripts/       # Script templates
    └── tools/         # Tool templates
```

## Usage

Each template directory contains a complete project structure that can be used as a starting point for new projects. The templates are designed to be used with a Rust-based template generator script.

### Template Categories

- **Apps**: Full application templates for different frameworks
- **Packages**: Reusable package templates for APIs, CLIs, and libraries
- **Utils**: Utility templates for scripts, configurations, and tools

## Adding New Templates

When adding new templates:
1. Choose the appropriate category (apps, packages, or utils)
2. Create a new directory with a descriptive name
3. Include a README.md in each template directory explaining its purpose and usage
4. Ensure all necessary files and configurations are included

## Contributing

Feel free to contribute by adding new templates or improving existing ones. Please follow the established directory structure and include appropriate documentation.
