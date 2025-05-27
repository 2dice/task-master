/**
 * タスクオブジェクト
 * アプリケーションで扱うタスクのデータ構造
 */
export interface Task {
  id: string; // タスクの一意識別子
  name: string; // タスク名
  duration1: number; // 所要時間1（分）
  waitTime?: {
    // 待ち時間（任意）
    duration: number; // 待ち時間（分）
    timeRange?: {
      // 待ち時間の範囲設定
      min: number; // 最小待ち時間（分）
      max: number; // 最大待ち時間（分）
    };
  };
  duration2?: number; // 所要時間2（分）- 待ち時間後
  condition?: string; // 条件となるタスクID（任意）
  request?: string; // 依頼内容（任意）
  color: string; // タスクカードの色
  isPreset: boolean; // プリセットタスクかどうか
}

/**
 * レイアウト配置済みタスク
 * タイムラインに配置されたタスクの情報
 */
export interface LayoutTask extends Task {
  startTime: number; // 開始時間（分）
  endTime: number; // 終了時間（分）
  rowIndex: number; // 何行目のタスクか (0から始まる)
  waitEndTime?: number; // 待ち時間終了時間（分）
  phase2StartTime?: number; // 所要時間2の開始時間（分）
  phase2Placed?: boolean; // 所要時間2が配置済みかどうか
}

/**
 * アプリケーション状態
 * アプリ全体の状態を管理する
 */
export interface AppState {
  level: 1 | 2 | 3 | 4; // 現在のレベル
  availableTasks: Task[]; // 使用可能なタスク一覧
  taskPool: Task[]; // タスクプール内のタスク
  layoutTasks: LayoutTask[]; // レイアウト配置済みタスク
  showSideMenu: boolean; // サイドメニュー表示状態
  error: string | null; // 最新エラーメッセージ

  // アクション
  setLevel: (_level: 1 | 2 | 3 | 4) => void;
  toggleSideMenu: () => void;
  addTask: (_task: Task) => void;
  updateTask: (_id: string, _updates: Partial<Task>) => void;
  deleteTask: (_id: string) => void;
  moveTaskToPool: (_task: Task) => void;
  removeTaskFromPool: (_id: string) => void;
  addTaskToLayout: (_task: Task) => void; // LayoutTaskからTaskへ変更
  removeTaskFromLayout: (_id: string) => void;
  updateLayoutTask: (_id: string, _updates: Partial<LayoutTask>) => void;
  removeTaskFromLayoutAndAddToPool: (_taskId: string) => void; // 追加
  placePhase2: (_taskId: string) => void; // waitタスク後半配置
  clearError: () => void; // エラークリア
}
