# @metyatech/workspace-launch-ui

Docusaurus 用の React フックとボタンコンポーネントです。ドキュメント内から VS Code の `workspace-launch` テンプレートを安全に呼び出すためのユーティリティを提供します。

## インストール

```bash
npm install @metyatech/workspace-launch-ui
```

Docusaurus プロジェクトで利用する場合は、併せて以下のピア依存関係が解決されていることを確認してください。

- `react`
- `@docusaurus/router`
- `@docusaurus/useBaseUrl`
- `@docusaurus/Link`
- `@metyatech/workspace-template-generator`

## 使い方

```tsx
import WorkspaceLaunchButton, {
  useWorkspaceLaunchUrl,
} from '@metyatech/workspace-launch-ui';

const structure = [
  // ...テンプレート構造
];

const href = useWorkspaceLaunchUrl({
  workspaceId: 'my-exercise',
  structure,
});

<WorkspaceLaunchButton workspaceId="my-exercise" structure={structure} />;
```

`useWorkspaceLaunchUrl` はページ URL を元に一意なワークスペース ID を生成し、テンプレートの競合を防ぎます。

## Development

This project uses ESLint, Prettier, and Vitest.

### Available Scripts

- `npm run build`: Build the project with TypeScript.
- `npm run lint`: Run ESLint to check for code style issues.
- `npm run format`: Run Prettier to format the code.
- `npm run test`: Run automated tests with Vitest.
- `npm run verify`: Run build, lint, and test to verify the project.

### Standards

This project follows the rules defined in [AGENTS.md](./AGENTS.md).
