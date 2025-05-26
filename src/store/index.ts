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
const useAppStore = create<AppState>((set, get) => ({
  // 初期状態
  level: 1,
  availableTasks: [...presetTasks],
  taskPool: [],
  layoutTasks: [],
  showSideMenu: false,
  showingInterruption: false,
  error: null, // 最新エラーメッセージ

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
      // 既存タスクを考慮して開始時刻を決定
      // 1. phase2未配置の待ち時間タスクが存在する場合 → その待ち時間開始(phase1終了)以降に配置
      // 2. それ以外 → すべてのタスクの endTime 以降に配置

      const candidateTimes = state.layoutTasks.map((t) => {
        if (t.waitEndTime !== undefined && !t.phase2Placed) {
          return t.startTime + t.duration1; // 待ち時間開始時刻
        }
        return t.endTime; // 通常はタスク終了時刻
      });

      const startTime = candidateTimes.length > 0 ? Math.max(...candidateTimes) : 0;

      /* --------------------------------------------------
       * 待ち時間・phase2 対応ロジック
       * -------------------------------------------------- */
      const duration1 = taskToAdd.duration1;
      const waitDuration = taskToAdd.waitTime?.duration ?? 0;

      // 所要時間1の終了時刻
      const waitStartTime = startTime + duration1;
      // 待ち時間終了時刻（設定がある場合）
      const waitEndTime = waitDuration > 0 ? waitStartTime + waitDuration : undefined;
      // phase2 はまだ配置しない
      const phase2StartTime = undefined;
      // タスク全体の終了時刻 (phase2 未配置なので含めない)
      const endTime = startTime + duration1 + waitDuration;
      /* -------------------------------------------------- */

      // 条件一致は名前でも ID でも許容
      const isMatch = (v: string, target: string) =>
        v === target || v.includes(target) || target.includes(v);

      if (taskToAdd.condition) {
        const condMet = get().layoutTasks.some(
          (lt: LayoutTask) =>
            isMatch(lt.id, taskToAdd.condition!) || isMatch(lt.name, taskToAdd.condition!)
        );
        if (!condMet) {
          console.warn('条件未満で配置不可');
          return { error: '条件を満たしていないため配置できません💦' };
        }
      }

      // 新しいタスクの行インデックスを計算
      const rowIndex = state.layoutTasks.length;

      // 新しいLayoutTaskオブジェクトを作成
      const newLayoutTask: LayoutTask = {
        ...taskToAdd,
        startTime,
        endTime,
        rowIndex,
        waitEndTime,
        phase2StartTime,
        phase2Placed: false,
      };

      return {
        layoutTasks: [...state.layoutTasks, newLayoutTask],
      };
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

      // 解除開始時間
      const removalStart = targetTask.startTime;

      const removedTasks: LayoutTask[] = [];
      const keptTasks: LayoutTask[] = [];

      state.layoutTasks.forEach((t) => {
        if (t.startTime >= removalStart) {
          // まるごと解除
          removedTasks.push(t);
          return;
        }

        // phase2 が removalStart 以降なら phase2 をリセット
        if (
          t.phase2Placed &&
          t.phase2StartTime !== undefined &&
          t.phase2StartTime >= removalStart
        ) {
          const newEnd = t.waitEndTime ?? t.startTime + t.duration1;
          keptTasks.push({
            ...t,
            phase2Placed: false,
            phase2StartTime: undefined,
            endTime: newEnd,
          });
          return;
        }

        keptTasks.push(t);
      });

      // 行インデックスを詰め直す
      const updatedLayoutTasks = keptTasks.map((t, idx) => ({ ...t, rowIndex: idx }));

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

  // 待ち時間タスクの後半を配置
  placePhase2: (taskId: string) =>
    set((state) => {
      const targetIndex = state.layoutTasks.findIndex((t) => t.id === taskId);
      if (targetIndex === -1) return {};

      const target = state.layoutTasks[targetIndex];

      if (!target.duration2 || target.phase2Placed) return {};

      const lastTaskEnd = state.layoutTasks.reduce(
        (max, t) => (t.id === target.id ? max : Math.max(max, t.endTime)),
        0
      );

      // phase2 は待ち時間終了以降、かつ他タスク終了後に配置
      const phase2Start = Math.max(target.waitEndTime ?? target.startTime, lastTaskEnd);

      const updatedTarget: LayoutTask = {
        ...target,
        phase2Placed: true,
        phase2StartTime: phase2Start,
        startTime: target.startTime, // phase1 start 変わらず
        endTime: phase2Start + target.duration2,
      };

      // 他タスクは変更なし
      const newLayoutTasks = [...state.layoutTasks];
      newLayoutTasks[targetIndex] = updatedTarget;

      return { layoutTasks: newLayoutTasks };
    }),

  // エラー操作
  setError: (msg: string) => set({ error: msg }),
  clearError: () => set({ error: null }),
}));

export default useAppStore;
