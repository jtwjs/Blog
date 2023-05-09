import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { AiFillGithub } from "react-icons/ai";

import { Button } from "./Button.component";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["className", "IconOnly", "onClick"] },
    componentSource: {
      code: 'export default "This is my code"',
      language: "typescript",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Pirmary: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    label: "Primary Button",
    onClick: action("clicked"),
  },
};

export const Secondary: Story = {
  args: {
    ...Pirmary.args,
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Outlined: Story = {
  args: {
    ...Pirmary.args,
    variant: "outlined",
    label: "Outlined Button",
  },
};

export const Ghost: Story = {
  args: {
    ...Pirmary.args,
    variant: "ghost",
    label: "Ghost Button",
  },
};

export const Icon: Story = {
  args: {
    ...Pirmary.args,
    variant: "ghost",
    IconOnly: <AiFillGithub />,
    label: "깃허브 바로가기",
  },
};
