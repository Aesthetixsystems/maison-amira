import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f2ea",
        sand: "#efe7db",
        beige: "#e6dccb",
        taupe: "#b8a48a",
        tan: "#a68a6d",
        mocha: "#6e5c48",
        cocoa: "#4a3d30",
        espresso: "#3a2f26",
        gold: "#b5924f",
        goldsoft: "#c9ab6f",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
