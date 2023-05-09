/** @type {import('tailwindcss').Config} */
const baseConfig = require("@jtwjs/ui/tailwind.config.cjs");

module.exports = {
  ...baseConfig,
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    ],
  },
};
