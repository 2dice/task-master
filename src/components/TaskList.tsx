import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useAppStore from '@/store';
import { Task } from '@/types';
import TaskEditModal from './TaskEditModal';
import { isTaskAllowedForLevel, getLevelRestrictionMessage } from '@/lib/level';

const TaskItem = ({ task, onEdit }: { task: Task; onEdit: (task: Task) => void }) => {
  const moveTaskToPool = useAppStore((state) => state.moveTaskToPool);
  const level = useAppStore((state) => state.level);

  const disabled = !isTaskAllowedForLevel(task, level);
  const tooltip = getLevelRestrictionMessage(task, level);

  const handleAddToPool = () => {
    if (disabled) return;
    moveTaskToPool(task);
    console.log('タスクをプールに追加しました:', task.name);
  };

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-white border border-gray-200 mb-2 group">
      <div
        className={`flex-grow py-1.5 px-3 rounded-md ${task.color} shadow-sm ${
          disabled ? 'opacity-50 grayscale' : 'cursor-pointer'
        }`}
        onClick={() => onEdit(task)}
        title={tooltip}
      >
        <h3 className="font-medium text-sm text-gray-800">{task.name}</h3>
        <div className="flex flex-wrap justify-between items-center mt-1 gap-1 text-xs">
          <span className="text-gray-600">{task.duration1}分</span>
          {task.waitTime && task.waitTime.duration > 0 && (
            <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
              待{task.waitTime.duration}分
            </span>
          )}
          {task.duration2 && task.duration2 > 0 && (
            <span className="bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
              ②{task.duration2}分
            </span>
          )}
          {task.condition && (
            <span className="bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded">
              条件: {task.condition}
            </span>
          )}
        </div>
      </div>
      <Button
        size="sm"
        variant="ghost"
        className={`opacity-60 group-hover:opacity-100 ${disabled && 'cursor-not-allowed'}`}
        onClick={handleAddToPool}
        disabled={disabled}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

const TaskList = () => {
  const availableTasks = useAppStore((state) => state.availableTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  return (
    <div className="h-full">
      <h3 className="font-medium text-sm mb-2 text-indigo-700">利用可能なタスク</h3>
      <div id="task-list-scroll" className="pr-2 overflow-y-auto max-h-[60vh]">
        {availableTasks.length > 0 ? (
          availableTasks.map((task) => (
            <TaskItem key={task.id} task={task} onEdit={setEditingTask} />
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center py-4">
            タスクがありません。新しいタスクを作成してください。
          </p>
        )}
      </div>

      {editingTask && <TaskEditModal task={editingTask} onClose={() => setEditingTask(null)} />}
    </div>
  );
};

export default TaskList;
