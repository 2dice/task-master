import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { Task } from '@/types';
import { ReactNode } from 'react';
import { DroppableArea } from '.';

interface SortableTaskPoolProps {
  tasks: Task[];
  droppableId: string;
  className?: string;
  children: ReactNode;
}

/**
 * ソート可能なタスクプールのコンテキストを提供するコンポーネント
 * SortableContextを使用して、タスクのソート機能をサポート
 */
const SortableTaskPool = ({
  tasks,
  droppableId,
  className = '',
  children,
}: SortableTaskPoolProps) => {
  // デバッグ情報をログに出力
  console.log('◆ SortableTaskPool レンダリング:', {
    tasksCount: tasks.length,
    taskIds: tasks.map((t) => t.id).join(', '),
    droppableId,
  });

  return (
    <DroppableArea id={droppableId} className={className}>
      <SortableContext items={tasks.map((task) => task.id)} strategy={rectSortingStrategy}>
        {children}
      </SortableContext>
    </DroppableArea>
  );
};

export default SortableTaskPool;
