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
        },
      },
    },
  },
  plugins: [],
};
export default config;
