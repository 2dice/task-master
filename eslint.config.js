import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist', 'docs'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: reactPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': 'warn',
    },
  },
  // shadcn/ui コンポーネント用の特別ルール
  {
    files: ['**/components/ui/**/*.{ts,tsx}'],
    rules: {
      // shadcn/uiコンポーネントでは複数のエクスポートを許可
      'react-refresh/only-export-components': 'off',
    },
  },
  // 一時的にコンポーネント、インターフェース定義、テストファイルの未使用パラメータの警告を抑制
  // 注意: 開発を進める中で徐々に警告を有効化して品質を向上させることを推奨
  // この対処は暫定的なものであり、将来的には適切な変数利用・クリーンアップが必要
  {
    files: ['**/types/**/*.{ts,tsx}', '**/components/**/*.{ts,tsx}', '**/tests/**/*.{ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }
);
