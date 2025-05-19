/**
 * Playwrightのグローバルセットアップファイル
 * テスト実行前の共通セットアップを行います
 */
// テスト実行前の共通セットアップを提供するファイル

async function globalSetup() {
  // テスト実行前の共通セットアップ処理
  console.log('🚀 テスト実行を開始します...');

  // ここで必要なグローバルセットアップを行う
  // 例: テスト環境の準備、共通データのセットアップなど

  // タイムスタンプをログに記録（実行時間計測用）
  console.log(`⏱️ テスト開始時間: ${new Date().toISOString()}`);
}

export default globalSetup;
