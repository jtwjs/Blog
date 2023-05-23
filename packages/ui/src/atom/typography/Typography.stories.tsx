import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography.component";

const meta: Meta = {
  title: "Foundation/Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading: Story = {
  args: {
    variant: "h3",
    weight: "regular",
  },
  parameters: {
    controls: { exclude: ["as", "className", "variant", "weight"] },
  },
  render: (args) => (
    <>
      <Typography {...args}>Heading 3</Typography>
      <Typography {...args} variant="h2">
        Heading 2
      </Typography>
      <Typography {...args} variant="h1">
        Heading 1
      </Typography>
    </>
  ),
};

export const Text: Story = {
  args: {
    weight: "regular",
  },
  parameters: {
    controls: { exclude: ["as", "className", "variant"] },
  },
  render: (args) => (
    <>
      <Typography {...args} variant="xxs">
        인생은 속도보다 방향이다.
      </Typography>
      <Typography {...args} variant="xs">
        인생은 속도보다 방향이다.
      </Typography>
      <Typography {...args} variant="sm">
        인생은 속도보다 방향이다.
      </Typography>
      <Typography {...args} variant="md">
        인생은 속도보다 방향이다.
      </Typography>
      <Typography {...args} variant="lg">
        인생은 속도보다 방향이다.
      </Typography>
      <Typography {...args} variant="xl">
        인생은 속도보다 방향이다.
      </Typography>
    </>
  ),
};
