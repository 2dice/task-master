import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ランダムなTailwind背景色クラスを返すユーティリティ
export const getRandomColor = (): string => {
  const colors = [
    'bg-red-200',
    'bg-pink-200',
    'bg-purple-200',
    'bg-indigo-200',
    'bg-blue-200',
    'bg-cyan-200',
    'bg-teal-200',
    'bg-green-200',
    'bg-lime-200',
    'bg-yellow-200',
    'bg-amber-200',
    'bg-orange-200',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
