import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F4F1E9",
        paper: "#FBF9F3",
        ink: "#16130F",
        // flavour worlds
        masala: "#D8552A",
        panipuri: "#1F7A4D",
        zeera: "#E3D4AE",
        methi: "#5E6B33",
        schezwan: "#B11E26",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wide: "1500px",
      },
      letterSpacing: {
        label: "0.34em",
      },
    },
  },
  plugins: [],
};

export default config;
