import { useAppStore } from '@/store';
import { Card, CardContent } from './ui/card';

const TaskLayout = () => {
  // レイアウトエリアに配置されたタスク一覧を取得
  const layoutTasks = useAppStore((state) => state.layoutTasks);

  return (
    <div className="h-full w-full border-2 border-dashed border-indigo-200 bg-white rounded-lg relative">
      {/* タスクがない場合 */}
      {layoutTasks.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <p className="text-indigo-400 font-medium">ここにタスクをドラッグして配置してね✨</p>
        </div>
      ) : (
        /* タスクの一覧を表示 */
        <div className="h-full p-4 relative overflow-auto">
          {/* 時間スケールの表示（後ほど実装） */}
          <div className="absolute top-0 left-0 w-full h-8 border-b border-gray-200 flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 text-xs text-gray-500 text-center border-r border-gray-200"
              >
                {i * 5}分
              </div>
            ))}
          </div>

          {/* タスク表示エリア */}
          <div className="mt-8 relative min-h-[calc(100%-2rem)]">
            {layoutTasks.map((task) => (
              <div
                key={task.id}
                className="absolute"
                style={{
                  left: `${(task.startTime / 60) * 100}%`,
                  width: `${((task.endTime - task.startTime) / 60) * 100}%`,
                  top: '0.5rem',
                }}
              >
                <Card className={`${task.color} border-0 shadow-md h-full`}>
                  <CardContent className="p-3 flex flex-col h-full">
                    <h3 className="font-medium text-sm text-gray-800 truncate">{task.name}</h3>
                    <div className="mt-auto pt-1">
                      <span className="text-xs text-gray-600">{task.duration1}分</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskLayout;
