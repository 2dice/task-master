import useAppStore from '@/store';
import Timeline from './Timeline';
import { useEffect, useRef } from 'react';
import { playTaskErrorEffect, playTaskCombineEffect } from '@/animations/gsap/taskEffects';

const TaskLayout = () => {
  // レイアウトエリアに配置されたタスク一覧を取得
  const layoutTasksFromStore = useAppStore((state) => state.layoutTasks);
  const error = useAppStore((state) => state.error);
  const clearError = useAppStore((state) => state.clearError);

  // コンテナとエラー表示の参照
  const containerRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  // エラー表示の管理とアニメーション
  useEffect(() => {
    // エラー要素が存在し、エラーがある場合はエフェクトを適用
    if (errorRef.current && error) {
      // エラーエフェクトを適用
      playTaskErrorEffect(errorRef.current);

      // 一定時間後にエラーをクリア
      const timer = setTimeout(() => clearError(), 3000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  // タスク追加時の結合エフェクト
  useEffect(() => {
    // タスクが増えた時のみエフェクトを表示
    if (layoutTasksFromStore.length > 0) {
      // 最後に追加されたタスクのエフェクトを表示
      const lastTask = layoutTasksFromStore[layoutTasksFromStore.length - 1];
      if (lastTask) {
        // Timelineと同じ方法で直接document.querySelectorを使ってタスク要素を取得
        // containerRefのスコープに制限せず、ドキュメント全体から探す
        const taskElement = document.querySelector(`[data-testid="task-item-${lastTask.id}"]`);

        if (taskElement) {
          // タスク要素自体にエフェクトを適用
          playTaskCombineEffect(taskElement as HTMLElement);
        } else {
          // タスク要素が見つからない場合は、タイムラインにエフェクトを適用
          const timelineElement = document.querySelector('.relative.bg-slate-50');
          if (timelineElement) {
            // MINUTE_WIDTH = 30, TASK_HEIGHT = 28, ROW_MARGIN = 4, INITIAL_TOP_OFFSET = 5, TIME_MARKER_AREA_HEIGHT = 30
            const MINUTE_WIDTH = 30;
            const TASK_HEIGHT = 28;
            const ROW_MARGIN = 4;
            const INITIAL_TOP_OFFSET = 5;
            const TIME_MARKER_AREA_HEIGHT = 30;

            // 使用しない変数は削除

            // タスクの中心位置を計算
            const taskCenterX =
              lastTask.startTime * MINUTE_WIDTH + (lastTask.duration1 * MINUTE_WIDTH) / 2;
            const taskCenterY =
              TIME_MARKER_AREA_HEIGHT +
              (lastTask.rowIndex * (TASK_HEIGHT + ROW_MARGIN) + INITIAL_TOP_OFFSET) +
              TASK_HEIGHT / 2;

            // エフェクトを表示 - 要素の実際の座標と相対位置を組み合わせる
            const x = taskCenterX;
            const y = taskCenterY;

            playTaskCombineEffect(timelineElement as HTMLElement, {
              x,
              y,
              color: lastTask.color.includes('bg-')
                ? lastTask.color.replace('bg-', '')
                : 'blue-200',
            });
          }
        }
      }
    }
  }, [layoutTasksFromStore]); // タスク配列の変化を監視

  return (
    <div
      ref={containerRef}
      className="h-full w-full border-2 border-dashed border-indigo-200 bg-white rounded-lg relative overflow-auto"
    >
      {error && (
        <div
          ref={errorRef}
          className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1 rounded shadow z-50"
        >
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
