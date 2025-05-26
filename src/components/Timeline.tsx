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
  endTime: number; // タスク全体終了時刻
  waitEndTime?: number; // 待ち時間終了時刻
  phase2StartTime?: number; // 所要時間2開始時刻
  duration2?: number; // 所要時間2
  phase2Placed?: boolean; // phase2配置済みフラグ
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
  const maxEndMinute = tasks.reduce((max, t) => Math.max(max, t.endTime), 0);
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
  const placePhase2 = useAppStore((state: AppState) => state.placePhase2);

  const handleTaskClick = (task: Task) => {
    // phase2 未配置でduration2がある場合は後半配置確認
    if (task.duration2 && !task.phase2Placed) {
      placePhase2(task.id);
      return;
    }

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
      className="relative bg-slate-50"
      style={{
        width: `${totalMinutes * MINUTE_WIDTH + MINUTE_WIDTH}px`,
        height: `${timelineContainerHeight}px`,
        minHeight: '200px',
        // 親コンテナ(TaskLayout)でスクロールを管理するためここではオーバーフローを明示しない
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
            left: task.phase2Placed
              ? `${task.startTime * MINUTE_WIDTH}px`
              : `${task.startTime * MINUTE_WIDTH}px`,
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

          // タスク全体の幅を計算
          const totalTaskMinutes = task.endTime - task.startTime;

          taskStyle.width = `${totalTaskMinutes * MINUTE_WIDTH}px`;

          // 待ち時間やduration2を考慮した複合表示
          const segments: React.ReactNode[] = [];

          // 1. 所要時間1
          segments.push(
            <div
              key="phase1"
              className={`${task.color} h-full flex items-center justify-center text-xs truncate select-none`}
              style={{ width: `${task.duration1 * MINUTE_WIDTH}px` }}
            >
              {task.name}
            </div>
          );

          // 2. 待ち時間
          if (
            task.waitEndTime !== undefined &&
            task.waitEndTime > task.startTime + task.duration1
          ) {
            const waitMinutes = task.waitEndTime - (task.startTime + task.duration1);
            segments.push(
              <div
                key="wait"
                className="h-full flex items-center justify-center text-[10px] bg-gray-100 text-gray-600 border-dashed border-x border-gray-400 select-none"
                style={{ width: `${waitMinutes * MINUTE_WIDTH}px` }}
              >
                待ち
              </div>
            );
          }

          // 2.5 gap (待ち時間後からphase2Startまで)
          if (
            task.phase2Placed &&
            task.phase2StartTime !== undefined &&
            task.waitEndTime !== undefined &&
            task.phase2StartTime > task.waitEndTime
          ) {
            const gapMinutes = task.phase2StartTime - task.waitEndTime;
            segments.push(
              <div
                key="gap"
                className="h-full"
                style={{ width: `${gapMinutes * MINUTE_WIDTH}px` }}
              />
            );
          }

          // 3. 所要時間2
          if (task.phase2StartTime !== undefined && task.duration2 && task.duration2 > 0) {
            segments.push(
              <div
                key="phase2"
                className={`${task.color} h-full flex items-center justify-center text-xs truncate select-none opacity-70`}
                style={{ width: `${task.duration2 * MINUTE_WIDTH}px` }}
              >
                {task.name}
              </div>
            );
          }

          return (
            <div
              key={task.id}
              style={taskStyle}
              data-testid={`task-item-${task.id}`}
              onClick={() => handleTaskClick(task)}
              className={`flex flex-row h-full ${task.color}`}
            >
              {segments}
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
