import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: { 950: "#08261d", 900: "#0e3b2e", 800: "#14513f", 700: "#1d6a53", 100: "#dcebe4", 50: "#eef5f1" },
        gold: { 600: "#8f6f33", 500: "#b08d4a", 300: "#d6bf8c", 100: "#f1e8d2" },
        sand: { 50: "#fbf8f2", 100: "#f6f1e7", 200: "#ebe3d2" },
        ink: "#1b2a24",
      },
      fontFamily: { display: ["var(--font-amiri)", "serif"], body: ["var(--font-plex)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
