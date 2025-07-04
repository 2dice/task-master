import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useAppStore from '@/store';
import { DroppableArea, SortableTask, SortableTaskPool } from './drag';
import { Card, CardContent } from '@/components/ui/card';
import { isTaskAllowedForLevel, getLevelRestrictionMessage } from '@/lib/level';

const TaskPool = () => {
  const taskPool = useAppStore((state) => state.taskPool);
  const removeTaskFromPool = useAppStore((state) => state.removeTaskFromPool);
  const level = useAppStore((state) => state.level);

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
              <Card
                className={`${task.color} border-0 shadow-sm ${
                  !isTaskAllowedForLevel(task, level) && 'opacity-50 grayscale'
                }`}
                title={getLevelRestrictionMessage(task, level)}
              >
                <CardContent className="p-3 flex flex-col">
                  <h3 className="font-medium text-sm text-gray-800 truncate">{task.name}</h3>
                  <div className="mt-auto pt-1 flex flex-wrap gap-1">
                    <span className="text-xs text-gray-600">{task.duration1}分</span>
                    {task.waitTime?.duration && task.waitTime.duration > 0 && (
                      <span className="text-[10px] bg-indigo-100 text-indigo-800 px-1 py-0.5 rounded">
                        待:{task.waitTime.duration}
                      </span>
                    )}
                    {task.duration2 && task.duration2 > 0 && (
                      <span className="text-[10px] bg-purple-100 text-purple-800 px-1 py-0.5 rounded">
                        後:{task.duration2}
                      </span>
                    )}
                    {task.condition && (
                      <span className="text-[10px] bg-orange-100 text-orange-800 px-1 py-0.5 rounded">
                        条:{task.condition}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Button
                variant="destructive"
                size="icon"
                className={`absolute top-0 right-0 h-6 w-6 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 ${
                  !isTaskAllowedForLevel(task, level) && 'cursor-not-allowed'
                }`}
                onClick={() => handleRemoveTask(task.id)}
                disabled={!isTaskAllowedForLevel(task, level)}
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
