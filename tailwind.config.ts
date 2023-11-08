import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3479FF",
        secondary: "#FE9B53",
        dark: "#173879",
        greyscale: "#F2F4F8",
        greyscale_label: "#626262",
        greyscale_dark: "#D6DBE5",
        greyscale_border: "#D1D1D1",
        base_black: "#272E38",
      },
      keyframes: {
        ticker: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        ticker: "ticker 50s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
