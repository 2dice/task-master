# Step 6: タイムライン機能 TODO

- [x] **1. タイムラインコンポーネント作成と時間軸表示**
  - 詳細: 1分ごとの区切り線、経過時間を表示。
  - 完了条件:
    - [x] `Timeline.tsx` でタイムラインの目盛りが正しく表示される。
    - [x] 不要なスクロールバーが表示されない。
    - [x] コメントスタイルをフォーマルかつ簡潔に修正済み。
    - [x] タスク表示ズレを修正済み (ユーザー確認済み)。
- [x] **2. Zustandストア (`layoutTasks`) とタイムラインの連携**
  - 詳細: `TaskLayout.tsx` で、Zustandストアから取得した `layoutTasks` を `Timeline` コンポーネントの `tasks` プロップに渡すように修正する。
  - 完了条件:
    - [x] タスクプールからタスクレイアウトエリアにドラッグ＆ドロップされたタスクが、タイムライン上に表示される。
    - [x] 表示されるタスクは、`startTime` と `duration` (または `endTime`) に基づいて正しい時間位置と幅で表示される。
- [x] **3. タイムライン上のタスク操作**
  - 詳細: タイムラインに配置されたタスクの操作（主に解除）に関する機能を実装する。
  - サブタスク:
    - [x] **配置ロジック (ガントチャート形式)**: ドロップされたタスクを新しい行に配置する。各タスクは1行を占有し、次のタスクは次の行の、前のタスクの終了時刻と同じ横位置から開始する。
    - [x] **解除ロジック**: 配置されたタスクをタップすると解除メニューを表示し、タスクプールに戻す機能を実装する。
      - [x] タップしたタイムライン上のタスクに解除メニュー（例: [解除ボタン]やアイコン）が表示されるようにする。
      - [x] 解除操作で、選択したタスクがタイムライン (`layoutTasks`) から削除され、タスクプール (`taskPool`) に戻る処理を実装する。
      - [x] (発展) タイムライン上で連続していると見なせる後続タスクがある場合、それらも一緒に解除するロジックを検討・実装する。（この「連続」の定義は別途検討）
  - 完了条件:
    - [x] タイムライン上のタスクをタップすることで解除操作ができ、タスクがタスクプールに戻る。
    - [x] (発展) 連続タスクの一括解除が意図通りに動作する。
- [x] **4. タスクの色設定**
  - 詳細: タイムライン上のタスクを `task.color` に基づいて色付けする。
  - 完了条件:
    - [x] タイムライン上のタスクが、それぞれの `task.color` プロパティに応じた色で表示される。
- [x] **5. タイムラインの横スクロール機能**
  - 詳細: タイムラインコンテナがコンテンツ幅を超える場合に、水平スクロールを可能にする。
  - 完了条件:
    - [x] タイムラインが画面幅を超える場合に横スクロールできること。
- [x] **6. タイムライン表示のPlaywrightテスト作成**
  - 詳細: タイムラインの基本的な表示、ストア連携、タスク結合、色設定、横スクロール機能に関するテスト。
  - 完了条件:
    - [x] プレイライト E2E テスト `tests/e2e/timeline.spec.ts` を追加。
    - [x] テストがすべてパスすること。
- [x] **7. Step6 完了確認**
  - 完了条件:
    - [x] 開発サーバーでユーザーがタイムライン機能の全ての動作（ストア連携、色表示、スクロール）を確認し、問題がないこと。
    - [x] 不要なデバッグコード（`dummyTasks` など）が削除されていること。
