import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E8F0FE",
          100: "#D2E3FC",
          200: "#A8C7FA",
          300: "#7CACF8",
          400: "#4E91F5",
          500: "#1A73E8",
          600: "#155CBB",
          700: "#10468E",
          800: "#0B3060",
          900: "#061A33",
          950: "#030D1A",
        },
        accent: {
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFB300",
          500: "#FFA000",
          600: "#FF8F00",
          700: "#FF6F00",
          800: "#E65100",
          900: "#BF360C",
        },
        dark: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        bounce: "bounce 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
