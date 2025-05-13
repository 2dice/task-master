import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { ReactNode, useState } from 'react';
import DragOverlay from './DragOverlay';
import { Card, CardContent } from '@/components/ui/card';
import { Task } from '@/types';

interface DndContextWrapperProps {
  children: ReactNode;
  onDragStart?: (event: DragStartEvent) => void;
  onDragOver?: (event: DragOverEvent) => void;
  onDragEnd?: (event: DragEndEvent) => void;
}

/**
 * DndContextをラップしたコンポーネント
 * アプリでドラッグ＆ドロップ機能を有効にする
 */
const DndContextWrapper = ({
  children,
  onDragStart,
  onDragOver,
  onDragEnd,
}: DndContextWrapperProps) => {
  // activeIdの状態を保持し、必要に応じてコンポーネントに渡すことができるように
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // センサーの設定 - ドラッグを検出するためのセンサー
  const sensors = useSensors(
    useSensor(PointerSensor, {
      // ドラッグ開始の開始を詳細に設定できる
      activationConstraint: {
        // 5px以上動かしたらドラッグ開始
        distance: 5,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);

    // activeTaskもセットする（ドラッグオーバーレイ用）
    if (active.data?.current?.task) {
      setActiveTask(active.data.current.task);
      console.log('ドラッグ開始 - タスクデータ:', active.data.current.task);
    }

    if (onDragStart) {
      onDragStart(event);
    }

    // デバッグ用
    console.log('ドラッグ開始:', active.id, '(activeId:', activeId, ')');
  };

  const handleDragOver = (event: DragOverEvent) => {
    if (onDragOver) {
      onDragOver(event);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    // activeIdを使用してログを出力
    console.log(`ドラッグ終了: ${activeId} -> ${event.over?.id || 'どこにも落とされなかった'}`);
    // ドラッグ終了時にクリア
    setActiveId(null);
    setActiveTask(null);

    if (onDragEnd) {
      onDragEnd(event);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {children}

      {/* ドラッグ中のオーバーレイを表示 */}
      <DragOverlay>
        {activeTask ? (
          <Card className={`${activeTask.color} border-0 shadow-md h-full`}>
            <CardContent className="p-3 flex flex-col h-full">
              <h3 className="font-medium text-sm text-gray-800 truncate">{activeTask.name}</h3>
              <div className="mt-auto pt-1">
                <span className="text-xs text-gray-600">{activeTask.duration1}分</span>
              </div>
            </CardContent>
          </Card>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DndContextWrapper;
