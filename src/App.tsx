import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from '@/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="flex gap-4 mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-white mb-6">タスクマスター</h1>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        {/* 通常のカスタムボタン */}
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full mb-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          カウント: {count}
        </button>

        {/* shadcn/uiのButton - デフォルト */}
        <Button className="w-full mb-2" onClick={() => setCount((count) => count + 1)}>
          shadcn/ui Button - デフォルト
        </Button>

        {/* shadcn/uiのButton - バリエーション */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Button variant="outline">アウトライン</Button>
          <Button variant="secondary">セカンダリー</Button>
          <Button variant="destructive">デストラクティブ</Button>
          <Button variant="ghost">ゴースト</Button>
        </div>

        <p className="mt-4 text-gray-600">
          このページはTailwind CSSとshadcn/uiでスタイリングされています！
        </p>
      </div>
      <p className="mt-6 text-white text-opacity-80">
        これから小学3年生向けタスク管理ゲームを作っていきます！
      </p>
    </div>
  );
}

export default App;
