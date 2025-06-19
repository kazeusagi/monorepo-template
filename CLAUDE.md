# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `bun install`
- **Lint code**: `bun run lint` (runs Biome with warning level diagnostics)
- **Install git hooks**: `bunx lefthook install` (sets up pre-commit hooks)

## Code Standards

- **Runtime**: Bun (JavaScript/TypeScript)
- **Linter/Formatter**: Biome with tab indentation, single quotes, 100 character line width
- **Source files**: Located in `src/` directory (as configured in biome.json)
- **Git hooks**: Lefthook manages pre-commit hooks (currently commented out but available for lint/build checks)

## Project Structure

This is a Bun-based development template with integrated tooling for code quality and git workflow management. The project uses a Dev Container setup for consistent development environments.