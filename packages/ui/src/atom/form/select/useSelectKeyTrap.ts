import { useArrowKeyTrap, useClickOutside } from "@jtwjs/hooks";
import { useRef, useCallback, useEffect } from "react";

export default function useSelectKeyTrap(
  isOpen: boolean,
  onOpenChange: (open: boolean) => void
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const selectContentRef = useRef<HTMLUListElement>(null);

  const handleClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  const { getKeyListenerMap } = useArrowKeyTrap(
    selectContentRef,
    "[role=option]"
  );
  useClickOutside(selectContentRef, handleClose, containerRef);

  useEffect(() => {
    if (isOpen && selectContentRef.current) {
      const selectedOption = selectContentRef.current.querySelector(
        "[aria-selected=true]"
      );
      const focusEl =
        selectedOption ??
        selectContentRef.current.querySelector("[role=option]");
      setTimeout(() => (focusEl as HTMLElement)?.focus());
    }

    if (!isOpen && openerRef.current) {
      openerRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      const map = getKeyListenerMap("col");
      map.set("Escape", handleClose);
      map.set("Tab", handleClose);

      map.get(e.key)?.(e);
    };
    const containerEl = containerRef.current;

    containerEl?.addEventListener("keydown", keyListener);

    return () => {
      containerEl?.removeEventListener("keydown", keyListener);
    };
  }, [getKeyListenerMap, handleClose]);

  return {
    containerRef,
    openerRef,
    selectContentRef,
  };
}
