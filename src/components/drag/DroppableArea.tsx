import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

interface DroppableAreaProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const DroppableArea = ({ id, children, className = '' }: DroppableAreaProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`rounded-lg border-2 border-dashed transition-colors duration-200 ${className} ${
        isOver ? 'bg-indigo-100/30 border-indigo-500' : 'border-transparent'
      }`}
    >
      {children}
    </div>
  );
};

export default DroppableArea;
