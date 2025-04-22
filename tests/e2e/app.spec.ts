import { test, expect } from '@playwright/test';

// タスクマスターアプリの基本的なUIテスト
test.describe('タスクマスターアプリの基本テスト', () => {
  
  // 各テストの前にローカルサーバーのホームページに移動
  test.beforeEach(async ({ page }) => {
    // 開発サーバーのURLを指定（デフォルトはlocalhost:5173）
    await page.goto('http://localhost:5173/');
  });

  // タイトルが正しく表示されるかテスト
  test('アプリのタイトルが表示される', async ({ page }) => {
    // h1タグでタイトルを確認
    await expect(page.locator('h1')).toContainText('タスクマスター');
  });

  // ボタンが表示され、クリックできるかテスト
  test('カウントボタンが機能する', async ({ page }) => {
    // 最初のカウントボタンを取得
    const button = page.locator('button').first();
    
    // 初期状態は「カウント: 0」のはず
    await expect(button).toContainText('カウント: 0');
    
    // ボタンをクリック
    await button.click();
    
    // クリック後は「カウント: 1」になるはず
    await expect(button).toContainText('カウント: 1');
  });

  // shadcn/uiのボタンが表示されるかテスト
  test('shadcn/uiのボタンが表示される', async ({ page }) => {
    // shadcn/uiボタンを確認
    await expect(page.getByText('shadcn/ui Button - デフォルト')).toBeVisible();
    
    // バリエーションボタンを確認
    await expect(page.getByText('アウトライン')).toBeVisible();
    await expect(page.getByText('セカンダリー')).toBeVisible();
    await expect(page.getByText('デストラクティブ')).toBeVisible();
    await expect(page.getByText('ゴースト')).toBeVisible();
  });
});
