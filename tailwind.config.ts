import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        pacifico: ["var(--font-pacifico)"],
        opensans: ["var(--font-opensans)"],
        tinos: ["var(--font-tinos)"],
        monts: ["var(--font-monts)"],
        jakrata: ["var(--font-jakrata)"],
        outfit: ["var(--font-outfit)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark": "#040415",
        "secondary-dark": "#2C2C3E",
        "para-dark": "#8D9DBC",
        accent: "#C98200",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        navsize: { max: "1180px" },
        tab: { max: "991px" },
        mob: { max: "768px" },
      },
    },
  },
  plugins: [],
};
export default config;
