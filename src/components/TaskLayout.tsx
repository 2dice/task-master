import useAppStore from '@/store';
import Timeline from './Timeline';
import { useEffect } from 'react';

const TaskLayout = () => {
  // レイアウトエリアに配置されたタスク一覧を取得
  const layoutTasksFromStore = useAppStore((state) => state.layoutTasks);
  const error = useAppStore((state) => state.error);
  const clearError = useAppStore((state) => state.clearError);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => clearError(), 3000);
    return () => clearTimeout(timer);
  }, [error, clearError]);

  return (
    <div className="h-full w-full border-2 border-dashed border-indigo-200 bg-white rounded-lg relative overflow-auto">
      {error && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1 rounded shadow z-50">
          {error}
        </div>
      )}
      {/* タスクがない場合 */}
      {layoutTasksFromStore.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <p className="text-indigo-400 font-medium">ここにタスクをドラッグして配置してね✨</p>
        </div>
      ) : (
        /* タスクの一覧を表示 */
        <div className="h-full w-full relative">
          <Timeline tasks={layoutTasksFromStore} />
        </div>
      )}
    </div>
  );
};

export default TaskLayout;
