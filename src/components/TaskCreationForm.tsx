import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppState } from '@/types';
import useAppStore from '@/store';
import { getRandomColor } from '@/lib/utils';

const TaskCreationForm = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(5);
  const addTask = useAppStore((state: AppState) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // 新しいタスクを作成
    addTask({
      id: `task-${Date.now()}`,
      name: name.trim(),
      duration1: duration,
      color: getRandomColor(),
      isPreset: false,
    });

    // フォームをリセット
    setName('');
    setDuration(5);

    console.log('新しいタスクを作成しました:', {
      name: name.trim(),
      duration1: duration,
    });
  };

  return (
    <div className="mt-4">
      <h3 className="font-medium text-sm mb-2 text-indigo-700">新しいタスクを作る</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
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
            所要時間 (分)
          </label>
          <input
            id="task-duration"
            type="number"
            value={duration}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setDuration(value >= 1 ? value : 1);
            }}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="mr-1 h-4 w-4" /> 追加
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskCreationForm;
