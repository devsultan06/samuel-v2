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
        brand: {
          dark: "#111112",
          surface: "#18181B",
          card: "#1D1D22",
          cardBorder: "#2E2E38",
          purple: {
            DEFAULT: "#2D17BB",
            hover: "#3922D6",
            light: "#5848C3",
            accent: "#7B61FF",
            glow: "rgba(88, 72, 195, 0.35)",
            bubble: "#2A1D54",
          },
          light: "#F6F6F6",
          gray: {
            muted: "#7F7F7F",
            subtle: "#848484",
            border: "#404040",
            dark: "#202020",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        purpleGlow: "0 0 50px -10px rgba(88, 72, 195, 0.3)",
        purpleBtn: "0 10px 25px -5px rgba(45, 23, 187, 0.4)",
        card: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
