## プロジェクト開始時の実行手順

- ユーザーから提供された`./AI_Docs/spec.md`でアプリの仕様を確認する
- `./AI_Docs/design.md`の作成
  - `./AI_Docs/spec.md`の内容を元に、どのような設計でどのようなコードを書くか計画を記載する。
  - `./AI_Docs/spec.md`について曖昧な部分はユーザーに質問して明確にすること。
  - `./AI_Docs/spec.md`は削除されるため、情報は省略せず、そのまま使える部分はそのまま抜き出して抜け漏れがないようにすること。
  - 内容には機能要件・仮のパーツサイズとレイアウト・技術スタック・アーキテクチャ設計・ディレクトリ構造などを含む。
  - 設計時に参照しやすいような情報の構造にすること。
  - 機能要件を満たす場合の実際の表示UIやデータの状態も具体例とともに記載すること。
  - 具体的なコードの記載は最小限にすること。
  - 以下の例を参考に作成する。
    @https://github.com/YuheiNakasaka/sprint-calendar/blob/main/README.md
    @https://github.com/karaage0703/docubot/blob/main/docs/design.md
- `./AI_Docs/step.md`の作成
  - `./AI_Docs/design.md`のゴールに向けて実装計画を作成し記載する。
  - 各ステップは1つのプルリクエスト、あるいはgit commitとして適切な粒度になるよう細かい独立した粒度で設定し、段階的に拡張するように設定する。
  - 粒度の例：
    - step1: 主に環境構築を目的とし、最小限のページを開発環境で表示。
    - step2: githubと連携しgithub pagesでの表示確認。
    - step3: ESLintとPrettierの導入・動作確認・dev/buildコマンドへの組み込み。
    - step4: playwrightの導入とテスト実装(consoleエラー・警告の監視、表示内容のテスト)。
  - step内で1つの機能を実装するとき、分割できそうならstep1-1,step1-2のように階層化しても良い。
  - 各ステップにはステップを実行するために必要な設計情報の参照先・各ステップの目標・実行するタスク・具体的なテストケース・実装が正しく動作したことを確認する方法・時系列のTODOリスト・補足(必要であれば)を必ず記載すること。
  - そのステップで必要な設計情報の参照先は、`./AI_Docs/design.md`の項のタイトルを記載する。(例：`./AI_Docs/design.md` 1. アプリケーション概要)
    - 参照する行数はdesign_toc.mdに記載された行数の範囲に限定してview_line_rangeコマンド等で読み込むよう記載する。
    - 各ステップで参照する情報は、ステップごとにリセットされるため、そのステップで必要な情報をすべて含むようにすること。
    - 参照先は相対パスで記載すること。
  - デバッグはplaywright実行時にターミナルへ出力する情報を元に行うこと。
  - そのためにplaywrightを早い段階で導入し、導入後のステップではどのようなテストを書くかの概要を記載すること。
  - step.mdの内容は考慮漏れがなく妥当なものであるか、複数の視点から徹底的に考え、合理的かつ説明可能でなければならない。これはプロジェクトの成否を左右する最も重要なプロセスだ。

## GitHub Pages デプロイに関する注意事項

- ViteプロジェクトをGitHub Pagesにデプロイする際は、`vite.config.js`に`base`と`build.outDir`の設定が必要。
  - `base`は、`./` (相対パス)に設定する。
  - `build.outDir`は、GitHub Pagesで認識されるように`docs`に設定する。

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages向けに相対パスを使用
  build: {
    outDir: 'docs', // GitHub Pages用のビルド出力ディレクトリ
  },
});
```

- GitHubリポジトリの設定

  1. GitHubリポジトリの Settings タブを開く
  2. 左メニューの "Pages" を選択
  3. Source を "Deploy from a branch" に設定
  4. Branch を "main" と "/docs" に設定
  5. Save ボタンをクリック

- デプロイの手順

  1. プロジェクトのルートディレクトリで `npm run build` を実行
  2. 生成された `docs` ディレクトリを含めて、変更をコミット
  3. GitHubにプッシュしてデプロイ完了
  4. 数分後に `https://<username>.github.io/<repository>` でアクセス可能

- `package.json`に`homepage`プロパティを追加する。
  - `"homepage": "https://<GitHubのユーザー名>.github.io/<リポジトリ名>/"`
- GitHub Pagesの設定で、Sourceを`main`ブランチ、ディレクトリを`/docs`に設定する。
