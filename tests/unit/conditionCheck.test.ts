import { describe, expect, it } from 'vitest';
import { Task, LayoutTask } from '../../src/types';

/**
 * タスクの条件チェック機能をユニットテストするためのファイル
 */

// App.tsxで使用されている条件チェック関数を再現
const checkTaskCondition = (task: Task, layoutTasks: LayoutTask[]) => {
  // 条件がない場合は常に有効
  if (!task.condition) {
    return { valid: true, message: '' };
  }

  // 条件のタスクIDを取得
  const conditionTaskId = task.condition;

  // レイアウトにある条件タスクを探す（ID完全一致またはID部分一致）
  const conditionTask = layoutTasks.find(
    (layoutTask) =>
      layoutTask.id === conditionTaskId ||
      layoutTask.id.includes(conditionTaskId) ||
      conditionTaskId.includes(layoutTask.id)
  );

  // 条件タスクが見つからない場合
  if (!conditionTask) {
    return {
      valid: false,
      message: `このタスクはまだ配置できないよ！先に${task.condition}を配置してね！`,
    };
  }

  // 条件タスクが見つかった場合
  return { valid: true, message: '' };
};

describe('タスク条件チェック機能', () => {
  // 条件なしタスクのテスト
  it('条件のないタスクは常に有効である', () => {
    const task: Task = {
      id: 'task1',
      name: '条件なしタスク',
      duration1: 10,
      color: 'bg-blue-200',
      isPreset: false,
    };

    const layoutTasks: LayoutTask[] = [];

    const result = checkTaskCondition(task, layoutTasks);
    expect(result.valid).toBe(true);
    expect(result.message).toBe('');
  });

  // 条件ありタスクのテスト（条件未達成）
  it('条件ありタスクは、条件が満たされていない場合は無効と判定される', () => {
    const task: Task = {
      id: 'brush-teeth-task',
      name: '歯みがき',
      duration1: 5,
      condition: 'breakfast-task', // 朝ごはんタスクが条件
      color: 'bg-green-200',
      isPreset: false,
    };

    // 条件タスクが存在しないレイアウト
    const layoutTasks: LayoutTask[] = [
      {
        id: 'another-task',
        name: '別のタスク',
        duration1: 15,
        color: 'bg-red-200',
        isPreset: false,
        startTime: 0,
        endTime: 15,
      },
    ];

    const result = checkTaskCondition(task, layoutTasks);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('このタスクはまだ配置できないよ');
    expect(result.message).toContain('breakfast-task');
  });

  // 条件ありタスクのテスト（条件達成）
  it('条件ありタスクは、条件が満たされている場合は有効と判定される', () => {
    const task: Task = {
      id: 'brush-teeth-task',
      name: '歯みがき',
      duration1: 5,
      condition: 'breakfast-task', // 朝ごはんタスクが条件
      color: 'bg-green-200',
      isPreset: false,
    };

    // 条件タスクが存在するレイアウト
    const layoutTasks: LayoutTask[] = [
      {
        id: 'breakfast-task',
        name: '朝ごはん',
        duration1: 15,
        color: 'bg-yellow-200',
        isPreset: false,
        startTime: 0,
        endTime: 15,
      },
    ];

    const result = checkTaskCondition(task, layoutTasks);
    expect(result.valid).toBe(true);
    expect(result.message).toBe('');
  });

  // 部分一致IDでの条件チェックテスト
  it('部分的に一致するIDでも条件が満たされたと判定される', () => {
    const task: Task = {
      id: 'tooth-brushing',
      name: '歯みがき',
      duration1: 5,
      condition: 'breakfast', // IDの一部だけ指定
      color: 'bg-green-200',
      isPreset: false,
    };

    // 条件タスクのIDが部分的に一致
    const layoutTasks: LayoutTask[] = [
      {
        id: 'morning-breakfast-routine',
        name: '朝ごはん',
        duration1: 15,
        color: 'bg-yellow-200',
        isPreset: false,
        startTime: 0,
        endTime: 15,
      },
    ];

    const result = checkTaskCondition(task, layoutTasks);
    expect(result.valid).toBe(true);
    expect(result.message).toBe('');
  });
});
