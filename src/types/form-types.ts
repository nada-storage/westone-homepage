import type React from 'react';

// ============================================================================
// Form Data Types
// ============================================================================

/**
 * 연락처 폼 데이터
 */
export interface ContactFormData {
  name: string;
  email: string;
  source: string;
  stage: string;
  message: string;
  newsletter: boolean;
}

// ============================================================================
// Input Component Props
// ============================================================================

/**
 * Input 컴포넌트 Props
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/**
 * TextArea 컴포넌트 Props
 */
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

/**
 * Select 컴포넌트 Props
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}