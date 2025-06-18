/**
 * 待ち時間タスクのGSAPアニメーションエフェクト
 * 待ち時間タスクを視覚的に目立たせる特殊表示を実装
 */
import { gsap } from 'gsap';

/**
 * 待ち時間タスクの点滅エフェクト
 * @param element 対象のHTML要素
 * @param options エフェクトのオプション
 * @returns アニメーション停止関数
 */
export const createWaitTaskPulseEffect = (
  element: HTMLElement,
  options: {
    color?: string;
    duration?: number;
    intensity?: number;
  } = {}
): (() => void) => {
  const color = options.color || 'rgba(99, 102, 241, 0.4)'; // デフォルト: インディゴ
  const duration = options.duration || 1.5;
  const intensity = options.intensity || 0.5;

  // 点滅エフェクト用のオーバーレイを作成
  const overlay = document.createElement('div');
  overlay.className = 'wait-task-overlay';
  // オーバーレイを背面に配置してクリックを邪魔しないようにする
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = color;
  overlay.style.borderRadius = 'inherit';
  overlay.style.pointerEvents = 'none';
  overlay.style.opacity = '0';

  // 要素に相対位置を設定し、オーバーレイを追加
  const originalPosition = element.style.position;
  if (element.style.position !== 'relative' && element.style.position !== 'absolute') {
    element.style.position = 'relative';
  }
  element.appendChild(overlay);

  // 点滅アニメーションの作成と開始
  const animation = gsap.to(overlay, {
    opacity: intensity,
    duration: duration / 2,
    repeat: -1, // 無限リピート
    yoyo: true, // 往復アニメーション
    ease: 'sine.inOut',
  });

  // 停止用関数を返す
  return () => {
    animation.kill(); // アニメーションを停止
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        element.removeChild(overlay);
        element.style.position = originalPosition;
      },
    });
  };
};

/**
 * 待ち時間タスクの進行状況表示アニメーション
 * @param progressElement プログレスバー要素
 * @param durationSeconds 待ち時間（秒）
 * @param onComplete 完了時のコールバック
 */
export const animateWaitTaskProgress = (
  progressElement: HTMLElement,
  durationSeconds: number,
  onComplete?: () => void
): void => {
  // 初期状態
  gsap.set(progressElement, { width: '0%' });

  // プログレスバーアニメーション
  gsap.to(progressElement, {
    width: '100%',
    duration: durationSeconds,
    ease: 'linear',
    onComplete: () => {
      // 完了時のエフェクト
      gsap.to(progressElement, {
        backgroundColor: '#10b981', // グリーン
        duration: 0.3,
      });

      // 完了時コールバック
      if (onComplete) {
        onComplete();
      }
    },
  });
};

/**
 * 待ち時間領域の点線アニメーション
 * @param element 点線で表示する要素
 * @returns アニメーション停止関数
 */
export const createDashedBorderAnimation = (element: HTMLElement): (() => void) => {
  // 元のスタイルを保存
  const originalBorder = element.style.border;
  const originalDashOffset = element.style.backgroundPositionX;

  // 点線の背景を設定
  element.style.background = `
    repeating-linear-gradient(
      90deg,
      rgba(99, 102, 241, 0.2),
      rgba(99, 102, 241, 0.2) 6px,
      transparent 6px,
      transparent 12px
    )
  `;

  // 点線アニメーション
  const animation = gsap.to(element, {
    backgroundPositionX: '12px',
    duration: 0.5,
    repeat: -1,
    ease: 'linear',
  });

  // 停止用関数を返す
  return () => {
    animation.kill();
    element.style.background = '';
    element.style.border = originalBorder;
    element.style.backgroundPositionX = originalDashOffset;
  };
};
