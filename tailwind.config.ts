import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#704EFD",
        secondary: "#2CB7FF",
        pink: "#FF017C",
        orange: "#FFA927",
        dark: "#3A3F5A",
        lightBg: "#F3F4FF",
        lightBg2: "#F8FAFF",
        // Dark mode surface tokens
        darkBg: "#1a1d2e",
        darkCard: "#252840",
        darkText: "#e8eaf6",
        darkSurface: "#1f2235",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      maxWidth: {
        container: "1400px",
      },
      boxShadow: {
        card: "0 2px 4px rgba(3, 27, 78, 0.06)",
        cardHover: "0 10px 20px rgba(3, 27, 78, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
