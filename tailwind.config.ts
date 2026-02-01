import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color palette: Sage Green, Terracotta, Cream
        primary: {
          DEFAULT: "#5F7A5F", // Sage green
          dark: "#4A5F4A",
          light: "#7A9A7A",
        },
        text: {
          heading: "#1a1a1a", // Black for headings
          body: "#4A5F4A", // Olive dark green for body text
          muted: "#5F7A5F", // Sage green for muted text
        },
        secondary: {
          DEFAULT: "#C97D60", // Terracotta
          dark: "#A85D42",
          light: "#E09D85",
        },
        accent: {
          DEFAULT: "#F5E6D3", // Cream
          dark: "#E8D4B8",
          light: "#FDF8F3",
        },
        neutral: {
          DEFAULT: "#FAF8F5", // Warm beige with subtle undertones
          light: "#FDFCFA", // Lighter warm cream
          dark: "#F5F3EF", // Slightly darker warm beige
          darker: "#E8E6E1",
        },
        background: {
          DEFAULT: "#FAF8F5", // Main warm beige background
          light: "#FDFCFA", // Very light warm cream
          warm: "#F9F7F4", // Warm off-white
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Playfair Display", "serif"],
        display: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
