/**
 * Animations should always play on this portfolio.
 *
 * motion's built-in `useReducedMotion()` reads the OS-level
 * "reduce motion" / "remove animations" setting. Many Android phones
 * (and battery-saver modes) enable it by default, which silently turned
 * every animation off on mobile. This replacement keeps the same API
 * but always returns `false`.
 */
export function useReducedMotion(): boolean {
  return false;
}
