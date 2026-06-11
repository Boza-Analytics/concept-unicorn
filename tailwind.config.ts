import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0514",
        surface: "#120A22",
        primary: "#5827D5",
        violet: {
          glow: "#8B5CF6",
          soft: "#A78BFA",
        },
        accent: {
          yellow: "#FCE170",
          pink: "#FAA7B4",
          coral: "#EF6464",
          mint: "#6EE7B7",
        },
        cream: "#EDF0E6",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
