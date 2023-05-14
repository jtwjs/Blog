import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input.component";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["className", "placeholder", "disabled"] },
    componentSource: {
      code: 'export default "This is my code"',
      language: "typescript",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-y-2">
      <Input placeholder="placeholder Text" />
      <Input value="with value" />
      <Input disabled value="disabled" />
    </div>
  ),
};
