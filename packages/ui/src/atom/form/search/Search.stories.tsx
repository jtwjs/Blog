import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Search from "./Search.component";

const meta: Meta<typeof Search> = {
  title: "Forms/Search",
  component: Search,
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["id", "className", "label", "onChange", "onSearch"] },
    componentSource: {
      code: 'export default "This is my code"',
      language: "typescript",
    },
  },
};

export default meta;

const withPreventDefault =
  <T extends React.SyntheticEvent<HTMLElement>>(action: (e: T) => void) =>
  (e: T) => {
    e.preventDefault();
    return action(e);
  };

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    id: "test",
    label: "test",
    placeholder: "search",
    value: "",
    onChange: action("changed"),
    onSearch: withPreventDefault(action("submitted")),
  },
  render: (args) => (
    <div className="flex flex-col gap-y-2">
      <Search {...args} />
    </div>
  ),
};
