import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useAppStore from '@/store';
import { Task } from '@/types';
import TaskEditModal from './TaskEditModal';

const TaskItem = ({ task, onEdit }: { task: Task; onEdit: (task: Task) => void }) => {
  const moveTaskToPool = useAppStore((state) => state.moveTaskToPool);

  const handleAddToPool = () => {
    moveTaskToPool(task);
    console.log('タスクをプールに追加しました:', task.name);
  };

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-white border border-gray-200 mb-2 group">
      <div
        className={`flex-grow py-1.5 px-3 rounded-md ${task.color} shadow-sm cursor-pointer`}
        onClick={() => onEdit(task)}
      >
        <h3 className="font-medium text-sm text-gray-800">{task.name}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-600">{task.duration1}分</span>
          {task.condition && (
            <span className="text-xs bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded">
              条件あり
            </span>
          )}
        </div>
      </div>
      <Button
        size="sm"
        variant="ghost"
        className="opacity-60 group-hover:opacity-100"
        onClick={handleAddToPool}
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
      <div className="pr-2">
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
