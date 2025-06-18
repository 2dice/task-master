// tests/unit/store.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import useAppStore from '../../src/store'; // デフォルトインポートに変更
import { AppState } from '../../src/types'; // AppStateをインポート

// AppStateからアクション関連のプロパティを除いた型を定義
// これにより、状態リセット時にデータプロパティのみを正確に扱える
type AppStateData = Omit<
  AppState,
  | 'setLevel'
  | 'setIsTransitioning'
  | 'toggleSideMenu'
  | 'addTask'
  | 'updateTask'
  | 'deleteTask'
  | 'moveTaskToPool'
  | 'removeTaskFromPool'
  | 'addTaskToLayout'
  | 'removeTaskFromLayout'
  | 'updateLayoutTask'
  | 'removeTaskFromLayoutAndAddToPool'
  | 'placePhase2'
  | 'clearError'
>;

// Zustandストアの初期状態を定義するヘルパー関数
// AppStateData型に準拠したオブジェクトを返す
const getInitialResetState = (): AppStateData => ({
  level: 1, // デフォルトレベル
  availableTasks: [], // 初期タスクリストは空
  taskPool: [],
  layoutTasks: [],
  showSideMenu: false,
  error: null, // error プロパティを初期化
  isTransitioning: false,
});

describe('AppStore Zustand Store', () => {
  beforeEach(() => {
    // 各テストの前にストアの状態をgetInitialResetStateで定義されたクリーンな状態にリセット
    // 第2引数にtrueを指定することで、状態を完全に置き換える
    useAppStore.setState(getInitialResetState());
  });

  it('setLevel should update level and set isTransitioning to true', () => {
    console.log('[Test] Running: setLevel should update level and set isTransitioning to true');
    const currentStateForSetLevel = useAppStore.getState();
    const { setLevel } = currentStateForSetLevel;

    // 初期状態の確認 (beforeEachで設定されたもの)
    expect(useAppStore.getState().level).toBe(1);
    expect(useAppStore.getState().isTransitioning).toBe(false);

    setLevel(2);

    const newState = useAppStore.getState();
    expect(newState.level).toBe(2);
    expect(newState.isTransitioning).toBe(true);
  });

  it('setIsTransitioning should update isTransitioning state', () => {
    console.log('[Test] Running: setIsTransitioning should update isTransitioning state');
    const currentStateForSetIsTransitioning = useAppStore.getState();
    const { setIsTransitioning } = currentStateForSetIsTransitioning;

    // まず isTransitioning を true に設定してみる (テストのため)
    useAppStore.setState({ isTransitioning: true });
    expect(useAppStore.getState().isTransitioning).toBe(true);

    setIsTransitioning(false);

    const newState = useAppStore.getState();
    expect(newState.isTransitioning).toBe(false);

    // 再度 true に設定
    setIsTransitioning(true);

    const newerState = useAppStore.getState();
    expect(newerState.isTransitioning).toBe(true);
  });

  it('should correctly reflect isTransitioning state after level change and subsequent reset', () => {
    console.log(
      '[Test] Running: should correctly reflect isTransitioning state after level change and subsequent reset'
    );
    const currentStateForCombined = useAppStore.getState();
    const { setLevel, setIsTransitioning } = currentStateForCombined;

    // 初期状態の確認 (beforeEachで設定されたもの)
    expect(useAppStore.getState().isTransitioning).toBe(false);

    // 1. レベル変更アクションを呼び出す
    setLevel(3);
    const stateAfterLevelChange = useAppStore.getState();
    expect(stateAfterLevelChange.isTransitioning).toBe(true);
    expect(stateAfterLevelChange.level).toBe(3);

    // 2. isTransitioning を false にするアクションを呼び出す (App.tsx の useEffect の挙動を模倣)
    setIsTransitioning(false);
    const stateAfterTransitionReset = useAppStore.getState();
    expect(stateAfterTransitionReset.isTransitioning).toBe(false);
  });
});
