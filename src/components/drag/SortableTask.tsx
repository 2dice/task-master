import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '@/types';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface SortableTaskProps {
  task: Task;
  children?: React.ReactNode;
}

/**
 * ドラッグ＆ドロップでソート可能なタスクコンポーネント
 * useSortableを使用して、並び替え機能をサポート
 */
const SortableTask = ({ task, children }: SortableTaskProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { task },
  });

  // デバッグ用: ドラッグ状態が変化したときにログを出力
  useEffect(() => {
    if (isDragging) {
      console.log(`ソータブルタスクドラッグ中: ${task.id} (${task.name})`);
    }
    // 属性情報のデバッグ
    console.log('SortableTask 属性:', {
      id: task.id,
      hasListeners: !!listeners,
      hasAttributes: !!attributes,
      transform,
      isDragging,
    });
  }, [isDragging, task.id, task.name, listeners, attributes, transform]);

  return (
    <motion.div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 999 : 1,
        position: 'relative',
        touchAction: 'none',
      }}
      animate={{
        scale: isDragging ? 1.05 : 1,
        opacity: isDragging ? 0.8 : 1,
        boxShadow: isDragging ? '0 5px 10px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
      className={`cursor-grab active:cursor-grabbing ${isDragging ? 'dragging' : ''}`}
      data-dragging={isDragging ? 'true' : 'false'}
      data-task-id={task.id}
    >
      {children}
    </motion.div>
  );
};

export default SortableTask;
