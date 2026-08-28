<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="packages/console/app/src/asset/logo-ornate-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="packages/console/app/src/asset/logo-ornate-light.svg">
    <img src="packages/console/app/src/asset/logo-ornate-light.svg" width="348" height="84" alt="Nebula">
  </picture>
</p>

<p align="center">
  <b>The open source AI coding agent that lives in your terminal.</b>
</p>

<p align="center">
  <a href="https://github.com/Morningstar202604/nebula/actions/workflows/typecheck.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/Morningstar202604/nebula/typecheck.yml?branch=dev&style=flat-square&label=CI"></a>
  <a href="https://github.com/Morningstar202604/nebula/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/Morningstar202604/nebula?style=flat-square"></a>
  <a href="https://github.com/Morningstar202604/nebula/network"><img alt="Forks" src="https://img.shields.io/github/forks/Morningstar202604/nebula?style=flat-square"></a>
  <a href="https://github.com/Morningstar202604/nebula/issues"><img alt="Issues" src="https://img.shields.io/github/issues/Morningstar202604/nebula?style=flat-square"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/Morningstar202604/nebula?style=flat-square"></a>
  <img alt="Language" src="https://img.shields.io/github/languages/top/Morningstar202604/nebula?style=flat-square">
</p>

<p align="center">
  <a href="README.md"><b>English</b></a> ·
  <a href="README.zh.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.zht.md">繁體中文</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.pl.md">Polski</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

[![Nebula terminal UI](packages/web/src/assets/lander/screenshot.png)](https://github.com/Morningstar202604/nebula)

---

## What is Nebula?

Nebula is a fast, open source AI coding agent that runs natively in your terminal. Point it at any codebase and it reads, plans, writes, and refactors code — executing commands and iterating on failures until the job is done. You stay in the driver's seat: a fine-grained permission system asks before Nebula touches your shell, your files, or the network.

Nebula is built for real projects. It is TypeScript-first, runs fully on your machine, and is provider-agnostic — bring your own API key for Anthropic, OpenAI, Google, DeepSeek, SenseNova, or any OpenAI-compatible endpoint, and Nebula handles the rest.

## Why Nebula?

- **Terminal-native** — no IDE required; works with any editor and any workflow
- **Multi-surface** — a rich TUI, a web UI, a desktop app, and a headless API server
- **Agentic by design** — `build` and `plan` agents with tool use, plus subagents for deep searches
- **Permission-aware** — bash, file edits, and web access are gated behind clear prompts
- **Private by default** — everything runs locally; you choose the model and decide where your code goes
- **Blazing fast** — a Bun-native monorepo with a reactive SolidJS interface

## Features

- **Built-in agents** — `build` (full access) and `plan` (read-only exploration), switch anytime with `Tab`
- **Subagents** — `@general` handles complex searches and multi-step tasks
- **Model providers** — Anthropic, OpenAI, Google Gemini, DeepSeek, SenseNova, Groq, Mistral, xAI, Ollama, and any OpenAI-compatible endpoint
- **MCP support** — plug into the growing Model Context Protocol ecosystem
- **Session management** — resume, share, and replay past sessions
- **Server mode** — a headless HTTP API for scripting and remote control
- **Desktop app** — a native Electron wrapper for macOS, Windows, and Linux

## Installation

### One-liner

```bash
curl -fsSL https://raw.githubusercontent.com/Morningstar202604/nebula/dev/install | bash
```

### Build from source

```bash
git clone https://github.com/Morningstar202604/nebula.git
cd nebula
bun install
bun dev --help
```

Official packages for Homebrew, Scoop, and npm are on the way.

## Getting started

```bash
cd <your-project>
nebula
```

Nebula loads your codebase, then asks what you'd like to do. For example:

> Add a `/health` endpoint to the API server and a test for it.

Nebula plans the change, shows you the diff, and runs the tests — asking permission before it executes anything.

### Configure a model

```bash
export ANTHROPIC_API_KEY=sk-ant-...
nebula
```

Or add a provider to your config for SenseNova, DeepSeek, GLM, and more. See the [configuration docs](packages/web/src/content/docs/index.mdx).

## Agents

| Agent | Description |
| ----- | ----------- |
| `build` | Default, full-access agent for development work |
| `plan` | Read-only agent for analysis and code exploration — denies file edits by default, asks before running bash |

## Interfaces

| Interface | Description | Start with |
| --------- | ----------- | ---------- |
| TUI | Full-featured terminal UI | `nebula` |
| Web UI | Browser-based chat | `nebula web` |
| Desktop | Native Electron app | `nebula-desktop` |
| Server | Headless HTTP API | `nebula serve` |

## Architecture

Nebula is a Bun monorepo with strictly directed dependencies:

- `packages/nebula` — core business logic and HTTP server
- `packages/tui` — terminal UI (SolidJS + opentui)
- `packages/app` — shared web UI components
- `packages/desktop` — Electron desktop app
- `packages/sdk` — TypeScript SDK for building on Nebula
- `packages/plugin` — plugin and MCP system

## Documentation

Full documentation lives in [`packages/web/src/content/docs`](packages/web/src/content/docs), covering configuration, agents, providers, and troubleshooting.

## Contributing

Contributions are welcome! Start with [CONTRIBUTING.md](CONTRIBUTING.md), then:

- Open an issue or grab a [`good first issue`](https://github.com/Morningstar202604/nebula/labels/good%20first%20issue)
- Follow our conventional-commit PR standards
- Report vulnerabilities via [SECURITY.md](SECURITY.md)

## License

[MIT](LICENSE) © Nebula contributors
