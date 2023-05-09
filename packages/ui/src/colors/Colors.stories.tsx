import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../atom";

const meta: Meta = {
  title: "Foundation/Colors",
};

export default meta;

interface Color {
  class: string;
  label: string;
  hex: string;
}

const colors: Color[] = [
  {
    class: "bg-brand",
    label: "brand",
    hex: "#3DA5F5",
  },
  {
    class: "bg-tint",
    label: "tint",
    hex: "#ECF6FE",
  },
  {
    class: "bg-shade",
    label: "shade",
    hex: "#3186C4",
  },
  {
    class: "bg-red",
    label: "red",
    hex: "#F86D7D",
  },
  {
    class: "bg-green",
    label: "green",
    hex: "#22C58B",
  },
  {
    class: "bg-primary",
    label: "primary",
    hex: "#3F4150",
  },
  {
    class: "bg-secondary",
    label: "secondary",
    hex: "#8C8D96",
  },
  {
    class: "bg-tertiary",
    label: "tertiary",
    hex: "#B2B3B9",
  },
  {
    class: "bg-border",
    label: "border",
    hex: "#E0E2E7",
  },
  {
    class: "bg-background",
    label: "background",
    hex: "#F7F8FA",
  },
  {
    class: "bg-black",
    label: "black",
    hex: "#191A20",
  },
  {
    class: "bg-white",
    label: "white",
    hex: "#ffffff",
  },
];

const ColorBox = ({ color }: { color: Color }) => (
  <div
    key={color.class}
    className="flex flex-col rounded-lg shadow-lg w-26 h-39 dark:bg-white"
  >
    <div className={`h-20 ${color.class} rounded-t-lg`} />
    <div className="mx-3 my-3">
      <Typography variant="lg" weight="medium" className="text-primary">
        {color.label}
      </Typography>
      <Typography variant="md" className="text-secondary">
        {color.hex}
      </Typography>
    </div>
  </div>
);

type Story = StoryObj<typeof ColorBox>;

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11">
      {colors.map((color) => (
        <ColorBox key={color.class} color={color} />
      ))}
    </div>
  ),
};
