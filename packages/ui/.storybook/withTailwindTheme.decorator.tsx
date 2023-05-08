import React, { useEffect } from "react";
import { StoryContext, StoryFn } from "@storybook/react";

export const DEFAULT_THEME = "light";

export const withTailwindTheme = (Story: StoryFn, context: StoryContext) => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;

    htmlTag.setAttribute("data-mode", theme || DEFAULT_THEME);
  }, [theme]);

  return <Story />;
};

