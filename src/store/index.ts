import { create } from 'zustand';
import { AppState, Task, LayoutTask } from '@/types';

// プリセットタスク一覧
const presetTasks: Task[] = [
  {
    id: 'preset-1',
    name: '宿題をする',
    duration1: 30,
    color: 'bg-blue-200',
    isPreset: true,
  },
  {
    id: 'preset-2',
    name: '歯みがき',
    duration1: 5,
    color: 'bg-green-200',
    isPreset: true,
  },
  {
    id: 'preset-3',
    name: '朝ごはん',
    duration1: 15,
    color: 'bg-yellow-200',
    isPreset: true,
  },
  {
    id: 'preset-4',
    name: '着替え',
    duration1: 10,
    color: 'bg-purple-200',
    isPreset: true,
  },
  {
    id: 'preset-5',
    name: 'かばん準備',
    duration1: 5,
    color: 'bg-pink-200',
    isPreset: true,
  },
];

// Zustandストアの作成
const useAppStore = create<AppState>((set) => ({
  // 初期状態
  level: 1,
  availableTasks: [...presetTasks],
  taskPool: [],
  layoutTasks: [],
  showSideMenu: false,
  showingInterruption: false,

  // アクション
  setLevel: (level) => set({ level }),

  toggleSideMenu: () =>
    set((state) => ({
      showSideMenu: !state.showSideMenu,
    })),

  addTask: (task: Task) =>
    set((state) => ({
      availableTasks: [...state.availableTasks, task],
    })),

  updateTask: (id: string, updates: Partial<Task>) =>
    set((state) => ({
      availableTasks: state.availableTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
      taskPool: state.taskPool.map((task) => (task.id === id ? { ...task, ...updates } : task)),
    })),

  deleteTask: (id: string) =>
    set((state) => ({
      availableTasks: state.availableTasks.filter((task) => task.id !== id),
      taskPool: state.taskPool.filter((task) => task.id !== id),
      layoutTasks: state.layoutTasks.filter((task) => task.id !== id),
    })),

  moveTaskToPool: (task: Task) =>
    set((state) => {
      // タスクのコピーを生成して一意のIDを割り当てる
      const copiedTask = {
        ...task,
        id: `pool-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      };

      return { taskPool: [...state.taskPool, copiedTask] };
    }),

  removeTaskFromPool: (id: string) =>
    set((state) => ({
      taskPool: state.taskPool.filter((task) => task.id !== id),
    })),

  addTaskToLayout: (taskToAdd: Task) =>
    set((state) => {
      // 最後に配置されたタスクを取得
      const lastLayoutTask =
        state.layoutTasks.length > 0 ? state.layoutTasks[state.layoutTasks.length - 1] : null;

      // 最後にタスクがあればその終了時刻、なければ0
      // TODO: 待ち時間タスク(duration2があるタスク)の場合、lastLayoutTask.phase2StartTimeも考慮する必要があるか確認
      const startTime = lastLayoutTask ? lastLayoutTask.endTime : 0;

      // 新しいタスクの終了時間を計算 (まずはduration1のみ考慮)
      const endTime = startTime + taskToAdd.duration1;

      // 新しいタスクの行インデックスを計算 (現在のタスク数がそのまま次の行インデックスになる)
      const rowIndex = state.layoutTasks.length;

      // 新しいLayoutTaskオブジェクトを作成
      const newLayoutTask: LayoutTask = {
        ...taskToAdd,
        startTime,
        endTime,
        rowIndex,
        // waitEndTime や phase2StartTime は今後のステップで対応
      };

      const newState = {
        layoutTasks: [...state.layoutTasks, newLayoutTask],
      };
      return newState;
    }),

  removeTaskFromLayout: (id: string) =>
    set((state) => ({
      layoutTasks: state.layoutTasks.filter((task) => task.id !== id),
    })),

  updateLayoutTask: (id: string, updates: Partial<Task>) =>
    set((state) => ({
      layoutTasks: state.layoutTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),

  // 新しいアクション：タイムラインからタスクを削除し、タスクプールに追加
  removeTaskFromLayoutAndAddToPool: (taskId: string) =>
    set((state) => {
      // 対象タスクを取得
      const targetTask = state.layoutTasks.find((t) => t.id === taskId);
      if (!targetTask) return state;

      // 対象タスク以降のタスクを一括解除
      const removedTasks = state.layoutTasks.filter((t) => t.rowIndex >= targetTask.rowIndex);

      // 残すタスク
      const remainingTasks = state.layoutTasks.filter((t) => t.rowIndex < targetTask.rowIndex);

      // rowIndex / startTime / endTime を詰め直す
      let currentStart = 0;
      const updatedLayoutTasks: LayoutTask[] = remainingTasks.map((t, idx) => {
        const newTask: LayoutTask = {
          ...t,
          rowIndex: idx,
          startTime: currentStart,
          endTime: currentStart + t.duration1,
        };
        currentStart = newTask.endTime;
        return newTask;
      });

      // プールへ戻すタスクを Task 型に変換し追加
      /* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
      const tasksForPool: Task[] = removedTasks.map(
        ({ startTime: _st, endTime: _et, rowIndex: _ri, ...rest }) => rest
      );
      /* eslint-enable @typescript-eslint/no-unused-vars, no-unused-vars */

      return {
        layoutTasks: updatedLayoutTasks,
        taskPool: [...state.taskPool, ...tasksForPool],
      };
    }),
}));

export default useAppStore;
