import { describe, it, expect, beforeEach } from 'vitest';
import useAppStore from '../../src/store';
import { Task } from '../../src/types';

/**
 * 待ち時間タスクと phase2 配置ロジックのユニットテスト
 */

describe('待ち時間タスク配置ロジック', () => {
  beforeEach(() => {
    // ストアを初期化してクリーンな状態でテストを行う
    useAppStore.setState({
      layoutTasks: [],
      taskPool: [],
      error: null,
    });
  });

  it('待ち時間タスクの phase1 後に次タスクが配置され、phase2 は待ち時間終了後に配置される', () => {
    const waitTask: Task = {
      id: 'wait-task',
      name: '待ちタスク',
      duration1: 5,
      waitTime: { duration: 10 },
      duration2: 8,
      color: 'bg-blue-200',
      isPreset: false,
    };

    const simpleTask: Task = {
      id: 'simple-task',
      name: 'シンプルタスク',
      duration1: 4,
      color: 'bg-green-200',
      isPreset: false,
    };

    const { addTaskToLayout, placePhase2 } = useAppStore.getState();

    // 1. 待ちタスクを配置
    addTaskToLayout(waitTask);
    // 2. 待ちタスクの phase1 直後にシンプルタスクを配置
    addTaskToLayout(simpleTask);

    const stateAfterAdd = useAppStore.getState();
    const waitTaskLayout = stateAfterAdd.layoutTasks.find((t) => t.id === 'wait-task')!;
    const simpleTaskLayout = stateAfterAdd.layoutTasks.find((t) => t.id === 'simple-task')!;

    // phase1 の終了時刻は 0 + 5 = 5
    expect(waitTaskLayout.startTime).toBe(0);
    expect(simpleTaskLayout.startTime).toBe(5);
    // 待ち時間終了時刻は 5 + 10 = 15
    expect(waitTaskLayout.waitEndTime).toBe(15);

    // 3. phase2 を配置
    placePhase2('wait-task');
    const afterPhase2 = useAppStore.getState();
    const updatedWait = afterPhase2.layoutTasks.find((t) => t.id === 'wait-task')!;

    // phase2 が配置済み
    expect(updatedWait.phase2Placed).toBe(true);
    // phase2 の開始は待ち時間終了後 (15)
    expect(updatedWait.phase2StartTime).toBe(15);
    // 終了時刻は 15 + 8 = 23
    expect(updatedWait.endTime).toBe(23);
  });
});
