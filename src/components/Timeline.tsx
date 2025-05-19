import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import useAppStore from '@/store';
import { AppState } from '@/types'; // AppStateをインポート

// タスクの型定義
export interface Task {
  id: string;
  name: string;
  startTime: number; // タイムライン開始からの分数
  duration1: number; // 分単位の期間
  rowIndex: number; // タスクの行番号
  color: string;
}

interface TimelineProps {
  tasks: Task[];
}

const MINUTE_WIDTH = 30; // 1分あたりのピクセル幅（例: 30px）
const TASK_HEIGHT = 28; // px (paddingやborderを考慮して少し小さめに)
const ROW_MARGIN = 4; // px
const INITIAL_TOP_OFFSET = 5; // px
const TIME_MARKER_AREA_HEIGHT = 30; // 時間マーカー部分の高さ（仮）

const Timeline: React.FC<TimelineProps> = ({ tasks }) => {
  console.log('Timeline tasks:', JSON.stringify(tasks, null, 2)); // ★デバッグ用のログ追加

  // タスク配置に基づく横幅を計算
  const maxEndMinute = tasks.reduce((max, t) => Math.max(max, t.startTime + t.duration1), 0);
  // 少し余白を設け、最低でも30分幅を確保
  const totalMinutes = Math.max(maxEndMinute + 5, 30);

  // 時間マーカーの生成
  const timeMarkers = Array.from({ length: totalMinutes + 1 }).map((_, i) => (
    <div
      key={`time-marker-${i}`}
      className="absolute top-0 h-full flex flex-col items-center"
      style={{ left: `${i * MINUTE_WIDTH}px`, zIndex: 0 }} // マーカーがタスクの背面にくるように
    >
      <span
        className="text-xs text-gray-500 select-none"
        style={{ marginLeft: i === 0 ? '0' : '-0.75em' }}
      >
        {i}
      </span>
      <div
        className="bg-gray-300"
        style={{
          width: '1px',
          height: '100%', // コンテナの高さに追従
          marginTop: '2px',
        }}
      />
    </div>
  ));

  // コンテナの高さを動的に計算
  const timelineContainerHeight = Math.max(
    200, // 最低高さ
    tasks.length * (TASK_HEIGHT + ROW_MARGIN) + INITIAL_TOP_OFFSET + TIME_MARKER_AREA_HEIGHT + 20 // タスク行数に基づく高さ + マーカーエリア + 余白
  );

  const [taskToCancel, setTaskToCancel] = useState<Task | null>(null);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);

  const removeTaskFromLayoutAndAddToPool = useAppStore(
    (state: AppState) => state.removeTaskFromLayoutAndAddToPool
  );

  const handleTaskClick = (task: Task) => {
    setTaskToCancel(task);
    setIsCancelDialogOpen(true);
  };

  const handleCancelConfirm = () => {
    if (taskToCancel) {
      removeTaskFromLayoutAndAddToPool(taskToCancel.id); // ストアのアクションを呼び出す
      // console.log('Cancelling task:', taskToCancel.id);
      // TODO: ストアにタスク解除アクションを実装し、ここで呼び出す -> 実装済みなのでこのTODOは削除
    }
    setIsCancelDialogOpen(false);
    setTaskToCancel(null);
  };

  const handleCancelDialogClose = () => {
    setIsCancelDialogOpen(false);
    setTaskToCancel(null);
  };

  return (
    <div
      className="relative bg-slate-50 overflow-x-auto"
      style={{
        width: `${totalMinutes * MINUTE_WIDTH + MINUTE_WIDTH}px`,
        height: `${timelineContainerHeight}px`,
        minHeight: '200px',
        overflowY: 'visible',
      }}
      data-testid="timeline-container"
    >
      {/* 時間マーカーの表示エリア */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ height: `${TIME_MARKER_AREA_HEIGHT}px`, zIndex: 1 }}
      >
        {timeMarkers}
      </div>

      {/* タスクの表示エリア */}
      <div
        className="absolute w-full"
        style={{
          top: `${TIME_MARKER_AREA_HEIGHT}px`,
          height: `${timelineContainerHeight - TIME_MARKER_AREA_HEIGHT}px`,
        }}
      >
        {tasks.map((task) => {
          const taskStyle: React.CSSProperties = {
            position: 'absolute',
            left: `${task.startTime * MINUTE_WIDTH}px`,
            width: `${task.duration1 * MINUTE_WIDTH}px`,
            top: `${task.rowIndex * (TASK_HEIGHT + ROW_MARGIN) + INITIAL_TOP_OFFSET}px`,
            height: `${TASK_HEIGHT}px`,
            borderRadius: '0.375rem',
            padding: '0.25rem',
            border: '1px solid #D1D5DB',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            boxSizing: 'border-box',
            overflow: 'hidden',
            zIndex: 2,
            cursor: 'pointer',
          };
          return (
            <div
              key={task.id}
              style={taskStyle}
              className={`${task.color}`}
              data-testid={`task-item-${task.id}`}
              onClick={() => handleTaskClick(task)}
            >
              <div className="text-xs truncate select-none">{task.name}</div>
            </div>
          );
        })}
      </div>

      {taskToCancel && (
        <AlertDialog open={isCancelDialogOpen} onOpenChange={setIsCancelDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>タスクの解除</AlertDialogTitle>
              <AlertDialogDescription>
                タスク「{taskToCancel.name}」をタイムラインから解除してもよろしいですか？
                この操作は元に戻せません。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCancelDialogClose}>キャンセル</AlertDialogCancel>
              <AlertDialogAction onClick={handleCancelConfirm}>解除する</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default Timeline;
