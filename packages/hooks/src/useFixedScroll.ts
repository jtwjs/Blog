import { useEffect } from "react";

export default function useFixedScroll(trigger: boolean) {
  useEffect(() => {
    if (trigger) {
      document.body.style.cssText =
        "overflow-y: hidden; touch-action: none; -ms-touch-action: none; -webkit-overflow-scrolling: none; overscroll-behavior: none;";
    } else {
      document.body.style.cssText = "overflow-y: overlay;";
    }

    return () => {
      document.body.style.cssText = "overflow-y: overlay;";
    };
  }, [trigger]);
}
