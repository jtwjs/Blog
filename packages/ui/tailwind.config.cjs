/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
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
        xxs: ["12px", "1.3333"],
        xs: ["13px", "1.5384"],
        sm: ["14px", "1.7142"],
        md: ["16px", "1.5"],
        lg: ["18px", "1.5555"],
        xl: ["24px", "1.4167"],
        h3: ["48px", "1.25"],
        h2: ["60px", "1.2"],
        h1: ["72px", "1.25"],
      },
      screens: {
        md: "768px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
