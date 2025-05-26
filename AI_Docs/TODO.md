# TODO

## Step 7: 高度なタスク機能

- [ ] 条件付きタスク配置機能の実装
  - 前提条件検証ロジック `checkTaskConditions` の統合
- [x] 待ち時間タスク実装
  - `duration1`,`waitTime`,`duration2`を持つタスクのレイアウト対応
- [x] 時間経過後の phase2 タスク配置機能実装
  - `phase2StartTime` 利用ロジック追加
- [x] タスク配置条件チェックロジック実装
  - condition, waitTime タスク配置時の検証強化
- [x] 配置失敗時のフィードバック表示実装
  - エラーメッセージ表示 UI 実装

## 確認方法

- 条件付きタスクが正しく機能するか目視確認 (npm run dev)
- 待ち時間タスクのレイアウト表示確認 (npm run dev)
- Playwright テストの追加と実行 (npm run test)
