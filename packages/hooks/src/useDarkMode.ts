import { Storage } from "@jtwjs/utils";
import { useState, useMemo, useCallback, useEffect } from "react";

import useMediaQuery from "./useMediaQuery";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const enum DarkMode {
  dark = "dark",
  light = "light",
}

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
}

function useDarkMode(): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  const darkmodeStorage = useMemo(
    () => new Storage("darkmode", isDarkOS ? DarkMode.dark : DarkMode.light),
    [isDarkOS]
  );
  const [theme, setTheme] = useState(darkmodeStorage.load());

  const handleToggle = useCallback(() => {
    setTheme((prev) =>
      prev === DarkMode.dark ? DarkMode.light : DarkMode.dark
    );
  }, []);

  useEffect(() => {
    darkmodeStorage.save(theme);
    const htmlTag = document.documentElement;
    htmlTag.setAttribute("data-mode", theme);
  }, [theme, darkmodeStorage]);

  return {
    isDarkMode: theme === DarkMode.dark,
    toggle: handleToggle,
  };
}

export default useDarkMode;
