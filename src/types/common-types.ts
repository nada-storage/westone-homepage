/**
 * Common Types & Utilities
 * 공통 타입 및 유틸리티 타입
 * 
 * @module types/common
 */

// ============================================================================
// Generic Utility Types
// ============================================================================

/**
 * ID 타입 (Generic)
 * Generic ID type with brand
 */
export type ID<T extends string = string> = string & { __brand: T };

/**
 * DeepPartial 유틸리티 타입
 * Make all properties of T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * WithRequired 유틸리티 타입
 * Make specified properties required
 * 
 * @example
 * type User = { name?: string; email?: string };
 * type UserWithName = WithRequired<User, 'name'>;
 * // Result: { name: string; email?: string }
 */
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/**
 * Nullable 유틸리티 타입
 * Make properties nullable
 */
export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

/**
 * NonNullable 유틸리티 타입 (재정의)
 * Remove null and undefined from type
 */
export type NonNullableType<T> = T extends null | undefined ? never : T;

// ============================================================================
// Common Value Types
// ============================================================================

/**
 * RGB 색상 타입
 * RGB color format
 */
export type RGBColor = `rgb(${number}, ${number}, ${number})`;

/**
 * Hex 색상 타입
 * Hexadecimal color format
 */
export type HexColor = `#${string}`;

/**
 * 색상 유니온 타입
 * Color union type
 */
export type Color = RGBColor | HexColor | string;

/**
 * URL 타입
 * URL string type
 */
export type URL = string;

/**
 * 날짜 문자열 타입
 * Date string in ISO format
 */
export type DateString = string;

// ============================================================================
// Result Type (Error Handling)
// ============================================================================

/**
 * 성공 결과
 * Success result type
 */
export interface Success<T> {
  success: true;
  data: T;
}

/**
 * 실패 결과
 * Failure result type
 */
export interface Failure {
  success: false;
  error: Error;
}

/**
 * Result 타입 (함수형 에러 핸들링)
 * Result type for functional error handling
 * 
 * @example
 * function divide(a: number, b: number): Result<number> {
 *   if (b === 0) {
 *     return { success: false, error: new Error('Division by zero') };
 *   }
 *   return { success: true, data: a / b };
 * }
 */
export type Result<T> = Success<T> | Failure;