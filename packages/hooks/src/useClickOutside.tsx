import { useEffect, RefObject, ForwardedRef } from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T> | ForwardedRef<T>,
  handler: () => void,
  exceptElRef?: RefObject<HTMLElement>
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (typeof ref === "function" || typeof ref === null) {
        return;
      }
      const el = ref?.current;
      const isIncludeEl = !el || el.contains(e?.target as HTMLElement);
      const isIncludeExceptEl =
        exceptElRef?.current &&
        exceptElRef?.current?.contains(e?.target as HTMLElement);

      if (isIncludeEl || isIncludeExceptEl) {
        return;
      }
      handler();
    };

    window.addEventListener("mousedown", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
    };
  }, [exceptElRef, handler, ref]);
};

export default useClickOutside;
