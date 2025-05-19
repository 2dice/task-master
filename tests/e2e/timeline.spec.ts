/* eslint-disable @typescript-eslint/no-explicit-any */

import { test, expect } from '@playwright/test';

/**
 * タイムライン機能に関するE2Eテスト
 * - タスクをプールからレイアウトに移動してタイムラインへ表示
 * - タスクの色クラスが適切に適用されている
 * - タスクの開始位置 (left) がストア状態に基づいて正しい
 * - 横スクロールが必要な場合、タイムラインコンテナの scrollWidth > clientWidth になる
 */

test.describe('タイムライン表示テスト', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // APP_STORE_AVAILABLE フラグが true になるまで待機
    await page.waitForFunction(() => (window as any).APP_STORE_AVAILABLE === true);
  });

  test('タスク表示・色付け・横スクロール確認', async ({ page }) => {
    // 40分幅のタスクを追加
    await page.evaluate(() => {
      (window as any).createTestTask({
        id: 'tl-task-1',
        name: 'タイムラインタスク1',
        duration1: 40,
        color: 'bg-orange-200',
        isPreset: false,
      });
    });
    await page.evaluate(() => (window as any).moveTaskToLayout('tl-task-1'));

    // 25分幅のタスクを追加（2行目に配置され横幅が合計65分になる想定）
    await page.evaluate(() => {
      (window as any).createTestTask({
        id: 'tl-task-2',
        name: 'タイムラインタスク2',
        duration1: 25,
        color: 'bg-blue-200',
        isPreset: false,
      });
    });
    await page.evaluate(() => (window as any).moveTaskToLayout('tl-task-2'));

    // 1つ目のタスクが表示されることを確認
    const task1 = page.locator('[data-testid="task-item-tl-task-1"]');
    await expect(task1).toBeVisible();

    // 色クラスが付与されていることを確認
    await expect(task1).toHaveClass(/bg-orange-200/);

    // 2つ目のタスクが表示されることを確認
    const task2 = page.locator('[data-testid="task-item-tl-task-2"]');
    await expect(task2).toBeVisible();
    await expect(task2).toHaveClass(/bg-blue-200/);

    // タスク1は一番最初に配置されるため left は 0px
    const task1Left = await task1.evaluate((el) => parseFloat((el as HTMLElement).style.left));
    expect(task1Left).toBeCloseTo(0, 1);

    // タスク2は row1 だが startTime が 40min 位置 (40 * 30px) になる想定
    const task2Left = await task2.evaluate((el) => parseFloat((el as HTMLElement).style.left));
    expect(task2Left).toBeCloseTo(40 * 30, 1);

    // タイムラインコンテナの幅が viewport 幅より大きい -> 横スクロール必要
    const needsScroll = await page.evaluate(() => {
      const container = document.querySelector('[data-testid="timeline-container"]') as HTMLElement;
      if (!container) return false;
      return container.getBoundingClientRect().width > window.innerWidth;
    });
    expect(needsScroll).toBe(true);
  });
});
