import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'docs', // GitHub Pages用のビルド出力ディレクトリ
    chunkSizeWarningLimit: 800, // チャンクサイズ警告の閾値を緩和
    rollupOptions: {
      output: {
        // node_modules をベースに手動チャンク分割
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@dnd-kit')) {
              return 'dnd-kit';
            }
            if (id.includes('lucide-react')) {
              return 'lucide';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            return 'vendor';
          }
        },
      },
    },
  },
  base: './', // GitHub Pages向けに相対パスを使用
});
