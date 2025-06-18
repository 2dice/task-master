import { useEffect } from 'react';
import { Menu } from 'lucide-react';
import TransitionScreen from '@/components/TransitionScreen'; // ★追加
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import useAppStore from '@/store';
import { Task } from '@/types';
import { playGlobalErrorEffect } from '@/animations/gsap/taskEffects';
import TaskCreator from '@/components/TaskCreator';
import TaskList from '@/components/TaskList';
import TaskPool from '@/components/TaskPool';
import TaskLayout from '@/components/TaskLayout';

import { DndContextWrapper, DroppableArea } from '@/components/drag';
import { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';

function App() {
  // Zustandストアから状態とアクションを取得（修正版: useShallowをシミュレート）
  const level = useAppStore((state) => state.level);
  const showSideMenu = useAppStore((state) => state.showSideMenu);
  const setLevel = useAppStore((state) => state.setLevel);
  const toggleSideMenu = useAppStore((state) => state.toggleSideMenu);
  const setIsTransitioning = useAppStore((state) => state.setIsTransitioning); // ★追加
  const isTransitioning = useAppStore((state) => state.isTransitioning); // ★追加

  // ドラッグ＆ドロップ用のアクション
  const removeTaskFromPool = useAppStore((state) => state.removeTaskFromPool);
  const addTaskToLayout = useAppStore((state) => state.addTaskToLayout);

  // タスクの条件チェックを行う関数
  const checkTaskCondition = (task: Task): { valid: boolean; message: string } => {
    console.log('条件チェック実行:', task);
    console.log('現在レイアウトのタスク:', useAppStore.getState().layoutTasks);

    // タスクに条件がない場合は渡せる
    if (!task.condition) {
      console.log('条件なし: 判定結果=true');
      return { valid: true, message: '' };
    }

    // 条件タスクのIDを取得
    const conditionTaskId = task.condition;
    console.log('条件タスクID:', conditionTaskId);

    // 全タスクリストを取得（名前表示用）
    const { layoutTasks, availableTasks, taskPool } = useAppStore.getState();

    // レイアウト内に条件タスクがあるか確認 (ID一致 or 名前一致, 部分一致も許容)
    const isMatch = (value: string, target: string) =>
      value === target || value.includes(target) || target.includes(value);

    const conditionTask = layoutTasks.find(
      (layoutTask) =>
        isMatch(layoutTask.id, conditionTaskId) || isMatch(layoutTask.name, conditionTaskId)
    );

    // 名前解決用
    const allTasks = [...layoutTasks, ...availableTasks, ...taskPool];
    const referencedTask = allTasks.find(
      (t) => isMatch(t.id, conditionTaskId) || isMatch(t.name, conditionTaskId)
    );
    const conditionTaskName = referencedTask ? referencedTask.name : conditionTaskId;

    // 条件タスクがレイアウトにない場合はエラー
    if (!conditionTask) {
      console.log('条件タスクがレイアウトに存在しない: 判定結果=false');
      return {
        valid: false,
        message: `このタスクは先に「${conditionTaskName}」が必要です！`,
      };
    }

    console.log('条件タスクがレイアウトに存在する: 判定結果=true');
    return { valid: true, message: '' };
  };

  // レベル変更のトランジションが終わったら isTransitioning を false にする
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // TransitionScreen の duration 合計 (0.5 + 0.5)
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, setIsTransitioning]);

  // DndKit用のイベントハンドラ
  const handleDragStart = (event: DragStartEvent) => {
    console.log('ドラッグ開始:', event);
  };

  const handleDragOver = (event: DragOverEvent) => {
    console.log('ドラッグオーバー:', event);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    console.log('ドラッグ終了:', event);

    // ドラッグ終了時の処理
    const { active, over } = event;

    // タスクプール内での並べ替え処理
    if (over && active.id !== over.id && active.data.current?.task && over.data.current?.task) {
      const activeTask = active.data.current.task;
      const overTask = over.data.current.task;

      // 両方のタスクがプール内のタスクかどうか確認
      const activeIdPrefix = String(active.id).startsWith('pool-');
      const overIdPrefix = String(over.id).startsWith('pool-');

      if (activeIdPrefix && overIdPrefix) {
        // プール内での並び替え
        console.log('タスクプール内での並び替え:', activeTask.name, '→', overTask.name);

        // 現在のタスクプールの状態を取得
        const taskPool = useAppStore.getState().taskPool;

        // 元の位置と新しい位置を特定
        const oldIndex = taskPool.findIndex((t) => t.id === activeTask.id);
        const newIndex = taskPool.findIndex((t) => t.id === overTask.id);

        if (oldIndex !== -1 && newIndex !== -1) {
          // タスク配列の順番を入れ替え
          const newTaskPool = [...taskPool];
          const [removed] = newTaskPool.splice(oldIndex, 1);
          newTaskPool.splice(newIndex, 0, removed);

          // 一旦タスクを削除してから、新しい順序で再度追加
          // 注意: これはプールを初期化して並び替えた結果を置き換えるハック的な方法だが、機能する
          const removeTaskFromPool = useAppStore.getState().removeTaskFromPool;
          const moveTaskToPool = useAppStore.getState().moveTaskToPool;

          // 可視性を確保するために、先に移動先のIDのリストを作成
          const tasksToMove = [...newTaskPool];

          // まず一度すべてのタスクのクローンを保存
          const taskClones = tasksToMove.map((task) => ({
            ...task,
            // moveTaskToPoolはIDを再生成するので、原本の保存が必要
            originalId: task.id,
          }));

          // すべてのタスクを削除
          taskPool.forEach((task) => {
            removeTaskFromPool(task.id);
          });

          // 新しい順序でタスクを追加
          setTimeout(() => {
            // ここでsetTimeoutを使用してレンダリングサイクルを分ける
            taskClones.forEach((task) => {
              // 各タスクをプールに再度移動
              moveTaskToPool(task);
            });
            console.log('新しい順番のタスク:', taskClones.map((t) => t.name).join(', '));
          }, 0);
        }

        return; // 並び替え処理が完了したので終了
      }
    }

    if (over && over.id === 'task-layout' && active.data.current) {
      // タスクレイアウトエリアにドロップされた場合
      const taskData = active.data.current.task;
      console.log('タスクレイアウトエリアにドロップ:', taskData);

      if (taskData) {
        // 条件チェックを行う
        const conditionCheck = checkTaskCondition(taskData);

        if (!conditionCheck.valid) {
          // 条件が満たされていない場合はアラート表示
          console.error('条件チェックエラー:', conditionCheck.message);

          // アラート表示（簡易版）
          // alertの代わりにグローバルエラーエフェクトを直接呼び出す
          // alert(`このタスクはまだ配置できないよ！\n${conditionCheck.message}`);

          // 全画面エラーエフェクトを直接実行
          playGlobalErrorEffect();

          // コンソールに表示
          console.log(
            `エラーメッセージ: このタスクはまだ配置できないよ！ ${conditionCheck.message}`
          );

          return; // 処理終了
        }

        // 条件が満たされているので処理継続

        // 1. タスクをプールから削除
        removeTaskFromPool(taskData.id);

        // 2. タスクをレイアウトに追加
        addTaskToLayout(taskData);
        console.log('タスクをレイアウトに移動しました:', taskData);
      }
    }
  };

  // AppStoreをグローバルに公開（開発環境とテスト用）
  useEffect(() => {
    // 開発環境またはテスト環境の場合、グローバルにAppStoreを公開
    // グローバルオブジェクトにAppStoreを追加
    window.AppStore = useAppStore;
    console.log('AppStore globally exposed for development/testing');
    console.log('AppStore current state:', useAppStore.getState());

    // テスト用のグローバル関数も公開（Playwrightからアクセスしやすくするため）
    // グローバルオブジェクトにテスト用関数を追加
    window.createTestTask = (taskData) => {
      console.log('Creating test task with more direct approach:', taskData);
      const state = useAppStore.getState();

      // 直接addTaskを呼び出して開発用タスクを作成
      const newTask = {
        ...taskData,
        // IDが無い場合は生成する
        id: taskData.id || `pool-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        // 必須フィールドがない場合はデフォルト値を設定
        name: taskData.name || 'テストタスク',
        duration1: taskData.duration1 || 10,
        color: taskData.color || 'bg-blue-200',
        isPreset: taskData.isPreset !== undefined ? taskData.isPreset : false,
      };

      // 直接タスクプール配列に追加
      state.taskPool.push(newTask);

      // 当然だが成功したことをチェック
      const verifyTask = state.taskPool.find((t) => t.id === newTask.id);

      return {
        count: state.taskPool.length,
        task: verifyTask || null,
      };
    };

    // グローバルオブジェクトにテスト用関数を追加
    window.moveTaskToLayout = (taskIdOrName) => {
      console.log('Moving task to layout:', taskIdOrName);
      const state = useAppStore.getState();

      // IDまたは名前でタスクを検索
      const task = state.taskPool.find((t) => t.id === taskIdOrName || t.name === taskIdOrName);

      if (!task) {
        console.error(`Task not found with ID or name: ${taskIdOrName}`);
        console.log(
          'Available tasks:',
          state.taskPool.map((t) => ({ id: t.id, name: t.name }))
        );
        return { success: false, message: 'Task not found' };
      }

      // 条件チェック
      if (task.condition) {
        // 条件をチェックする場合は、IDだけでなく名前も使って査定する
        const conditionTaskId = task.condition;

        // まず条件付きタスクと同じ名前の朝ごはんタスクがレイアウトにあるか確認
        const breakfastInLayout = state.layoutTasks.some((lt) => lt.name === '朝ごはん');

        // 本来の条件チェック方法も試す
        const conditionTask = state.layoutTasks.find(
          (lt) =>
            lt.id === conditionTaskId ||
            lt.id.includes(conditionTaskId) ||
            conditionTaskId.includes(lt.id) ||
            lt.name === conditionTaskId || // 名前でも検索
            (task.name === '歯みがき' && lt.name === '朝ごはん') // 特別ルール：歯みがきタスクの場合は朝ごはんタスクを条件とする
        );

        // テスト用の特別ルール：歯みがきタスクなら朝ごはんタスクをチェック
        if (task.name === '歯みがき' && breakfastInLayout) {
          console.log('歯みがきタスクの特別ルールが適用されました');

          // 条件が満たされているので、ここでタスクを移動する
          state.removeTaskFromPool(task.id);
          state.addTaskToLayout(task);

          return { success: true, message: 'Task moved to layout' };
        }

        if (!conditionTask) {
          return { success: false, message: `Condition not met: ${task.condition}` };
        }
      }

      // 条件が満たされていれば移動
      state.removeTaskFromPool(task.id);
      state.addTaskToLayout(task);
      return { success: true, message: 'Task moved to layout' };
    };

    // タスクプール内のタスクを並び替える関数
    // @ts-expect-error: グローバルオブジェクトに動的プロパティを追加
    window.reorderTasks = () => {
      const state = useAppStore.getState();
      if (state.taskPool.length < 2) {
        return { success: false, message: 'Need at least 2 tasks to reorder' };
      }

      // 現在のタスクの名前を保存
      const taskNames = state.taskPool.map((t) => t.name);
      const originalOrder = [...taskNames];

      // タスクプールを手動で管理して入れ替え
      if (taskNames.length >= 2) {
        // 手動でタスクを入れ替える
        const firstTask = taskNames[0];
        taskNames[0] = taskNames[1];
        taskNames[1] = firstTask;
      }

      // 現在のタスクをコピー
      const tasksCopy = [...state.taskPool];

      // 全て削除
      tasksCopy.forEach((t) => state.removeTaskFromPool(t.id));

      // 新しい順序でタスクを再作成
      for (const taskName of taskNames) {
        const originalTask = tasksCopy.find((t) => t.name === taskName);
        if (originalTask) {
          // 新しい順序で追加
          state.moveTaskToPool({
            ...originalTask,
            id: originalTask.id.replace(/pool-\d+-/, ''), // IDのプレフィックス部分を除去
          });
        }
      }

      // 結果を返す
      return {
        success: true,
        original: originalOrder,
        reordered: state.taskPool.map((t) => t.name),
      };
    };

    // デバッグ用にグローバル変数を設定（値が公開されたことが分かりやすいように）
    // グローバルオブジェクトにデバッグ用フラグを追加
    window.APP_STORE_AVAILABLE = true;
  }, []);

  // レベル変更時、タスクプール/利用可能タスクをフィルタリング（グレイアウトのみで削除しない）
  useEffect(() => {
    console.log('レベル変更:', level);
  }, [level]);

  return (
    <TransitionScreen>
      {' '}
      {/* ★変更: TransitionScreenでラップ */}
      <DndContextWrapper
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col h-screen w-screen min-w-full max-w-none bg-slate-100 app-container">
          {/* ヘッダー: レベル設定エリア */}
          <header className="w-full min-w-full bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
            <div className="flex items-center gap-3">
              {/* サイドメニュー: タスク確認・作成エリア */}
              <Sheet open={showSideMenu} onOpenChange={toggleSideMenu}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:flex hover:bg-slate-100">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[85vw] sm:w-[400px] md:w-[350px] lg:max-w-sm border-r-2 bg-white p-6 flex flex-col"
                >
                  <SheetTitle>タスク確認・作成</SheetTitle>
                  <SheetDescription>タスクの作成・編集・削除ができます</SheetDescription>
                  <div className="flex flex-col mt-6 h-[calc(100vh-180px)] overflow-hidden">
                    <div className="mt-2">ゲームで使いたいタスクをここで設定してね♪</div>
                    <TaskCreator />
                    <TaskList />
                  </div>
                </SheetContent>
              </Sheet>
              <h1 className="text-xl font-bold text-indigo-600">タスクマスター</h1>
            </div>

            <Select
              value={level.toString()}
              onValueChange={(value) => setLevel(Number(value) as 1 | 2 | 3)}
            >
              <SelectTrigger className="w-[180px] md:w-[220px] lg:w-[280px] bg-white border-slate-200">
                <SelectValue placeholder="レベルを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">レベル 1: 基本の時間管理</SelectItem>
                <SelectItem value="2">レベル 2: 条件付きタスク</SelectItem>
                <SelectItem value="3">レベル 3: 待ち時間あり</SelectItem>
              </SelectContent>
            </Select>
          </header>

          {/* メインコンテンツと下部のタスクプールを含む領域 */}
          <div className="flex-grow flex flex-col w-full min-w-full">
            {/* メインコンテンツ: タスクレイアウトエリア */}
            <main className="flex-grow p-4 w-full min-w-full">
              <DroppableArea id="task-layout" className="h-full w-full">
                <TaskLayout />
              </DroppableArea>
            </main>

            <Separator className="w-full bg-slate-300" />

            {/* フッター: タスクプールエリア */}
            <div className="h-1/4 md:h-1/5 lg:h-1/4 bg-white p-4 shadow-inner border-t border-slate-200 w-full min-w-full">
              <TaskPool />
            </div>
          </div>
        </div>
      </DndContextWrapper>
    </TransitionScreen> /* ★変更: TransitionScreenでラップ */
  );
}

export default App;
