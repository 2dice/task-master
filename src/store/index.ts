import { create } from 'zustand';
import { AppState, Task } from '@/types';

// ランダムな色を生成する関数
const getRandomColor = (): string => {
  const colors = [
    'bg-red-200',
    'bg-pink-200',
    'bg-purple-200',
    'bg-indigo-200',
    'bg-blue-200',
    'bg-cyan-200',
    'bg-teal-200',
    'bg-green-200',
    'bg-lime-200',
    'bg-yellow-200',
    'bg-amber-200',
    'bg-orange-200',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

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

  addTaskToLayout: (task) =>
    set((state) => ({
      layoutTasks: [...state.layoutTasks, task],
    })),

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
}));

export { useAppStore, getRandomColor };
