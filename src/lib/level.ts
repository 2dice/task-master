import { Task } from '@/types';

/**
 * 現在のレベルでタスクが使用可能か判定する
 */
export const isTaskAllowedForLevel = (task: Task, level: 1 | 2 | 3): boolean => {
  // レベル1: 条件付き・待ち時間タスクは不可
  if (level === 1) {
    if (task.condition) return false;
    if (task.waitTime) return false;
    return true;
  }

  // レベル2: 待ち時間タスクは不可
  if (level === 2) {
    if (task.waitTime) return false;
    return true;
  }

  // レベル3: すべて許可
  return true;
};

/**
 * レベル制限で使用不可の場合に表示するメッセージ
 */
export const getLevelRestrictionMessage = (task: Task, level: 1 | 2 | 3): string => {
  if (isTaskAllowedForLevel(task, level)) return '';

  if (level === 1) {
    if (task.condition) return 'レベル2で使えるよ！(条件付きタスク)';
    if (task.waitTime) return 'レベル3で使えるよ！(待ち時間タスク)';
  }
  if (level === 2 && task.waitTime) {
    return 'レベル3で使えるよ！(待ち時間タスク)';
  }
  return 'このレベルでは使えないよ！';
};
