import { motion, AnimatePresence } from 'framer-motion';
import useAppStore from '@/store'; // Zustandストアをインポート

interface TransitionScreenProps {
  children: React.ReactNode;
}

const TransitionScreen: React.FC<TransitionScreenProps> = ({ children }) => {
  const isTransitioning = useAppStore((state) => state.isTransitioning);
  const level = useAppStore((state) => state.level); // levelもキーに含める

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={level} // レベルが変わるとこの要素が入れ替わる
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // 親のmotion.divでexitも定義
        transition={{ duration: 0.5 }} // durationもこちらに集約
      >
        {isTransitioning && (
          <div // 白いオーバーレイは通常のdivでOK
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              zIndex: 9999,
            }}
          />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionScreen;
