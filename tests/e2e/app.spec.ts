import { test, expect } from '@playwright/test';

// タスクマスターアプリの基本的なUIテスト
test.describe('タスクマスターアプリの基本テスト', () => {
  // 各テストの前にローカルサーバーのホームページに移動
  test.beforeEach(async ({ page }) => {
    // 開発サーバーのURLを指定（デフォルトはlocalhost:5173）
    await page.goto('/');
  });

  // 4分割レイアウトの基本UI要素が表示されるかをテスト
  test('画面が正しく4つのエリアに分割されている', async ({ page }) => {
    // タイトルを確認
    await expect(page.locator('h1')).toContainText('タスクマスター');

    // ヘッダーが表示されていることを確認
    await expect(page.locator('header')).toBeVisible();

    // タスクレイアウトエリアのテキストが表示されることを確認
    await expect(page.getByText('タスクレイアウトエリア', { exact: false })).toBeVisible();

    // タスクプールエリアのテキストが表示されることを確認
    await expect(page.getByText('タスクプールエリア', { exact: false })).toBeVisible();
  });

  // ハンバーガーメニューのテストとZustand状態の変化確認
  test('ハンバーガーメニューで左側エリアが開閉できる', async ({ page }) => {
    // 初期状態のZustand確認
    const initialState = await getZustandState(page);
    expect(initialState.showSideMenu).toBe(false);

    // 最初にサイドバーのタイトルが表示されていないことを確認
    const taskCreationTitle = page.getByText('タスク確認・作成', { exact: true });
    await expect(taskCreationTitle).not.toBeVisible();

    // ハンバーガーボタンをクリック
    const hamburgerButton = page.locator('button').first();
    await hamburgerButton.click();

    // サイドバーのタイトルが表示されることを確認
    await expect(taskCreationTitle).toBeVisible();

    // サイドバーの内容も表示されることを確認
    await expect(page.getByText('タスクの作成・編集・削除', { exact: false })).toBeVisible();

    // サイドメニューを開いた後のZustand状態確認
    const stateAfterOpen = await getZustandState(page);
    expect(stateAfterOpen.showSideMenu).toBe(true);

    // ESCキーでサイドバーを閉じる
    await page.keyboard.press('Escape');

    // サイドバーが閉じたことを確認
    await expect(taskCreationTitle).not.toBeVisible();

    // サイドメニューを閉じた後のZustand状態確認
    const stateAfterClose = await getZustandState(page);
    expect(stateAfterClose.showSideMenu).toBe(false);
  });

  // レベル選択ドロップダウンのテスト - 選択機能とZustand状態の変化確認
  test('レベル選択ドロップダウンでレベルを変更できる', async ({ page }) => {
    // 初期状態のZustand確認
    const initialState = await getZustandState(page);
    expect(initialState.level).toBe(1);

    // 1. レベル選択ボタンの特定
    const levelButton = page.locator('button[role="combobox"]');
    await expect(levelButton).toBeVisible();

    // 初期状態のテキストを取得
    const initialButtonText = await levelButton.textContent();
    console.log(`初期選択状態: "${initialButtonText}"`);

    // 最初は「レベル 1: 基本の時間管理」が選択されていることを確認
    await expect(levelButton).toContainText('レベル 1');

    // 2. ドロップダウンを開く
    await levelButton.click();
    await page.waitForTimeout(500); // アニメーション完了を待つ

    // ドロップダウンメニューが表示されたことを確認
    const dropdown = page.locator('[data-radix-popper-content-wrapper]');
    await expect(dropdown).toBeVisible();

    // 選択肢（オプション）が表示されていることを確認
    const options = page.locator('[role="option"]');
    await expect(options).toHaveCount(5); // 5つのレベル選択肢

    // 3. レベル3を選択
    const level3Option = page.locator('[role="option"]').filter({ hasText: 'レベル 3' });

    // レベル3をクリック
    await level3Option.click();
    await page.waitForTimeout(500); // 選択アニメーション完了を待つ

    // 4. 選択後の状態確認
    // ドロップダウンが閉じたことを確認
    await expect(dropdown).not.toBeVisible();

    // ボタンのテキストがレベル3に変わったことを確認
    await expect(levelButton).toContainText('レベル 3');

    // 最終状態のテキストを取得して表示
    const finalButtonText = await levelButton.textContent();
    console.log(`選択後の状態: "${finalButtonText}"`);

    // レベル変更後のZustand状態確認
    const stateAfterLevel3 = await getZustandState(page);
    expect(stateAfterLevel3.level).toBe(3);

    // 5. 再確認：別のレベルも選択できることを確認
    // 再度ドロップダウンを開く
    await levelButton.click();
    await page.waitForTimeout(500);

    // レベル5を選択
    const level5Option = page.locator('[role="option"]').filter({ hasText: 'レベル 5' });
    await level5Option.click();
    await page.waitForTimeout(500);

    // レベル5に変わったことを確認
    await expect(levelButton).toContainText('レベル 5');

    // レベル5に変更後のZustand状態確認
    const stateAfterLevel5 = await getZustandState(page);
    expect(stateAfterLevel5.level).toBe(5);
  });

  // Zustandストアの初期状態テスト
  test('Zustandストアの初期状態が正しく設定されている', async ({ page }) => {
    // Zustandストアの状態を確認
    const state = await getZustandState(page);

    // プリセットタスクがあることを確認
    expect(state.availableTasks.length).toBeGreaterThan(0);

    // 最初のプリセットタスクの内容を確認
    const firstTask = state.availableTasks[0];
    expect(firstTask).toHaveProperty('id');
    expect(firstTask).toHaveProperty('name');
    expect(firstTask).toHaveProperty('duration1');
    expect(firstTask).toHaveProperty('color');
    expect(firstTask).toHaveProperty('isPreset', true);

    // 初期状態を確認
    expect(state.level).toBe(1);
    expect(state.showSideMenu).toBe(false);
    expect(state.taskPool).toHaveLength(0);
    expect(state.layoutTasks).toHaveLength(0);
    expect(state.showingInterruption).toBe(false);
  });

  // レスポンシブ対応のテスト
  test('異なる画面サイズでレイアウトが適切に調整される', async ({ page }) => {
    // モバイルサイズでテスト
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('タスクレイアウトエリア', { exact: false })).toBeVisible();
    await expect(page.getByText('タスクプールエリア', { exact: false })).toBeVisible();

    // タブレットサイズでテスト
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('タスクレイアウトエリア', { exact: false })).toBeVisible();
    await expect(page.getByText('タスクプールエリア', { exact: false })).toBeVisible();

    // iPadの横向きサイズでテスト
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('タスクレイアウトエリア', { exact: false })).toBeVisible();
    await expect(page.getByText('タスクプールエリア', { exact: false })).toBeVisible();
  });
});

/**
 * Zustandストアの状態を取得するヘルパー関数
 */
async function getZustandState(page) {
  return await page.evaluate(() => {
    // @ts-expect-error: グローバルオブジェクトアクセス
    if (window.AppStore && window.AppStore.getState) {
      // @ts-expect-error: グローバルオブジェクトアクセス
      return window.AppStore.getState();
    }
    return null;
  });
}
