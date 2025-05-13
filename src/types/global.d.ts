// グローバルWindow拡張の型定義
import { StoreApi } from 'zustand';
import { AppState } from '.';
import { Task } from '.';

/**
 * テストタスク作成関数の結果型
 */
interface CreateTestTaskResult {
  count: number;
  task: Task | null;
}

/**
 * タスク移動関数の結果型
 */
interface MoveTaskResult {
  success: boolean;
  message: string;
}

/**
 * タスク並び替え関数の結果型
 */
interface ReorderTasksResult {
  success: boolean;
  original: string[];
  reordered: string[];
}

/**
 * グローバルのWindow型を拡張して、AppStoreとGlobal関数を追加
 */
declare global {
  interface Window {
    /**
     * グローバルに公開されたZustandストア
     */
    AppStore?: StoreApi<AppState>;

    /**
     * AppStoreが利用可能かどうかのフラグ
     */
    APP_STORE_AVAILABLE?: boolean;

    /**
     * テスト用のタスク作成関数
     */
    createTestTask: (taskData: Partial<Task>) => CreateTestTaskResult;

    /**
     * テスト用のタスク移動関数
     */
    moveTaskToLayout: (taskIdOrName: string) => MoveTaskResult;

    /**
     * テスト用のタスク並び替え関数
     */
    reorderTasks: (originalOrder: string[], newOrder: string[]) => ReorderTasksResult;
  }
}

// d.tsファイルでは export {} が必要
export {};
