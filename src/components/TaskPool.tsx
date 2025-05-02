import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store';

const TaskPool = () => {
  const taskPool = useAppStore((state) => state.taskPool);
  const removeTaskFromPool = useAppStore((state) => state.removeTaskFromPool);

  const handleRemoveTask = (id: string) => {
    removeTaskFromPool(id);
    console.log('タスクをプールから削除しました:', id);
  };

  if (taskPool.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-indigo-400 font-medium">タスクをサイドメニューから追加してね♪</p>
      </div>
    );
  }

  return (
    <div className="h-full p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 overflow-y-auto">
      {taskPool.map((task) => (
        <div key={task.id} className="relative group">
          <div className={`${task.color} p-3 rounded-md shadow-sm h-full flex flex-col`}>
            <h3 className="font-medium text-sm text-gray-800 truncate">{task.name}</h3>
            <div className="mt-auto pt-1">
              <span className="text-xs text-gray-600">{task.duration1}分</span>
            </div>
          </div>
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-0 right-0 h-6 w-6 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => handleRemoveTask(task.id)}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TaskPool;
