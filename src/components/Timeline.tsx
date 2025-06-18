import React, { useState, useRef, useEffect } from 'react';
import useAppStore from '@/store';
import { initPinchZoom, adjustTaskNameDisplay } from '@/animations/gsap/timelineEffects';
import { createWaitTaskPulseEffect } from '@/animations/gsap/waitTaskEffects';
import { playTaskDissolveEffect } from '@/animations/gsap/taskEffects';
import { AppState } from '@/types'; // AppStateをインポート
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

  // タイムラインコンテナへの参照
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  // ズームスケールの状態管理、setState関数だけ使用
  const [, setCurrentScale] = useState(1);

  const removeTaskFromLayoutAndAddToPool = useAppStore(
    (state: AppState) => state.removeTaskFromLayoutAndAddToPool
  );
  const placePhase2 = useAppStore((state: AppState) => state.placePhase2);

  // タスク解除ダイアログ用 state
  const [taskToCancel, setTaskToCancel] = useState<Task | null>(null);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);

  // 確認ダイアログで解除確定
  const handleCancelConfirm = () => {
    if (taskToCancel) {
      const el = document.querySelector(`[data-testid="task-item-${taskToCancel.id}"]`);
      if (el) {
        playTaskDissolveEffect(el as HTMLElement, () => {
          removeTaskFromLayoutAndAddToPool(taskToCancel.id);
        });
      } else {
        removeTaskFromLayoutAndAddToPool(taskToCancel.id);
      }
    }
    setIsCancelDialogOpen(false);
    setTaskToCancel(null);
  };

  const handleCancelDialogClose = () => {
    setIsCancelDialogOpen(false);
    setTaskToCancel(null);
  };

  // ピンチズーム機能の初期化
  useEffect(() => {
    if (!timelineContainerRef.current) return;

    // ピンチズーム初期化
    const cleanupPinchZoom = initPinchZoom(timelineContainerRef.current, {
      minScale: 0.5,
      maxScale: 2.5,
      onZoomChange: (scale) => {
        setCurrentScale(scale);

        // スケールに応じてタスク名の表示を調整
        if (timelineContainerRef.current) {
          adjustTaskNameDisplay(timelineContainerRef.current, scale);
        }
      },
    });

    return () => {
      // クリーンアップ関数を実行
      cleanupPinchZoom();
    };
  }, []);

  return (
    <div
      ref={timelineContainerRef}
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

          // 2. 待ち時間: phase2開始まで表示を伸ばす
          if (task.waitEndTime !== undefined && task.duration2) {
            const waitStart = task.startTime + task.duration1;
            // phase2未配置時は設定waitEndTime, 配置済時はphase2StartTime
            const waitEnd = task.phase2StartTime ?? task.waitEndTime!;
            const waitMinutes = waitEnd - waitStart;
            segments.push(
              <div
                key={`wait-${task.id}`}
                className="relative z-10 pointer-events-auto h-full flex items-center justify-center text-[10px] bg-gray-100 text-gray-600 border-dashed border-x border-gray-400 select-none wait-task-segment"
                style={{ width: `${waitMinutes * MINUTE_WIDTH}px` }}
                // ref を元に戻す
                ref={(el) => {
                  if (el) {
                    // elがある時だけ実行し、createWaitTaskPulseEffectの戻り値（クリーンアップ関数）を返す
                    return createWaitTaskPulseEffect(el, {
                      color: 'rgba(129, 140, 248, 0.3)',
                      duration: 2,
                      intensity: 0.7,
                    });
                  }
                }}
              >
                待ち
              </div>
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
              className={`flex flex-row h-full ${task.color}`}
              // このonClickの内容を差し替えます！
              onClick={(e) => {
                e.stopPropagation();
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;

                // phase1の幅
                const phase1Width = task.duration1 * MINUTE_WIDTH;

                // 待ち時間セグメントの幅
                const waitMinutes =
                  task.waitEndTime !== undefined && task.duration2
                    ? (task.phase2StartTime ?? task.waitEndTime) - (task.startTime + task.duration1)
                    : 0;
                const waitWidth = waitMinutes * MINUTE_WIDTH;

                // クリック位置が待ち時間セグメント内かどうかを判定
                const isClickOnWaitSegment =
                  task.waitEndTime !== undefined && // 待ち時間があるタスクか
                  task.duration2 && // duration2があるか (つまり待ち時間タスク)
                  !task.phase2Placed && // phase2がまだ配置されていないか
                  clickX >= phase1Width && // クリック位置がphase1の後か
                  clickX < phase1Width + waitWidth; // クリック位置が待ち時間セグメントの終わりより前か

                console.warn(
                  `[Timeline] Task Click: ${task.id}, ` +
                    `clickX: ${clickX.toFixed(1)}, ` +
                    `phase1Width: ${phase1Width.toFixed(1)}, ` +
                    `waitWidth: ${waitWidth.toFixed(1)}, ` +
                    `isClickOnWaitSegment: ${isClickOnWaitSegment}, ` +
                    `target: ${(e.target as HTMLElement).className}`
                );

                if (isClickOnWaitSegment) {
                  console.warn(`[Timeline] Action: placePhase2 for ${task.id}`);
                  placePhase2(task.id);
                } else {
                  console.warn(`[Timeline] Action: Open cancel dialog for ${task.id}`);
                  setTaskToCancel(task);
                  setIsCancelDialogOpen(true);
                }
              }}
            >
              {segments}
            </div>
          );
        })}
      </div>
      {/* 解除確認ダイアログ */}
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
