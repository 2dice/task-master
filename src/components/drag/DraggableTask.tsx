import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Task } from '@/types';

interface DraggableTaskProps {
  task: Task;
  children?: React.ReactNode;
}

const DraggableTask = ({ task, children }: DraggableTaskProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
    data: { task },
  });

  // デバッグ用: ドラッグ状態が変化したときにログを出力
  useEffect(() => {
    if (isDragging) {
      console.log(`タスクドラッグ中: ${task.id} (${task.name})`);
    }
  }, [isDragging, task.id, task.name]);

  // デバッグ用スタイル - transformがない場合、必要なプロパティのみ指定

  return (
    <motion.div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Translate.toString(transform),
        touchAction: 'none',
        position: 'relative' as const,
        zIndex: isDragging ? 999 : 1,
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

export default DraggableTask;
