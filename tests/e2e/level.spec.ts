import { test, expect } from '@playwright/test';

/**
 * レベル別タスク制限のE2Eテスト
 *
 * 1. 条件付きタスク(レベル1で不可 / レベル2以降で可)
 * 2. 待ち時間タスク(レベル1,2で不可 / レベル3で可)
 *
 * 画面のサイドメニューを開き、テスト用タスクを作成して
 * Plus ボタンの `disabled` 状態で判定する。
 */

test.describe('レベル制限タスクの有効 / 無効表示', () => {
  test('各レベルでタスクの有効状態が変わる', async ({ page }) => {
    // アプリを開く
    await page.goto('/');

    // ハンバーガーメニューを開いてサイドメニューを表示
    const hamburger = page.locator('button').first();
    await hamburger.click();

    // Playwright がコンボボックスをレンダリングし終えるまで待機
    await expect(page.locator('button[role="combobox"]')).toBeVisible();

    // テスト用タスクを2つ追加 (条件付き / 待ち時間)
    await page.evaluate(() => {
      // Zustand アクションを直接呼び出して availableTasks へ追加
      const store = (
        window as unknown as { AppStore: { getState: () => import('../../src/types').AppState } }
      ).AppStore.getState();
      store.addTask({
        id: 'wait-task',
        name: '待ち時間タスク',
        duration1: 10,
        waitTime: { duration: 5 },
        color: 'bg-indigo-200',
        isPreset: false,
      });
      store.addTask({
        id: 'cond-task',
        name: '条件付きタスク',
        duration1: 10,
        condition: 'wait-task',
        color: 'bg-orange-200',
        isPreset: false,
      });
    });

    // タスクリストに描画が反映されるまで待機
    await page.waitForTimeout(300);

    // スクロール先を確実にするためにリスト要素を探す
    await expect(page.getByText('待ち時間タスク', { exact: true })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('条件付きタスク', { exact: true })).toBeVisible();

    // 各タスク行の Plus ボタンを取得 (アクセシブルネームが無いので XPath)
    const waitRow = page
      .locator("xpath=//h3[text()='待ち時間タスク']/ancestor::div[contains(@class,'items-center')]")
      .first();
    const condRow = page
      .locator("xpath=//h3[text()='条件付きタスク']/ancestor::div[contains(@class,'items-center')]")
      .first();

    const waitPlus = waitRow.locator('button').first();
    const condPlus = condRow.locator('button').first();

    // ------------ レベル1 (初期) ------------
    await expect(waitPlus).toBeDisabled();
    await expect(condPlus).toBeDisabled();

    // ------------ レベル2へ変更 ------------
    await page.evaluate(() => {
      (
        window as unknown as { AppStore: { getState: () => import('../../src/types').AppState } }
      ).AppStore.getState().setLevel(2);
    });
    await page.waitForTimeout(100);

    await expect(waitPlus).toBeDisabled();
    await expect(condPlus).toBeEnabled();

    // ------------ レベル3へ変更 ------------
    await page.evaluate(() => {
      (
        window as unknown as { AppStore: { getState: () => import('../../src/types').AppState } }
      ).AppStore.getState().setLevel(3);
    });
    await page.waitForTimeout(100);

    await expect(waitPlus).toBeEnabled();
    await expect(condPlus).toBeEnabled();

    // 実際にプールに追加できるかも確認 (レベル3)
    await condPlus.click();
    await waitPlus.click();

    const poolState = await page.evaluate(() => {
      // @ts-expect-error - Zustand store を直接参照
      return window.AppStore.getState().taskPool.length;
    });
    expect(poolState).toBe(2);
  });
});
