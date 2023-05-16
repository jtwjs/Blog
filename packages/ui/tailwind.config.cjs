/** @type {import('tailwindcss').Config} */
const BASE_FONT_SIZE = 16;

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      spacing: () => ({
        ...Array.from({ length: 96 }, (_, i) => i * 0.5)
          .filter(Boolean)
          .reduce(
            (acc, i) => ({ ...acc, [i]: `${i / (BASE_FONT_SIZE / 4)}rem` }),
            {}
          ),
      }),
      colors: {
        black: "#191A20",
        primary: "#3F4150",
        secondary: "#8C8D96",
        tertiary: "#B2B3B9",
        border: "#E0E2E7",
        background: "#F7F8FA",
        white: "#ffffff",
        brand: "#3DA5F5",
        tint: "#ECF6FE",
        shade: "#3186C4",
        red: "#F86D7D",
        green: "#22C58B",
      },
      fontSize: {
        xxs: [
          `${(16 * 0.75) / BASE_FONT_SIZE}rem` /* 12px */,
          {
            lineHeight: "1.3333",
          },
        ],
        xs: [
          `${(16 * 0.8125) / BASE_FONT_SIZE}rem` /* 13px */,
          {
            lineHeight: "1.5384",
          },
        ],
        sm: [
          `${(16 * 0.875) / BASE_FONT_SIZE}rem` /* 14px */,
          {
            lineHeight: "1.7142",
          },
        ],
        md: [
          `${(16 * 1) / BASE_FONT_SIZE}rem` /* 16px */,
          {
            lineHeight: "1.5",
          },
        ],
        lg: [
          `${(16 * 1.125) / BASE_FONT_SIZE}rem` /* 18px */,
          {
            lineHeight: "1.5555",
          },
        ],
        xl: [
          `${(16 * 1.5) / BASE_FONT_SIZE}rem` /* 24px */,
          {
            lineHeight: "1.4167",
          },
        ],
        h3: [
          `${(16 * 3) / BASE_FONT_SIZE}rem` /* 48px */,
          {
            lineHeight: "1.25",
          },
        ],
        h2: [
          `${(16 * 3.75) / BASE_FONT_SIZE}rem` /* 60px */,
          {
            lineHeight: "1.2",
          },
        ],
        h1: [
          `${(16 * 4.5) / BASE_FONT_SIZE}rem` /* 72px */,
          {
            lineHeight: "1.25",
          },
        ],
      },
      screens: {
        md: "768px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
