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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#B88E2F",
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
        },
        red: {
          discount: "#E97171",
        },
        green: {
          new: "#2EC1AC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
