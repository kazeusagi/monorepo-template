# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `bun install`
- **Development server**: `bun run dev` (starts all workspace apps with Turbo)
- **Build**: `bun run build` (builds all workspace packages and apps)
- **Lint code**: `bun run lint` (runs Biome with warning level diagnostics)
- **Format code**: `bun run format` (formats code with Biome)
- **Type check**: `bun run check-types` (runs TypeScript type checking across workspaces)
- **Install git hooks**: `bunx lefthook install` (sets up pre-commit hooks)

## Code Standards

- **Runtime**: Bun (JavaScript/TypeScript)
- **Package Manager**: Bun v1.2.16
- **Monorepo Tool**: Turborepo v2.5.4
- **Linter/Formatter**: Biome v2.0.0 with space indentation, single quotes, 100 character line width
- **Source files**: Located in `src/` directories within each workspace
- **Git hooks**: Lefthook manages pre-commit hooks (runs lint and build checks)

## Project Structure

This is a Turborepo monorepo template using Bun as the runtime and package manager.

### Workspace Structure
- **Root**: Configuration files (biome.json, turbo.json, lefthook.yml)
- **apps/web**: Next.js 15 application with React 19
- **packages/components**: Shared React components library
- **packages/api**: Shared API utilities
- **packages/typescript-config**: Shared TypeScript configurations

### Key Technologies
- **Next.js 15** with Turbopack for the web application
- **React 19** for UI components
- **TypeScript 5.8.2** for type safety
- **Biome** for linting and formatting with import organization
- **Lefthook** for Git hooks management