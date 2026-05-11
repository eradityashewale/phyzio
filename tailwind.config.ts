import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B8235",
        "primary-dark": "#6A6128",
        accent: "#D97706",
        olive: {
          50:  "#fafaed",
          100: "#f2f0cc",
          200: "#e4dfaa",
          400: "#b5aa3e",
          500: "#8B8235",
          700: "#6A6128",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
