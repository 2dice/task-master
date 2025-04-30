import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('1');

  return (
    <div className="flex flex-col h-screen w-screen min-w-full max-w-none bg-slate-100">
      {/* ヘッダー: レベル設定エリア */}
      <header className="w-full min-w-full bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          {/* サイドメニュー: タスク確認・作成エリア */}
          <Sheet open={showSideMenu} onOpenChange={setShowSideMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:flex hover:bg-slate-100">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[85vw] sm:w-[400px] md:w-[350px] lg:max-w-sm border-r-2 bg-white p-6"
            >
              <div className="h-full flex flex-col">
                <h2 className="text-xl font-bold mb-6 text-indigo-600">タスク確認・作成</h2>
                <div className="flex-grow overflow-auto">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <p className="text-slate-500">ここにタスク作成UIが入ります</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-bold text-indigo-600">タスクマスター</h1>
        </div>

        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
          <SelectTrigger className="w-[180px] md:w-[220px] lg:w-[280px] bg-white border-slate-200">
            <SelectValue placeholder="レベルを選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">レベル 1: 基本の時間管理</SelectItem>
            <SelectItem value="2">レベル 2: 条件付きタスク</SelectItem>
            <SelectItem value="3">レベル 3: 待ち時間あり</SelectItem>
            <SelectItem value="4">レベル 4: 複雑な依存関係</SelectItem>
            <SelectItem value="5">レベル 5: 割り込み対応</SelectItem>
          </SelectContent>
        </Select>
      </header>

      {/* メインコンテンツと下部のタスクプールを含む領域 */}
      <div className="flex-grow flex flex-col w-full min-w-full">
        {/* メインコンテンツ: タスクレイアウトエリア */}
        <main className="flex-grow p-4 w-full min-w-full">
          <div className="h-full w-full border-2 border-dashed border-indigo-200 bg-white rounded-lg flex items-center justify-center">
            <p className="text-indigo-400 font-medium">タスクレイアウトエリア</p>
          </div>
        </main>

        <Separator className="w-full bg-slate-300" />

        {/* フッター: タスクプールエリア */}
        <div className="h-1/4 md:h-1/5 lg:h-1/4 bg-white p-4 shadow-inner border-t border-slate-200 w-full min-w-full">
          <div className="h-full w-full border-2 border-dashed border-indigo-200 bg-slate-50 rounded-lg flex items-center justify-center">
            <p className="text-indigo-400 font-medium">タスクプールエリア</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
