# Turborepo Monorepo Template

![skill icons](https://skillicons.dev/icons?i=docker,bun,nextjs,react,ts)

Bun + Turborepo + Next.js 15 + React 19を使用したモノレポテンプレートです。
[Biome](https://biomejs.dev/)と[Lefthook](https://lefthook.dev/)による開発環境も含まれています。

## 技術スタック

- **Runtime**: Bun v1.2.16
- **Monorepo**: Turborepo v2.5.4
- **Frontend**: Next.js 15 + React 19
- **Language**: TypeScript 5.8.2
- **Linter/Formatter**: Biome v2.0.0
- **Git Hooks**: Lefthook v1.11.14

## プロジェクト構成

```
├── apps/
│   └── web/                 # Next.js 15 アプリケーション
├── packages/
│   ├── components/          # 共有Reactコンポーネント
│   ├── api/                 # 共有APIユーティリティ
│   └── typescript-config/   # 共有TypeScript設定
└── .devcontainer/           # Dev Container設定
```

## 起動方法

### 1. 環境ファイルの準備
```bash
cp .devcontainer/.env.example .devcontainer/.env
```

### 2. Dev Container での開発
1. VSCodeに[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)拡張機能をインストール
2. `Ctrl+Shift+P` → `Dev Containers: Rebuild and Reopen in Container` を実行

### 3. 開発サーバーの起動
```bash
# 全ワークスペースの開発サーバーを起動
bun run dev

# 個別に起動する場合
cd apps/web && bun dev
```

## 開発コマンド

```bash
# 依存関係のインストール
bun install

# 開発サーバーの起動（全ワークスペース）
bun run dev

# ビルド（全ワークスペース）
bun run build

# リント実行
bun run lint

# コードフォーマット
bun run format

# 型チェック
bun run check-types
```

## Git Hooks

Lefthookによりコミット前に以下が自動実行されます：
- `bun run lint` - Biomeによる静的解析
- `bun run build` - 全ワークスペースのビルド確認

エラーがある場合はコミットがブロックされます。
