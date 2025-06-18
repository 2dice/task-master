/**
 * タイムライン関連のGSAPアニメーション
 * ピンチズーム機能と時間軸の視覚的効果
 */
import { gsap } from 'gsap';

/**
 * ピンチズーム状態を管理するオブジェクト
 */
type PinchState = {
  active: boolean;
  initialDistance: number;
  initialScale: number;
  element: HTMLElement | null;
  containerWidth: number;
  currentScale: number;
  minScale: number;
  maxScale: number;
};

/**
 * ピンチズーム機能の初期化
 * @param element ズーム対象のHTML要素
 * @param options ズームオプション
 */
export const initPinchZoom = (
  element: HTMLElement,
  options: {
    minScale?: number;
    maxScale?: number;
    // eslint-disable-next-line no-unused-vars
    onZoomChange?: (scale: number) => void;
  } = {}
): (() => void) => {
  const pinchState: PinchState = {
    active: false,
    initialDistance: 0,
    initialScale: 1,
    element,
    containerWidth: element.clientWidth,
    currentScale: 1,
    minScale: options.minScale || 0.5,
    maxScale: options.maxScale || 2,
  };

  // タッチイベント開始
  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length !== 2) return;

    e.preventDefault();

    // 2本指でのピンチ開始
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];

    // 2点間の距離を計算
    const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);

    pinchState.active = true;
    pinchState.initialDistance = distance;
    pinchState.initialScale = pinchState.currentScale;

    // デバッグログ
    console.log(
      'ピンチズーム開始: 初期距離 =',
      distance,
      '初期スケール =',
      pinchState.initialScale
    );
  };

  // タッチ移動中
  const handleTouchMove = (e: TouchEvent) => {
    if (!pinchState.active || e.touches.length !== 2) return;

    e.preventDefault();

    const touch1 = e.touches[0];
    const touch2 = e.touches[1];

    // 現在の2点間の距離
    const currentDistance = Math.hypot(
      touch1.clientX - touch2.clientX,
      touch1.clientY - touch2.clientY
    );

    // スケール変化率を計算
    const scale = Math.min(
      Math.max(
        (currentDistance / pinchState.initialDistance) * pinchState.initialScale,
        pinchState.minScale
      ),
      pinchState.maxScale
    );

    // スケールをアニメーションなしで即時適用
    pinchState.currentScale = scale;
    gsap.set(element, {
      width: `${pinchState.containerWidth * scale}px`,
      ease: 'power1.out',
    });

    // コールバックがあれば実行
    if (options.onZoomChange) {
      options.onZoomChange(scale);
    }

    // デバッグログ
    console.log('ピンチズーム中: 現在距離 =', currentDistance, '新スケール =', scale);
  };

  // タッチ終了
  const handleTouchEnd = () => {
    if (!pinchState.active) return;

    pinchState.active = false;

    // タスク名の表示/非表示調整などの後処理
    const finalScale = pinchState.currentScale;

    // スケールによる表示調整アニメーション
    gsap.to(element, {
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        // ズーム完了後の追加処理
        console.log('ピンチズーム完了: 最終スケール =', finalScale);
      },
    });
  };

  // イベントリスナーの登録
  element.addEventListener('touchstart', handleTouchStart, { passive: false });
  element.addEventListener('touchmove', handleTouchMove, { passive: false });
  element.addEventListener('touchend', handleTouchEnd);

  // クリーンアップ関数を返す
  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
    element.removeEventListener('touchmove', handleTouchMove);
    element.removeEventListener('touchend', handleTouchEnd);
  };
};

/**
 * タイムラインのスケールに応じてタスク名表示を調整
 * @param taskElementsOrContainer タスク要素の配列またはコンテナ要素
 * @param scale 現在のスケール値
 */
export const adjustTaskNameDisplay = (
  taskElementsOrContainer: HTMLElement[] | HTMLElement,
  scale: number
): void => {
  // コンテナが渡された場合は、その中の全てのタスク要素を取得
  const processElements = (elements: HTMLElement[]) => {
    elements.forEach((task) => {
      const taskName = task.querySelector('.task-name') as HTMLElement;
      if (!taskName) return;

      if (scale < 0.7) {
        // 小さいスケールではタスク名を非表示
        gsap.to(taskName, {
          autoAlpha: 0,
          duration: 0.2,
        });
      } else {
        // 通常スケールではタスク名を表示
        gsap.to(taskName, {
          autoAlpha: 1,
          duration: 0.2,
        });
      }
    });
  };

  if (Array.isArray(taskElementsOrContainer)) {
    // 配列の場合はそのまま処理
    processElements(taskElementsOrContainer);
  } else {
    // 単体要素の場合は、その内部のタスク要素を取得
    const taskElements = Array.from(
      taskElementsOrContainer.querySelectorAll('[data-testid^="task-item-"]')
    ) as HTMLElement[];
    processElements(taskElements);
  }
};

/**
 * タイムライン全体のトランジションエフェクト
 * @param container タイムラインコンテナ要素
 */
export const playTimelineTransitionEffect = (container: HTMLElement): void => {
  // タイムラインのトランジションエフェクト
  gsap.fromTo(
    container,
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.2)' }
  );

  // タイムラインの子要素を順番にフェードイン
  const children = Array.from(container.children) as HTMLElement[];
  gsap.set(children, { opacity: 0, y: 10 });

  gsap.to(children, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power2.out',
  });
};
