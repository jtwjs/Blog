import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Select, { type SelectProps, type Option } from "./Select.component";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: [
        "id",
        "value",
        "label",
        "placeholder",
        "onValueChange",
        "onOpenChange",
      ],
    },
    componentSource: {
      code: 'export default "This is my code"',
      language: "typescript",
    },
  },
};

export default meta;

const options: Option[] = Array.from({ length: 8 }, (_, i) => ({
  label: `option-${i}`,
  value: `opt${i}`,
}));

type Story = StoryObj<typeof Select>;

const StorySelect = (args: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option>();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleVlaueCahnge = (value: string) => {
    const option = options.find((p) => p.value === value);
    setSelectedValue(option);
  };

  return (
    <Select
      {...args}
      className="flex flex-col gap-y-2"
      label="storybook"
      selectedOption={selectedValue}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      onValueChange={handleVlaueCahnge}
    >
      <Select.Content>
        {options.map(({ value, label }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select.Content>
    </Select>
  );
};

export const Default: Story = {
  args: {
    id: "test",
    placeholder: "placeholder Text",
    disabled: false,
    onValueChange: action("value changed"),
    onOpenChange: action("open changed"),
  },
  render: (args) => StorySelect(args),
};
