<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="packages/console/app/src/asset/logo-ornate-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="packages/console/app/src/asset/logo-ornate-light.svg">
    <img src="packages/console/app/src/asset/logo-ornate-light.svg" width="348" height="84" alt="Nebula">
  </picture>
</p>

<p align="center">
  <b>运行在终端里的开源 AI 编程助手。</b>
</p>

<p align="center">
  <a href="https://github.com/Morningstar202604/nebula/actions/workflows/typecheck.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/Morningstar202604/nebula/typecheck.yml?branch=main&style=flat-square&label=CI"></a>
  <a href="https://github.com/Morningstar202604/nebula/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/Morningstar202604/nebula?style=flat-square"></a>
  <a href="https://github.com/Morningstar202604/nebula/network"><img alt="Forks" src="https://img.shields.io/github/forks/Morningstar202604/nebula?style=flat-square"></a>
  <a href="https://github.com/Morningstar202604/nebula/issues"><img alt="Issues" src="https://img.shields.io/github/issues/Morningstar202604/nebula?style=flat-square"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/Morningstar202604/nebula?style=flat-square"></a>
  <img alt="Language" src="https://img.shields.io/github/languages/top/Morningstar202604/nebula?style=flat-square">
</p>

<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.zh.md"><b>简体中文</b></a> ·
  <a href="README.ja.md">日本語</a>
</p>

[![Nebula 终端界面](packages/web/src/assets/lander/screenshot.png)](https://github.com/Morningstar202604/nebula)

---

## Nebula 是什么？

Nebula 是一款快速、开源的 AI 编程助手，原生运行在你的终端里。把它指向任意代码库，它就能阅读、规划、编写和重构代码——执行命令、遇到失败自动迭代，直到任务完成。你始终掌握主动权：细粒度的权限系统会在 Nebula 触碰你的命令行、文件或网络之前先征求你的同意。

Nebula 为真实项目而生。它优先使用 TypeScript、完全在本地运行、并且与模型提供商解耦——自带 Anthropic、OpenAI、Google、DeepSeek、SenseNova 或任意兼容 OpenAI 协议的 API Key，其余交给 Nebula。

## 为什么选择 Nebula？

- **终端原生** — 无需 IDE，适配任何编辑器与工作流
- **多端覆盖** — 丰富的 TUI、Web 界面、桌面应用与无头 API 服务
- **天生智能体** — `build` 与 `plan` 两个内置智能体，配合子智能体深度搜索
- **权限可控** — bash、文件修改、网络访问都经过清晰的确认提示
- **默认私有** — 一切都在本地运行，模型由你选择，代码去向由你决定
- **速度极快** — 基于 Bun 的 monorepo，配合响应式的 SolidJS 界面

## 功能特性

- **内置智能体** — `build`（完全访问）与 `plan`（只读探索），随时用 `Tab` 切换
- **子智能体** — `@general` 处理复杂搜索与多步骤任务
- **模型提供商** — Anthropic、OpenAI、Google Gemini、DeepSeek、SenseNova、Groq、Mistral、xAI、Ollama 及任意兼容 OpenAI 协议的服务
- **MCP 支持** — 接入日益壮大的 Model Context Protocol 生态
- **会话管理** — 会话可恢复、可分享、可回放
- **服务模式** — 提供无头 HTTP API，便于脚本化与远程控制
- **桌面应用** — 面向 macOS、Windows、Linux 的原生 Electron 应用

## 安装

### 一行命令

```bash
curl -fsSL https://raw.githubusercontent.com/Morningstar202604/nebula/main/install | bash
```

### 源码构建

```bash
git clone https://github.com/Morningstar202604/nebula.git
cd nebula
bun install
bun dev --help
```

Homebrew、Scoop、npm 官方包正在路上。

## 快速开始

```bash
cd <你的项目>
nebula
```

Nebula 会加载你的代码库，然后询问你想做什么。例如：

> 给 API 服务器加一个 `/health` 接口，并补一个测试。

Nebula 会规划改动、展示 diff、运行测试——在真正执行之前先征求你的同意。

### 配置模型

```bash
export ANTHROPIC_API_KEY=sk-ant-...
nebula
```

或在配置中添加 SenseNova、DeepSeek、GLM 等提供商。详见[配置文档](packages/web/src/content/docs/index.mdx)。

## 智能体

| 智能体 | 说明 |
| ------ | ---- |
| `build` | 默认智能体，完全访问权限，用于开发工作 |
| `plan` | 只读智能体，用于分析与代码探索——默认拒绝文件修改，执行 bash 前先询问 |

## 界面

| 界面 | 说明 | 启动方式 |
| ---- | ---- | -------- |
| TUI | 功能完整的终端界面 | `nebula` |
| Web UI | 浏览器聊天界面 | `nebula web` |
| 桌面端 | 原生 Electron 应用 | `nebula-desktop` |
| 服务端 | 无头 HTTP API | `nebula serve` |

## 架构

Nebula 是一个依赖方向严格控制的 Bun monorepo：

- `packages/nebula` — 核心业务逻辑与 HTTP 服务
- `packages/tui` — 终端界面（SolidJS + opentui）
- `packages/app` — 共享 Web UI 组件
- `packages/desktop` — Electron 桌面应用
- `packages/sdk` — 用于二次开发的 TypeScript SDK
- `packages/plugin` — 插件与 MCP 系统

## 文档

完整文档位于 [`packages/web/src/content/docs`](packages/web/src/content/docs)，涵盖配置、智能体、提供商与故障排查。

## 参与贡献

欢迎贡献！先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，然后：

- 提交 issue，或认领 [`good first issue`](https://github.com/Morningstar202604/nebula/labels/good%20first%20issue)
- 遵循 conventional-commit PR 规范
- 通过 [SECURITY.md](SECURITY.md) 报告安全漏洞

## 许可证

[MIT](LICENSE) © Morningstar202604
