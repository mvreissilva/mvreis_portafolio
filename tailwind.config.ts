import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode
        bg:      "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border:  "rgb(var(--border) / <alpha-value>)",
        ink:     "rgb(var(--ink) / <alpha-value>)",
        muted:   "rgb(var(--muted) / <alpha-value>)",
        accent:  "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        sans:  ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { content: "720px" },
    },
  },
  plugins: [],
};
export default config;
