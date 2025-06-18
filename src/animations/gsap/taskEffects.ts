/**
 * GSAPを使用したタスク関連のアニメーションエフェクト
 * 結合時や解除時の派手なエフェクトを実装
 */
import { gsap } from 'gsap';

/**
 * タスク結合時の派手なエフェクト
 * @param element 対象のHTML要素
 * @param options エフェクトのオプション
 */
export const playTaskCombineEffect = (
  element: HTMLElement,
  options?: {
    x?: number;
    y?: number;
    color?: string;
  }
): void => {
  // パーティクルエフェクト用のスタイルをヘッドに追加
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .combine-particle {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #60a5fa;
      z-index: 1000;
      pointer-events: none;
    }
  `;
  document.head.appendChild(styleEl);

  // タイムラインコンテナ要素を取得
  const timelineContainer = document.querySelector('.relative.bg-slate-50') as HTMLElement;
  if (!timelineContainer) {
    console.error('Timeline container not found');
    return;
  }

  // コンテナの座標を取得
  const containerRect = timelineContainer.getBoundingClientRect();

  // パーティクルを追加する親要素をタイムラインコンテナに固定
  const particleContainer = timelineContainer;

  // 結合アニメーション
  gsap.to(element, {
    scale: 1.2,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  // パーティクルの基準点を計算
  let baseX, baseY;

  if (options && options.x !== undefined && options.y !== undefined) {
    // 指定された座標があれば使用
    baseX = options.x;
    baseY = options.y;
  } else {
    // 指定がなければ要素の中心を使用
    const rect = element.getBoundingClientRect();
    baseX = rect.width / 2;
    baseY = rect.height / 2;

    // 要素とタイムラインコンテナの相対位置を計算
    if (element !== timelineContainer) {
      const elementRect = element.getBoundingClientRect();
      baseX = elementRect.left - containerRect.left + baseX;
      baseY = elementRect.top - containerRect.top + baseY;
    }
  }

  // 色の指定
  let particleColor = '#60a5fa';
  if (options && options.color) {
    if (options.color.startsWith('bg-')) {
      // Tailwindの色クラスをCSS変数に変換
      const colorName = options.color.replace('bg-', '');
      if (colorName === 'blue-200') particleColor = '#93c5fd';
      else if (colorName === 'green-200') particleColor = '#a7f3d0';
      else if (colorName === 'yellow-200') particleColor = '#fde68a';
      else if (colorName === 'red-200') particleColor = '#fecaca';
      else if (colorName === 'purple-200') particleColor = '#ddd6fe';
      else if (colorName === 'indigo-200') particleColor = '#c7d2fe';
    } else {
      particleColor = `#${options.color.replace(/-/g, '')}`;
    }
  }

  // パーティクル生成
  const particles: HTMLDivElement[] = [];
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'combine-particle';
    particle.style.backgroundColor = particleColor;
    particle.style.position = 'absolute';
    particle.style.left = `${baseX}px`;
    particle.style.top = `${baseY}px`;
    particleContainer.appendChild(particle);
    particles.push(particle);

    // パーティクルのアニメーション
    gsap.to(particle, {
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      opacity: 0,
      duration: 0.8,
      delay: Math.random() * 0.2,
      ease: 'power2.out',
      onComplete: () => {
        particleContainer.removeChild(particle);
        // 最後のパーティクルが終わったらスタイル要素も削除
        if (particles.indexOf(particle) === particles.length - 1) {
          document.head.removeChild(styleEl);
        }
      },
    });
  }
};

/**
 * タスク解除時の分解エフェクト
 * @param element 対象のHTML要素
 * @param onComplete 完了時に実行するコールバック関数
 */
export const playTaskDissolveEffect = (element: HTMLElement, onComplete?: () => void): void => {
  // フラグメント用のスタイルをヘッドに追加
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .task-fragment {
      position: absolute;
      z-index: 2147483647 !important;
      pointer-events: none;
    }
  `;
  document.head.appendChild(styleEl);

  const fragments: HTMLDivElement[] = [];
  const rect = element.getBoundingClientRect();
  const fragmentSize = 10;
  const rows = Math.ceil(rect.height / fragmentSize);
  const cols = Math.ceil(rect.width / fragmentSize);

  // 元の要素の背景色を取得
  const computedStyle = window.getComputedStyle(element);
  const borderColor = computedStyle.borderColor;

  // 要素を小さなフラグメントに分割
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const fragment = document.createElement('div');
      fragment.className = 'task-fragment';
      fragment.style.width = `${fragmentSize}px`;
      fragment.style.height = `${fragmentSize}px`;
      fragment.style.position = 'absolute';
      fragment.style.top = `${rect.top + i * fragmentSize}px`;
      fragment.style.left = `${rect.left + j * fragmentSize}px`;
      // debug: 赤色で表示
      fragment.style.backgroundColor = 'red';
      fragment.style.borderRadius = '2px';

      // 外周のフラグメントに枠線を付ける
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        fragment.style.border = `0.5px solid ${borderColor}`;
      }

      document.body.appendChild(fragment);
      fragments.push(fragment);
    }
  }

  // 元の要素を非表示
  gsap.set(element, { opacity: 0 });

  // フラグメントのアニメーション
  let completedCount = 0;
  const totalFragments = fragments.length;

  fragments.forEach((fragment) => {
    gsap.to(fragment, {
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 150,
      opacity: 0,
      rotation: Math.random() * 360,
      delay: Math.random() * 0.3,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        document.body.removeChild(fragment);
        completedCount++;

        // 全てのフラグメントが消えたら
        if (completedCount === totalFragments) {
          // スタイル要素を削除
          document.head.removeChild(styleEl);

          // コールバックがあれば実行
          if (onComplete) {
            onComplete();
          }
        }
      },
    });
  });
};

/**
 * 全画面エラーエフェクト - アプリ全体にエラーエフェクトを適用
 * storeから直接呼び出されるので全画面に影響する
 */
export const playGlobalErrorEffect = (): void => {
  // 全画面オーバーレイを作成
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
  overlay.style.zIndex = '9999'; // 非常に高いz-indexで最前面に表示
  overlay.style.pointerEvents = 'none'; // クリックイベントは通す
  document.body.appendChild(overlay);

  // 画面全体を振動させる
  gsap.to('body', {
    x: 10,
    duration: 0.05,
    repeat: 10,
    yoyo: true,
    ease: 'power1.inOut',
    onComplete: () => {
      // アニメーション完了後、オーバーレイをフェードアウト
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        onComplete: () => {
          // オーバーレイを削除
          document.body.removeChild(overlay);
        },
      });
    },
  });
};

/**
 * タスク配置エラー時の視覚的フィードバック
 * @param element 対象のHTML要素
 */
export const playTaskErrorEffect = (element: HTMLElement): void => {
  // エラー要素が存在する場合は、それ自体にもエフェクトを適用
  if (element) {
    // 元のz-indexを保存しておく
    const originalZIndex = element.style.zIndex || '';
    // 一時的にz-indexを上げる
    element.style.zIndex = '10000';

    // 振動アニメーション
    gsap.to(element, {
      x: 5,
      duration: 0.05,
      repeat: 8,
      yoyo: true,
    });

    // 一定時間後にz-indexを元に戻す
    setTimeout(() => {
      element.style.zIndex = originalZIndex;
    }, 2000);
  }

  // 全画面エフェクトも適用
  playGlobalErrorEffect();
};
