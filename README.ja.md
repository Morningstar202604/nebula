<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="packages/console/app/src/asset/logo-ornate-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="packages/console/app/src/asset/logo-ornate-light.svg">
    <img src="packages/console/app/src/asset/logo-ornate-light.svg" width="348" height="84" alt="Nebula">
  </picture>
</p>

<p align="center">
  <b>ターミナルで動く、オープンソースの AI コーディングエージェント。</b>
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
  <a href="README.md">English</a> ·
  <a href="README.zh.md">简体中文</a> ·
  <a href="README.ja.md"><b>日本語</b></a> ·
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

[![Nebula ターミナル UI](packages/web/src/assets/lander/screenshot.png)](https://github.com/Morningstar202604/nebula)

---

## Nebula とは

Nebula は、ターミナル上でネイティブに動作する、高速でオープンソースな AI コーディングエージェントです。任意のコードベースを指定すると、コードの読み取り・計画・作成・リファクタリングを行い、コマンドを実行して失敗を繰り返しながらタスク完了まで自動で進めます。常に主導権はあなたにあります。細かい権限システムが、シェル・ファイル・ネットワークに触れる前に必ず確認を求めます。

Nebula は実際のプロジェクトのために作られています。TypeScript ファーストで、完全にローカルで動作し、プロバイダーに依存しません。Anthropic、OpenAI、Google、DeepSeek、SenseNova、その他 OpenAI 互換エンドポイントの API キーを持ち込めば、あとは Nebula が処理します。

## Nebula を選ぶ理由

- **ターミナルネイティブ** — IDE 不要。あらゆるエディタ・ワークフローと共存
- **マルチサーフェス** — 高機能 TUI、Web UI、デスクトップアプリ、ヘッドレス API サーバー
- **エージェント設計** — `build` と `plan` のエージェント、深い検索のためのサブエージェント
- **権限を制御** — bash・ファイル編集・Web アクセスを明確な確認で制御
- **プライバシー優先** — すべてローカルで実行。モデルとコードの行き先はあなたが選択
- **圧倒的な速さ** — Bun ネイティブの monorepo とリアクティブな SolidJS インターフェース

## 主な機能

- **内蔵エージェント** — `build`（フルアクセス）と `plan`（読み取り専用）、`Tab` でいつでも切替
- **サブエージェント** — `@general` が複雑な検索・多段階タスクを処理
- **モデルプロバイダー** — Anthropic、OpenAI、Google Gemini、DeepSeek、SenseNova、Groq、Mistral、xAI、Ollama、および OpenAI 互換エンドポイント
- **MCP 対応** — 拡大する Model Context Protocol エコシステムに接続
- **セッション管理** — セッションの再開・共有・リプレイが可能
- **サーバーモード** — スクリプト化とリモート制御のためのヘッドレス HTTP API
- **デスクトップアプリ** — macOS / Windows / Linux 向けネイティブ Electron アプリ

## インストール

### ワンライナー

```bash
curl -fsSL https://raw.githubusercontent.com/Morningstar202604/nebula/dev/install | bash
```

### ソースからビルド

```bash
git clone https://github.com/Morningstar202604/nebula.git
cd nebula
bun install
bun dev --help
```

Homebrew・Scoop・npm の公式パッケージは準備中です。

## クイックスタート

```bash
cd <あなたのプロジェクト>
nebula
```

Nebula がコードベースを読み込み、何をしたいか尋ねます。例:

> API サーバーに `/health` エンドポイントとテストを追加して。

Nebula は変更を計画し、diff を表示し、テストを実行します。実行前に必ず許可を求めます。

### モデルの設定

```bash
export ANTHROPIC_API_KEY=sk-ant-...
nebula
```

または設定に SenseNova、DeepSeek、GLM などのプロバイダーを追加できます。詳しくは[設定ドキュメント](packages/web/src/content/docs/index.mdx)をご覧ください。

## エージェント

| エージェント | 説明 |
| ------------ | ---- |
| `build` | デフォルト。フルアクセスで開発作業を行う |
| `plan` | 読み取り専用。分析とコード探索向け。ファイル編集はデフォルトで拒否、bash 実行前には確認 |

## インターフェース

| インターフェース | 説明 | 起動方法 |
| ---------------- | ---- | -------- |
| TUI | フル機能のターミナル UI | `nebula` |
| Web UI | ブラウザでのチャット | `nebula web` |
| デスクトップ | ネイティブ Electron アプリ | `nebula-desktop` |
| サーバー | ヘッドレス HTTP API | `nebula serve` |

## アーキテクチャ

Nebula は依存方向を厳密に管理した Bun monorepo です:

- `packages/nebula` — コアのビジネスロジックと HTTP サーバー
- `packages/tui` — ターミナル UI（SolidJS + opentui）
- `packages/app` — 共有 Web UI コンポーネント
- `packages/desktop` — Electron デスクトップアプリ
- `packages/sdk` — 二次開発用 TypeScript SDK
- `packages/plugin` — プラグインと MCP システム

## ドキュメント

完全なドキュメントは [`packages/web/src/content/docs`](packages/web/src/content/docs) にあります。設定・エージェント・プロバイダー・トラブルシューティングを網羅しています。

## コントリビュート

コントリビューション大歓迎です！まず [CONTRIBUTING.md](CONTRIBUTING.md) をお読みください:

- イシューを立てるか、[`good first issue`](https://github.com/Morningstar202604/nebula/labels/good%20first%20issue) に取り組む
- conventional-commit 形式の PR 規約に従う
- 脆弱性は [SECURITY.md](SECURITY.md) で報告

## ライセンス

[MIT](LICENSE) © Nebula contributors
