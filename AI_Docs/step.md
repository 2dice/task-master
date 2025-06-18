# 小学校3年生向けタスク管理ゲーム 実装計画

## ステップ概要

プロジェクトを以下の段階に分けて実装していきます。各ステップは独立した機能単位で、前のステップが完了してから次のステップに進みます。

| ステップ | 概要                       | 目標                                              |
| -------- | -------------------------- | ------------------------------------------------- |
| Step 1   | 開発環境構築               | Vite + React + TypeScript環境の構築、初期画面表示 |
| Step 2   | 基本レイアウト構築         | 4分割レイアウトの実装、基本UI                     |
| Step 3   | タスク状態管理             | Zustandによる状態管理、タスクデータモデル         |
| Step 4   | タスク操作機能             | タスク作成・表示・編集・削除機能                  |
| Step 5   | ドラッグ＆ドロップ基本実装 | Framer Motionによる基本D&D                        |
| Step 6   | タイムライン機能           | タスク配置・時間軸表示                            |
| Step 7   | 高度なタスク機能           | 条件・待ち時間機能                                |
| Step 8   | レベル機能                 | レベル別機能制限・割り込み                        |
| Step 9   | アニメーション強化         | GSAPによる派手なエフェクト                        |
| Step 10  | 保存機能                   | localStorageによるデータ保存                      |
| Step 11  | 仕上げ・デプロイ           | 最終調整・GitHub Pagesデプロイ                    |

## 詳細計画

### Step 1: 開発環境構築とGitHub Pages設定 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 4.  技術スタック
  - 5.  ディレクトリ構造
- `./AI_Docs/init.md`の下記項
  - GitHub Pagesデプロイに関する注意事項

**目標**: Vite + React + TypeScriptの開発環境を構築し、GitHub Pagesデプロイの設定を行う

**タスク**:

1. Viteでプロジェクト作成 (React + TypeScript + SWC)
2. TailwindCSSの導入
3. shadcn/uiの導入
4. ドラッグ&ドロップとアニメーションライブラリの導入
   - dnd-kit (Core, Sortable, Utilities)
   - Framer Motion
   - GSAP
5. ESLintとPrettierの設定
6. Playwrightのセットアップ
7. GitHub Pagesデプロイ用の設定
   - vite.config.tsの設定 (base: './', outDir: 'docs')
   - package.jsonのhomepage設定
8. 基本ページ表示とビルドテスト

**確認方法**:

- `npm run dev`でローカルサーバーが起動し、基本ページが表示される
- `npm run build`でdocsディレクトリにビルドファイルが生成される
- `npm run lint`でコードチェックが正常に動作する
- `npx playwright test`で基本テストが通過する
- GitHubにプッシュして数分後にリポジトリのGitHub Pages URLでアクセスできる

```bash
# 実行コマンド例
npm create vite@latest task-master -- --template react-swc-ts
cd task-master
npm install

# Tailwind CSSのセットアップ
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn/uiのセットアップ
npm install -D @types/node
npx shadcn-ui@latest init

# dnd-kitのインストール
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

# Framer MotionとGSAPのインストール
npm install framer-motion gsap

# 開発ツールのセットアップ
npm install -D eslint prettier eslint-plugin-react eslint-config-prettier
npm install -D @playwright/test
npx playwright install
```

### Step 2: 基本レイアウト構築 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 2.  UI/UX設計
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.1 タスク確認・作成画面詳細
  - 8.  操作性とエラーハンドリング
  - 9.  アクセシビリティ対応

**目標**: 4分割レイアウトの実装と各エリアの基本UIを構築

**タスク**:

1. 必要なshadcn/uiコンポーネントの追加 (Sheet, Select, Separatorなど)
2. 画面レイアウトの4分割実装
   - 上部: レベル設定エリア
   - 左側: タスク確認・作成エリア
   - 中央: タスクレイアウトエリア
   - 下部: タスクプールエリア
3. Sheetコンポーネントを使った左側エリアの開閉機能実装
4. Selectコンポーネントを用いたレベル選択機能の実装
5. 各エリアの基本的なスタイリング
6. レスポンシブデザインの実装
7. 各エリアのレイアウトとコンポーネントのPlaywrightテスト作成

**確認方法**:

- 画面が正しく4つのエリアに分割されている
- ハンバーガーメニューで左側エリアが開閉できる
- レベル選択ドロップダウンが機能する
- 異なる画面サイズでレイアウトが適切に調整される
- Playwrightでレイアウト構造とサイズをテスト

```jsx
// コンポーネント構造例
<div className="app-container">
  <header className="app-header">
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="レベルを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">レベル 1</SelectItem>
        <SelectItem value="2">レベル 2</SelectItem>
        {/* 他のレベルアイテム */}
      </SelectContent>
    </Select>
  </header>
  <Sheet open={showSideMenu} onOpenChange={setShowSideMenu}>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="hamburger-button">
        <HamburgerMenuIcon />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <TaskCreator />
    </SheetContent>
  </Sheet>
  <main className="task-layout">
    <TimelineGrid />
  </main>
  <footer className="task-pool">
    <TaskPoolContainer />
  </footer>
</div>
```

### Step 3: タスク状態管理 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 3.  データモデル設計
  - 4.  技術スタック
  - 5.  ディレクトリ構造

**目標**: Zustandによるタスク状態管理の実装とデータモデルの定義

**タスク**:

1. Zustandのインストールと基本ストア設定
2. タスクのデータモデル（型）定義
3. タスク管理のアクション実装（作成・更新・削除）
4. アプリケーション状態の管理実装
5. プリセットタスクの定義

**確認方法**:

- コンソールでストアの状態変化を確認
- Playwrightでストアの初期状態とアクション実行後の状態をテスト
- タスク操作が正しくストアに反映されることを確認

```typescript
// Zustandストア例
import { create } from 'zustand';
import { Task, AppState } from '../types';

const useAppStore = create<AppState>((set) => ({
  level: 1,
  availableTasks: [
    /* プリセットタスク */
  ],
  taskPool: [],
  layoutTasks: [],
  showSideMenu: true,
  showingInterruption: false,

  setLevel: (level) => set({ level }),
  toggleSideMenu: () => set((state) => ({ showSideMenu: !state.showSideMenu })),

  addTask: (task: Task) =>
    set((state) => ({
      availableTasks: [...state.availableTasks, task],
    })),

  // 他のアクション...
}));
```

### Step 4: タスク操作機能 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - タスク作成・管理フロー
  - タスクプール操作フロー
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.1 タスク確認・作成画面詳細
  - 6.2 タスクプール詳細
  - 6.4.1 タスク作成例
  - 9.  アクセシビリティ対応

**目標**: タスクの作成・表示・編集・削除機能の実装

**タスク**:

1. タスク作成フォームの実装
2. タスクリスト表示コンポーネントの実装
3. タスク編集機能の実装
4. タスク削除機能の実装
5. タスクプールへの追加機能の実装

**確認方法**:

- 新しいタスクを作成できることを確認
- タスクの編集・削除が正常に動作することを確認
- タスクプールにタスクを追加できることを確認
- Playwrightでタスク操作をテスト

```jsx
// タスク作成フォーム例
const TaskCreationForm = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(5);
  const addTask = useAppStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    addTask({
      id: `task-${Date.now()}`,
      name,
      duration1: duration,
      color: getRandomColor(),
      isPreset: false,
    });

    setName('');
    setDuration(5);
  };

  return <form onSubmit={handleSubmit}>{/* フォーム入力要素 */}</form>;
};
```

### Step 5: ドラッグ＆ドロップ基本実装 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - タスクカード
  - タスク作成・管理フロー
  - タスクプール操作フロー
  - タスクレイアウト操作フロー
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.1 タスク確認・作成画面詳細
  - 6.2 タスクプール詳細
  - 6.3 タスクレイアウト詳細
  - 9.  アクセシビリティ対応
  - 10.1 Framer Motionによるアニメーション

**目標**: dnd-kitを使用した高機能なドラッグ&ドロップ機能の実装

**タスク**:

1. dnd-kitの基本設定
2. DndContextとドラッグ可能コンポーネントの実装
3. タスクプール・タスクレイアウトのドロップ領域実装
4. タスクのソート・順序変更機能の実装
5. ドラッグ中のビジュアルフィードバック・条件チェック機能

**確認方法**:

- タスクをドラッグできることを確認
- タスク確認・作成画面とタスクプール、タスクプールとタスクレイアウト間でドラッグ&ドロップできることを確認
- ドラッグ中の視覚的フィードバックが適切に表示されることを確認
- タスクの順序変更が正しく動作することを確認
- タスクの条件チェックが正しく機能することを確認
- Playwrightでドラッグ&ドロップ操作をテスト

```jsx
// dnd-kitを使ったドラッグ可能なタスクコンポーネント例
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent } from './ui/card';

const DraggableTask = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: { task },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: CSS.Translate.toString(transform),
        touchAction: 'none',
      }}
    >
      <Card
        className="task-card"
        style={{
          backgroundColor: task.color,
          cursor: 'grab',
        }}
      >
        <CardContent className="p-3">
          <h3 className="text-sm font-medium">{task.name}</h3>
          <p className="text-xs">{task.duration1}分</p>
        </CardContent>
      </Card>
    </div>
  );
};
```

### Step 6: タイムライン機能 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 2.3 コンポーネントデザイン
  - タスクレイアウト操作フロー
  - 待ち時間対応フロー
  - 待ち時間のあるタスクの配置
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.3 タスクレイアウト詳細

**目標**: タスクレイアウトのタイムライン表示と時間軸管理の実装

**タスク**:

1. タイムラインのグリッド表示実装
2. 時間軸の目盛り表示実装
3. タスクの時間位置に基づく配置実装
4. 横スクロール機能の実装
5. タスク結合ロジックの実装

**確認方法**:

- タイムラインが正しく表示され、時間目盛りが見えることを確認
- タスクがタイムライン上に正しく配置されることを確認
- 横スクロールが機能することを確認
- タスクが正しく結合されることを確認
- Playwrightでタイムライン機能をテスト

```jsx
// タイムラインコンポーネント例
const Timeline = () => {
  const layoutTasks = useAppStore((state) => state.layoutTasks);

  return (
    <div className="timeline-container">
      <div className="time-scale">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="time-marker">
            <span>{i}</span>
          </div>
        ))}
      </div>

      <div className="tasks-container">
        {layoutTasks.map((task) => (
          <div
            key={task.id}
            className="timeline-task"
            style={{
              left: `${task.startTime * 10}px`,
              width: `${(task.endTime - task.startTime) * 10}px`,
              backgroundColor: task.color,
            }}
          >
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Step 7: 高度なタスク機能 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 2.2 レベル設定と各レベルでのゲーム要素
  - 2.3 コンポーネントデザイン
  - タスクレイアウト操作フロー
  - 待ち時間対応フロー
  - 3.  データモデル設計
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.4 機能要件の具体例

**目標**: 条件・待ち時間など高度なタスク機能の実装

**タスク**:

1. 条件付きタスクの実装（前のタスクが完了していないと配置できない）
2. 待ち時間のあるタスクの実装
3. 待ち時間後のタスク（所要時間2）の配置機能実装
4. タスク配置の条件チェックロジック実装
5. タスク配置エラー時のフィードバック実装

**確認方法**:

- 条件付きタスクが正しく機能することを確認
- 待ち時間のあるタスクが正しく表示されることを確認
- 条件が満たされない場合のエラーフィードバックを確認
- Playwrightで各タスクタイプの動作をテスト

```jsx
// 条件チェックロジック例
const checkTaskConditions = (task, layoutTasks) => {
  // 条件付きタスクの場合
  if (task.condition) {
    const conditionMet = layoutTasks.some((t) => t.id === task.condition);
    if (!conditionMet) {
      return { valid: false, message: '前提条件のタスクが完了していません' };
    }
  }

  return { valid: true };
};
```

### Step 8: レベル機能 (done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 2.2 レベル設定と各レベルでのゲーム要素
  - 2.3 コンポーネントデザイン
  - タスクレイアウト操作フロー
  - 3.2 アプリケーション状態
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.1 タスク確認・作成画面詳細
  - 6.4.2 UI状態例

**目標**: レベル別機能制限

**タスク**:

1. レベルごとの機能制限実装（使用可能なタスクタイプの制限）
2. レベル1〜3の条件分岐実装
3. レベル変更時の状態(グレーアウト)リセット機能実装

**確認方法**:

- 各レベルで適切なタスクタイプのみが使用可能なことを確認
- レベル変更時に状態(グレーアウト)がリセットされることを確認
- Playwrightで各レベルの機能をテスト

```typescript
// レベルによるタスクフィルタリング例
const filterTasksByLevel = (tasks, level) => {
  return tasks.filter((task) => {
    if (level < 2 && task.condition) return false;
    if (level < 3 && task.waitTime) return false;
    return true;
  });
};
```

### Step 9: アニメーション強化(done)

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - タスクレイアウト操作フロー
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.3 タスクレイアウト詳細
  - 8.2 ユーザビリティ
  - 8.3 エラーハンドリング
  - 10. アニメーション設計

**目標**: GSAPを使用した派手なアニメーション効果の実装

**タスク**:

1. GSAPの設定
2. タスク結合時の派手なエフェクト実装
3. タスク配置エラー時のアニメーション実装
4. 時間軸のピンチ操作によるズーム機能実装
5. 待ち時間タスクの特殊表示エフェクト実装
6. タスク解除時の分解エフェクト実装
7. レベル変更時のトランジションエフェクト実装

**確認方法**:

- タスク結合時に派手なエフェクトが表示されることを確認
- ズーム機能が正しく動作することを確認
- アニメーションが滑らかで視覚的に分かりやすいことを確認
- Playwrightでアニメーション発火後の状態をテスト

```typescript
// GSAPを使用したタスク結合エフェクト例
import { gsap } from 'gsap';

const playTaskCombineEffect = (element: HTMLElement): void => {
  // パーティクルエフェクト作成
  const particles: HTMLDivElement[] = Array.from({ length: 20 }).map(() => {
    const particle = document.createElement('div');
    particle.className = 'combine-particle';
    document.body.appendChild(particle);
    return particle;
  });

  // 結合アニメーション
  gsap.to(element, {
    scale: 1.2,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  // パーティクルアニメーション
  particles.forEach((particle) => {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    gsap.set(particle, { x, y, opacity: 1 });
    gsap.to(particle, {
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      opacity: 0,
      duration: 0.6,
      onComplete: () => document.body.removeChild(particle),
    });
  });
};

// タスク解除時の分解エフェクト例
const playTaskDissolveEffect = (element: HTMLElement): void => {
  const fragments: HTMLDivElement[] = [];
  const rect = element.getBoundingClientRect();
  const fragmentSize = 10;
  const rows = Math.ceil(rect.height / fragmentSize);
  const cols = Math.ceil(rect.width / fragmentSize);

  // 要素を小さなフラグメントに分割
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const fragment = document.createElement('div');
      fragment.className = 'task-fragment';
      fragment.style.width = `${fragmentSize}px`;
      fragment.style.height = `${fragmentSize}px`;
      fragment.style.position = 'absolute';
      fragment.style.top = `${rect.top + i * fragmentSize}px`;
      fragment.style.left = `${rect.left + j * fragmentSize}px`;
      fragment.style.backgroundColor = window.getComputedStyle(element).backgroundColor;
      fragment.style.zIndex = '1000';
      document.body.appendChild(fragment);
      fragments.push(fragment);
    }
  }

  // 元の要素を非表示
  gsap.set(element, { opacity: 0 });

  // フラグメントのアニメーション
  fragments.forEach((fragment) => {
    gsap.to(fragment, {
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 150,
      opacity: 0,
      rotation: Math.random() * 360,
      delay: Math.random() * 0.3,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => document.body.removeChild(fragment),
    });
  });
};
```

### Step 10: 保存機能

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 3.  データモデル設計
  - 4.  技術スタック
  - 5.  ディレクトリ構造
  - 6.4 機能要件の具体例
  - 7.  保存機能設計

**目標**: localStorageを使用した進捗保存機能の実装

**タスク**:

1. ローカルストレージ保存ロジックの実装
2. 自動保存トリガーの設定
3. 保存データの読み込み機能実装
4. 保存データのリセット機能実装
5. 保存エラー処理の実装
6. navigator.storage.persist()設定

**確認方法**:

- アプリの状態が正しく保存されることを確認
- ページをリロードしても状態が維持されることを確認
- リセット機能が正しく動作することを確認
- Playwrightでデータ保存と読み込みをテスト

```typescript
// ローカルストレージ保存ロジック例
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify({
      level: state.level,
      availableTasks: state.availableTasks.filter((t) => !t.isPreset),
      taskPool: state.taskPool,
      layoutTasks: state.layoutTasks,
    });
    localStorage.setItem('taskGameState', serializedState);
  } catch (err) {
    console.error('保存エラー:', err);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('taskGameState');
    if (!serializedState) return undefined;

    const savedState = JSON.parse(serializedState);
    return {
      ...savedState,
      availableTasks: [
        ...presetTasks, // プリセットタスクを追加
        ...savedState.availableTasks,
      ],
    };
  } catch (err) {
    console.error('読み込みエラー:', err);
    return undefined;
  }
};
```

### Step 11: 仕上げと最終チェック

**参照が必要な設計情報(view_fileコマンド等で取得)**:

- `./AI_Docs/design.md`の下記項(行数範囲はdesign_toc.mdを参照)
  - 小学校3年生向けタスク管理ゲーム 設計書

**目標**: アプリケーションの最終調整と品質チェック

**タスク**:

1. 全体的なUIの最終調整
2. パフォーマンス最適化
3. アクセシビリティの確認と改善
4. コードのリファクタリングと最終整理
5. 完全なエンドツーエンドテストの実行

**確認方法**:

- アプリケーション全体が正しく動作することを確認
- レスポンシブ対応が適切であることを確認
- Lighthouse/Axeでパフォーマンスとアクセシビリティをテスト
- Playwrightで全機能のエンドツーエンドテストを実行
- 本番環境と同等のテスト環境で最終チェック
