import { test, expect } from '@playwright/test';

// タスクマスターアプリの基本的なUIテスト
test.describe('タスクマスターアプリの基本テスト', () => {
  // 各テストの前にローカルサーバーのホームページに移動
  test.beforeEach(async ({ page }) => {
    // 開発サーバーのURLを指定（デフォルトはlocalhost:5173）
    await page.goto('http://localhost:5173/');
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

  // ハンバーガーメニューのテスト
  test('ハンバーガーメニューで左側エリアが開閉できる', async ({ page }) => {
    // 最初にサイドバーのタイトルが表示されていないことを確認
    const taskCreationTitle = page.getByText('タスク確認・作成', { exact: true });
    await expect(taskCreationTitle).not.toBeVisible();

    // ハンバーガーボタンをクリック
    const hamburgerButton = page.locator('button').first();
    await hamburgerButton.click();

    // サイドバーのタイトルが表示されることを確認
    await expect(taskCreationTitle).toBeVisible();

    // サイドバーの内容も表示されることを確認
    await expect(page.getByText('ここにタスク作成UI', { exact: false })).toBeVisible();

    // ESCキーでサイドバーを閉じる
    await page.keyboard.press('Escape');

    // サイドバーが閉じたことを確認
    await expect(taskCreationTitle).not.toBeVisible();
  });

  // レベル選択ドロップダウンのテスト - 選択機能まで完全テスト
  test('レベル選択ドロップダウンでレベルを変更できる', async ({ page }) => {
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

    // クリック前にスクリーンショットを撮る
    await page.screenshot({ path: 'test-results/dropdown-open.png' });

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
