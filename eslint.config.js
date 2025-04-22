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
  }
);
