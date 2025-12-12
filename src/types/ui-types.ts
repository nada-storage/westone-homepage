import type React from 'react';

// ============================================================================
// Cursor Types
// ============================================================================

/**
 * 커서 타입 값
 */
export const CursorType = {
  Default: 'default',
  Play: 'play',
  View: 'view',
  Drag: 'drag',
  Hover: 'hover',
} as const;

/**
 * 커서 타입
 */
export type CursorTypeValue = (typeof CursorType)[keyof typeof CursorType];

/**
 * 커서 컨텍스트 타입
 */
export interface CursorContextType {
  cursorType: CursorTypeValue;
  setCursorType: (type: CursorTypeValue) => void;
}

// ============================================================================
// Component Props
// ============================================================================

/**
 * 스크롤 리빌 Props
 */
export interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

// ============================================================================
// News & Menu Types
// ============================================================================

/**
 * 뉴스 아이템
 */
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
  image?: string;
}

/**
 * 메뉴 아이템
 */
export interface MenuItem {
  label: string;
  href: string;
  description: string;
}