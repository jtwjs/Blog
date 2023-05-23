import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import DarkModeSwitch, {
  type DarkModeSwitchProps,
} from "./DarkModeSwitch.component";

const meta: Meta<typeof DarkModeSwitch> = {
  title: "Switch/DarkMode",
  component: DarkModeSwitch,
  parameters: {
    controls: {
      exclude: ["onToggle"],
    },
    componentSource: {
      code: 'export default "This is my code"',
      language: "typescript",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DarkModeSwitch>;

const StoryDarkModeSwitch = (args: DarkModeSwitchProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
    action("toggle dark mode");
  };

  return (
    <DarkModeSwitch
      {...args}
      isDarkMode={isDarkMode}
      onToggle={handleDarkModeToggle}
    />
  );
};

export const Default: Story = {
  args: {},
  render: (args) => StoryDarkModeSwitch(args),
};
