/** @type {import('tailwindcss').Config} */
const baseConfig = require("@jtwjs/ui/tailwind.config.cjs");

module.exports = {
  ...baseConfig,
  content: {
    files: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      ...baseConfig.theme.extend,
      fontFamily: {
        notosans: "var(--font-notosans)",
        inter: "var(--font-inter)",
      },
      screens: {
        sm: "0px",
        md: "768px",
        lg: "1200px",
      },
    },
  },
};
