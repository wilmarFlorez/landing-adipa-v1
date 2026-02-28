import { useEffect, type RefObject } from "react";

/**
 * Traps keyboard focus within a container element while it is open.
 *
 * Behaviour:
 * - Auto-focuses the first focusable element when the container opens.
 * - Wraps Tab / Shift+Tab so focus stays within the container.
 * - Calls onClose and returns focus to returnFocusRef when Escape is pressed.
 *
 * @param isOpen         - Whether the container is currently visible.
 * @param containerRef   - Ref of the element that receives trapped focus.
 * @param returnFocusRef - Ref of the element that should receive focus on close.
 * @param onClose        - Callback invoked when the user presses Escape.
 */
export function useFocusTrap(
  isOpen: boolean,
  containerRef: RefObject<HTMLElement | null>,
  returnFocusRef: RefObject<HTMLElement | null>,
  onClose: () => void,
): void {
  useEffect(() => {
    if (!isOpen) return;

    const focusable = containerRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusable?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        returnFocusRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, containerRef, returnFocusRef, onClose]);
}
