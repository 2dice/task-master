import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useAppStore from '@/store';
import { Task } from '@/types';

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

interface TaskEditModalProps {
  task: Task | null;
  onClose: () => void;
}

const TaskEditModal = ({ task, onClose }: TaskEditModalProps) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(5);
  const [color, setColor] = useState('');
  const updateTask = useAppStore((state) => state.updateTask);
  const deleteTask = useAppStore((state) => state.deleteTask);

  // タスクが変更されたら状態を更新
  useEffect(() => {
    if (task) {
      setName(task.name);
      setDuration(task.duration1);
      setColor(task.color);
    }
  }, [task]);

  // モーダル外をクリックしたら閉じる
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task || !name.trim()) return;

    // タスクを更新
    updateTask(task.id, {
      name: name.trim(),
      duration1: duration,
      color: color,
    });

    console.log('タスクを更新しました:', {
      id: task.id,
      name: name.trim(),
      duration1: duration,
    });

    onClose();
  };

  // タスク削除処理
  const handleDelete = () => {
    if (!task) return;

    if (window.confirm(`「${task.name}」を削除してもよろしいですか？`)) {
      deleteTask(task.id);
      console.log('タスクを削除しました:', task.id);
      onClose();
    }
  };

  if (!task) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-[90%] max-w-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">タスクを編集</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="edit-task-name" className="block text-sm text-gray-600 mb-1">
              タスク名
            </label>
            <input
              id="edit-task-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="edit-task-duration" className="block text-sm text-gray-600 mb-1">
              所要時間
            </label>
            <select
              id="edit-task-duration"
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

          <div>
            <label className="block text-sm text-gray-600 mb-1">カラー</label>
            <div className="grid grid-cols-6 gap-2">
              {COLOR_PRESETS.map((colorOption) => (
                <div
                  key={colorOption}
                  className={`h-6 rounded cursor-pointer ${colorOption} ${color === colorOption ? 'ring-2 ring-indigo-600' : ''}`}
                  onClick={() => setColor(colorOption)}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <Button type="button" variant="destructive" onClick={handleDelete}>
              削除
            </Button>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              保存
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEditModal;
