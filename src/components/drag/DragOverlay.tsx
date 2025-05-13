import { DragOverlay as DndDragOverlay } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DragOverlayProps {
  children: ReactNode;
}

/**
 * ドラッグ中に表示されるオーバーレイコンポーネント
 * ドラッグ中のアイテムの見た目をカスタマイズできる
 */
const DragOverlay = ({ children }: DragOverlayProps) => {
  return (
    <DndDragOverlay>
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: 1.05,
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
          opacity: 0.9,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
        }}
      >
        {children}
      </motion.div>
    </DndDragOverlay>
  );
};

export default DragOverlay;
