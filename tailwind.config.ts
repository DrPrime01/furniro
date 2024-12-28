import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          "2xl": "6rem",
        },
      },
      spacing: {
        15: "60px",
        18: "72px",
        4.5: "18px",
        5.5: "22px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#B88E2F",
        purple: "#816DFA",
        cream: {
          1: "#F9F1E7",
          2: "#FCF8F3",
          3: "#FAF3EA",
          4: "#FFF3E3",
        },
        gray: {
          1: "#3A3A3A",
          2: "#898989",
          3: "#9F9F9F",
          4: "#333333",
          5: "#666666",
          6: "#F4F5F7",
          7: "#B0B0B0",
          dark: "#242424",
        },
        red: {
          discount: "#E97171",
        },
        green: {
          new: "#2EC1AC",
        },
      },
      animation: {
        "slide-in": "slide-in 500ms ease-in",
        "slide-out": "slide-out 500ms ease-in",
        "slide-in-left": "slide-in-left 300ms ease-in",
        "slide-out-left": "slide-out-left 300ms ease-in",
        "slide-down": "slide-down 300ms ease-in",
        "slide-up": "slide-up 300ms ease-in",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
