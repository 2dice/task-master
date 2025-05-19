import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useAppStore from '@/store';
import { DroppableArea, SortableTask, SortableTaskPool } from './drag';
import { Card, CardContent } from '@/components/ui/card';

const TaskPool = () => {
  const taskPool = useAppStore((state) => state.taskPool);
  const removeTaskFromPool = useAppStore((state) => state.removeTaskFromPool);

  const handleRemoveTask = (id: string) => {
    removeTaskFromPool(id);
    console.log('タスクをプールから削除しました:', id);
  };

  // タスクプール内での並べ替え機能はApp.tsxのDndContextWrapperで処理

  if (taskPool.length === 0) {
    return (
      <DroppableArea id="task-pool" className="h-full">
        <div className="h-full flex items-center justify-center">
          <p className="text-indigo-400 font-medium">タスクをサイドメニューから追加してね♪</p>
        </div>
      </DroppableArea>
    );
  }

  return (
    <SortableTaskPool tasks={taskPool} droppableId="task-pool" className="h-full">
      <div className="h-full p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 overflow-y-auto auto-rows-min">
        {taskPool.map((task) => (
          <SortableTask key={task.id} task={task}>
            <div className="relative group">
              <Card className={`${task.color} border-0 shadow-sm`}>
                <CardContent className="p-3 flex flex-col">
                  <h3 className="font-medium text-sm text-gray-800 truncate">{task.name}</h3>
                  <div className="mt-auto pt-1">
                    <span className="text-xs text-gray-600">{task.duration1}分</span>
                  </div>
                </CardContent>
              </Card>
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-0 right-0 h-6 w-6 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                onClick={() => handleRemoveTask(task.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </SortableTask>
        ))}
      </div>
    </SortableTaskPool>
  );
};

export default TaskPool;
