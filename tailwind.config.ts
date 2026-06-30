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
        bone: "#F5F1E8",
        ink: "#15130E",
        // flavour palette
        masala: "#E8612C",
        panipuri: "#2F9E5B",
        zeera: "#E4D2A6",
        methi: "#6E7C3A",
        schezwan: "#D62828",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
