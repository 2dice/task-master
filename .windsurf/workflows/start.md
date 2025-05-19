---
description: ステップ開始時の実行手順
---

1. `./AI_Docs/step.md`と`./AI_Docs/design.md`の必要な部分だけを読み出すために、`./AI_Docs/step_toc.md`と`./AI_Docs/design_toc.md`で各項目の行数範囲を確認する。
2. 確認した行数範囲をもとに`./AI_Docs/step.md`の"ステップ概要"と、これから行うステップ±1(step3ならstep2,3,4)の内容をview_fileコマンド等で把握すること。
3. `./AI_Docs/step.md`に記載されている"参照"は、`./AI_Docs/design_toc.md`で確認した行数範囲をもとに`./AI_Docs/design.md`の必要な項目だけ取得すること。
4. ステップの記載内容から./AI_Docs内にあるTODO.mdにTODOリストを作成し、実装を開始する。
