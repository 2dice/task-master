import { describe, it, beforeEach, expect } from 'vitest';
import useAppStore from '../../src/store';
import { Task } from '../../src/types';

/**
 * addTaskToLayout の条件付き配置ロジックをテストする
 */

describe('条件付きタスクの配置ロジック (store)', () => {
  const baseState = useAppStore.getState();

  beforeEach(() => {
    // レイアウトとエラーを初期化
    useAppStore.setState({
      layoutTasks: [],
      error: null,
    });
  });

  /** 条件未達で失敗するケース */
  it('条件タスクが未配置のときは配置に失敗し error が設定される', () => {
    const taskB: Task = {
      id: 'task-b',
      name: '後続タスク',
      duration1: 5,
      color: 'bg-red-200',
      isPreset: false,
      condition: 'task-a', // 先に task-a が必要
    };

    const { addTaskToLayout } = useAppStore.getState();

    // 条件未達成状態で配置
    addTaskToLayout(taskB);

    const { layoutTasks, error } = useAppStore.getState();
    expect(layoutTasks.length).toBe(0);
    expect(error).toBeTruthy();
  });

  /** 条件達成で成功するケース */
  it('条件タスクが配置済みなら後続タスクも配置できる', () => {
    const taskA: Task = {
      id: 'task-a',
      name: '前提タスク',
      duration1: 4,
      color: 'bg-green-200',
      isPreset: false,
    };

    const taskB: Task = {
      id: 'task-b',
      name: '後続タスク',
      duration1: 5,
      color: 'bg-red-200',
      isPreset: false,
      condition: 'task-a', // 先に task-a が必要
    };

    const { addTaskToLayout, clearError } = useAppStore.getState();

    // まず前提タスクを配置
    addTaskToLayout(taskA);

    // 念のためエラー状態クリア
    clearError();

    // 後続タスクを配置
    addTaskToLayout(taskB);

    const { layoutTasks, error } = useAppStore.getState();
    expect(layoutTasks.length).toBe(2);
    expect(error).toBeNull();

    const tA = layoutTasks.find((t) => t.id === 'task-a')!;
    const tB = layoutTasks.find((t) => t.id === 'task-b')!;

    // tB は tA の終了後に開始しているか (時間計算単純化: tA start=0, duration1=4, so end=4)
    expect(tA.endTime).toBeLessThanOrEqual(tB.startTime);
  });
});
