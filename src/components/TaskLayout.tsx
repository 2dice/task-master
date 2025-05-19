import useAppStore from '@/store';
import Timeline from './Timeline';

const TaskLayout = () => {
  // レイアウトエリアに配置されたタスク一覧を取得
  const layoutTasksFromStore = useAppStore((state) => state.layoutTasks);

  return (
    <div className="h-full w-full border-2 border-dashed border-indigo-200 bg-white rounded-lg relative">
      {/* タスクがない場合 */}
      {layoutTasksFromStore.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <p className="text-indigo-400 font-medium">ここにタスクをドラッグして配置してね✨</p>
        </div>
      ) : (
        /* タスクの一覧を表示 */
        <div className="h-full w-full relative overflow-auto">
          <Timeline tasks={layoutTasksFromStore} />
        </div>
      )}
    </div>
  );
};

export default TaskLayout;
