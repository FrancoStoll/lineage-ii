import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        display: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      colors: {
        background: "#121119",
        surface: "#1a1922",
        header: "#1b1d2e",
        secondary: "#92909c",
        title: "#eccbac",
        gold: {
          light: "#f4e3bd",
          DEFAULT: "#e6c073",
          dark: "#b8923c",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-line": "linear-gradient(90deg, transparent, #e6c073, transparent)",
      },
      boxShadow: {
        gold: "0 0 32px -8px rgba(230, 192, 115, 0.45)",
        "gold-sm": "0 0 16px -6px rgba(230, 192, 115, 0.4)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
