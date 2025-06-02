# TODO

- [x] ESLintエラーを解消し、npm run lint をパスする  
       完了条件: `npm run lint` でエラー0・警告0 (必要であれば許容コメント付)
- [x] TypeScript型チェックをパスする  
       完了条件: `tsc -p tsconfig.json --noEmit` がエラー0
- [x] design.md ディレクトリ構成に `src/lib/level.ts` 追記  
       完了条件: design.md のディレクトリ構造図にレベル判定ユーティリティを反映しコミット
- [ ] Playwright開発サーバー自動起動設定  
       完了条件: `npx playwright test` で開発サーバーが自動起動 or 既存サーバーを再利用してテストが通過
