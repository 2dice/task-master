import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useAppStore from '@/store';

// 所要時間のプリセット（分）
const DURATION_PRESETS = [1, 3, 5, 10, 15, 20, 30, 45, 60, 90, 120];

// タスクカラーのプリセット - tailwindのクラス名
const COLOR_PRESETS = [
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

const TaskCreator = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(5);
  const [condition, setCondition] = useState(''); // 依存タスクID
  const [waitDuration, setWaitDuration] = useState(0); // 待ち時間(分)
  const [duration2, setDuration2] = useState(0); // 所要時間2
  const addTask = useAppStore((state) => state.addTask);
  const availableTasks = useAppStore((state) => state.availableTasks);

  const availableTaskNames = Array.from(new Set(availableTasks.map((t) => t.name)));

  // 使用済みの色を避けて新しい色を選択
  const getNextColor = (): string => {
    // 現在使用されている色の出現回数をカウント
    const colorUsageCount: Record<string, number> = {};

    availableTasks.forEach((task) => {
      if (colorUsageCount[task.color]) {
        colorUsageCount[task.color]++;
      } else {
        colorUsageCount[task.color] = 1;
      }
    });

    // 最も使用回数の少ない色を見つける
    let leastUsedColor = COLOR_PRESETS[0];
    let minUsage = Infinity;

    COLOR_PRESETS.forEach((color) => {
      const usageCount = colorUsageCount[color] || 0;
      if (usageCount < minUsage) {
        minUsage = usageCount;
        leastUsedColor = color;
      }
    });

    return leastUsedColor;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // 新しいタスクを作成
    addTask({
      id: `task-${Date.now()}`,
      name: name.trim(),
      duration1: duration,
      color: getNextColor(),
      isPreset: false,
      ...(condition.trim() && { condition: condition.trim() }),
      ...(waitDuration > 0 && { waitTime: { duration: waitDuration } }),
      ...(duration2 > 0 && { duration2 }),
    });

    // フォームをリセット
    setName('');
    setDuration(5);
    setCondition('');
    setWaitDuration(0);
    setDuration2(0);
    setIsFormOpen(false); // 作成後にフォームを閉じる
    // スクロールトップへ
    const listEl = document.getElementById('task-list-scroll');
    listEl?.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('新しいタスクを作成しました:', {
      name: name.trim(),
      duration1: duration,
    });
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-sm text-indigo-700">新しいタスクを作る</h3>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={toggleForm}>
          {isFormOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </Button>
      </div>

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div>
            <label htmlFor="task-name" className="block text-xs text-gray-600 mb-1">
              タスク名
            </label>
            <input
              id="task-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="例: 宿題をする"
              required
            />
          </div>

          <div>
            <label htmlFor="task-duration" className="block text-xs text-gray-600 mb-1">
              所要時間
            </label>
            <select
              id="task-duration"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {DURATION_PRESETS.map((value) => (
                <option key={value} value={value}>
                  {value}分
                </option>
              ))}
            </select>
          </div>

          {/* 条件タスク選択 */}
          <div>
            <label htmlFor="task-condition" className="block text-xs text-gray-600 mb-1">
              前提タスク (オプション)
            </label>
            <select
              id="task-condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">なし</option>
              {availableTaskNames.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* 待ち時間 */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="task-wait" className="block text-xs text-gray-600 mb-1">
                待ち時間 (分)
              </label>
              <input
                id="task-wait"
                type="number"
                min="0"
                value={waitDuration}
                onChange={(e) => setWaitDuration(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="task-duration2" className="block text-xs text-gray-600 mb-1">
                所要時間2 (分)
              </label>
              <input
                id="task-duration2"
                type="number"
                min="0"
                value={duration2}
                onChange={(e) => setDuration2(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="mr-1 h-4 w-4" /> 追加
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskCreator;
