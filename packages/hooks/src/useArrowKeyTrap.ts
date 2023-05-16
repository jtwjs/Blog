import type { RefObject } from "react";

type KeyEvent = React.KeyboardEvent | KeyboardEvent;

type Listener = (e: KeyEvent) => void;

type Direction = "col" | "row";

interface UseTabsKeyTrap {
  handleKeyListener: Listener;
  getKeyListenerMap: (direction: Direction) => Map<string, Listener>;
}

export default function useArrowKeyTrap(
  ref: RefObject<HTMLElement>,
  selector: string,
  direction: Direction = "col"
): UseTabsKeyTrap {
  const getParseKeyTrap = (e: KeyEvent) => {
    const nodeList = Array.from(
      (ref.current as HTMLElement).querySelectorAll(selector)
    );
    const eventTarget = e.target;
    const firstNdoe = nodeList[0] as HTMLElement;
    const lastNode = nodeList.at(-1) as HTMLElement;
    const isFirstNdoe = Object.is(eventTarget, firstNdoe);
    const isLastNode = Object.is(eventTarget, lastNode);
    const index = Array.from(nodeList).indexOf(eventTarget as HTMLElement);
    const prevNode = nodeList[Math.max(index - 1, 0)] as HTMLElement;
    const nextNode = nodeList[
      Math.min(index + 1, nodeList.length - 1)
    ] as HTMLElement;

    return {
      firstNdoe,
      lastNode,
      isFirstNdoe,
      isLastNode,
      prevNode,
      nextNode,
    };
  };

  const handleSelectedToPrevNode: Listener = (e) => {
    if (!ref.current) {
      return;
    }
    e.preventDefault();
    const { isFirstNdoe, lastNode, prevNode } = getParseKeyTrap(e);
    const targetEl = isFirstNdoe ? lastNode : prevNode;
    targetEl.focus();
  };

  const handleSelectedToNextNode: Listener = (e) => {
    if (!ref.current) {
      return;
    }
    e.preventDefault();
    const { isLastNode, firstNdoe, nextNode } = getParseKeyTrap(e);
    const targetEl = isLastNode ? firstNdoe : nextNode;
    targetEl.focus();
  };

  const handleFocusFirstNode: Listener = (e) => {
    if (!ref.current) {
      return;
    }
    e.preventDefault();
    const { firstNdoe } = getParseKeyTrap(e);
    firstNdoe.focus();
  };

  const handleFocusLastNode: Listener = (e) => {
    if (!ref.current) {
      return;
    }
    e.preventDefault();

    const { lastNode } = getParseKeyTrap(e);
    lastNode.focus();
  };

  const getKeyListenerMap = (direction: Direction) => {
    const rowKeyListenerMap = new Map<string, Listener>([
      ["Left", handleSelectedToPrevNode],
      ["ArrowLeft", handleSelectedToPrevNode],
      ["Right", handleSelectedToNextNode],
      ["ArrowRight", handleSelectedToNextNode],
      ["Home", handleFocusFirstNode],
      ["End", handleFocusLastNode],
    ]);

    const colKeyListenerMap = new Map<string, Listener>([
      ["Up", handleSelectedToPrevNode],
      ["ArrowUp", handleSelectedToPrevNode],
      ["Down", handleSelectedToNextNode],
      ["ArrowDown", handleSelectedToNextNode],
      ["Home", handleFocusFirstNode],
      ["End", handleFocusLastNode],
    ]);

    return direction === "col" ? colKeyListenerMap : rowKeyListenerMap;
  };

  const handleKeyListener: Listener = (e) => {
    const keyListenerMap = getKeyListenerMap(direction);

    const listener = keyListenerMap.get(e.key);

    if (listener) {
      listener(e);
    }
  };

  return {
    handleKeyListener,
    getKeyListenerMap,
  };
}
