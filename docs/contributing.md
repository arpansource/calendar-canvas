---
sidebar_position: 7
sidebar_label: "Contributing"
---
# Contributing to Calendar Canvas

First off, thank you for considering contributing to Calendar Canvas! It's people like you that make Calendar Canvas such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [ap0661236@gmail.com](mailto:ap0661236@gmail.com).

## Protected Branches

This repository has three protected branches:
- `main`: Production code
- `docs`: Documentation website source
- `gh-pages`: Built documentation (auto-deployed)

⚠️ **Important**: Never push directly to these branches. All contributions must come through Pull Requests.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check [existing issues](https://github.com/calendar-canvas/calendar-canvas/issues) as you might find that the issue has already been reported. When creating a bug report, please include as much detail as possible:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the proposed feature
- Explain why this enhancement would be useful
- List some examples of how it would be used

### Pull Requests

#### Getting Started

1. Fork the repository
2. Create your feature branch from `main` for code changes or `docs` for documentation:
   ```bash
   # For code changes
   git checkout main
   git checkout -b feature/your-feature-name

   # For documentation changes
   git checkout docs
   git checkout -b docs/your-doc-change
   ```

3. Make your changes
4. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit-message-guidelines)
5. Push to your fork
6. Create a Pull Request

#### Branch Naming Convention

- Features: `feature/your-feature-name`
- Bug fixes: `fix/issue-description`
- Documentation: `docs/what-you-changed`
- Performance improvements: `perf/what-you-optimized`

#### Development Process

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. Make your changes

4. Run tests:
   ```bash
   npm run test
   ```

5. Build the library:
   ```bash
   npm run build
   ```

#### Commit Message Guidelines

We follow conventional commits specification:

- `FEAT:` New feature
- `FIX:` Bug fix
- `DOCS:` Documentation only changes
- `STYLE:` Changes that don't affect the meaning of the code
- `REFACTOR:` Code change that neither fixes a bug nor adds a feature
- `PERF:` Code change that improves performance
- `TEST:` Adding missing tests
- `CHORE:` Changes to the build process or auxiliary tools

Example:
```
FEAT: add week view navigation
```

#### Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation with details of any new features
3. The PR must pass all CI/CD checks
4. At least one maintainer must review and approve your PR
5. Squash commits before merging

## Style Guide

- Use TypeScript
- Follow existing code style
- Write meaningful variable and function names
- Add JSDoc comments for public APIs
- Include unit tests for new features

## Documentation

If you're adding a new feature:
1. Add JSDoc comments
2. Update the TypeScript types
3. Add an example in the documentation
4. Update relevant guides

## Questions?

Don't hesitate to ask questions about:
- How to implement a feature
- Best practices
- Design decisions
- Anything else related to the project

Create a discussion on GitHub or reach out to [ap0661236@gmail.com](mailto:ap0661236@gmail.com).

## License

By contributing, you agree that your contributions will be licensed under the MIT License.