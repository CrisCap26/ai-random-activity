import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'pastel-blue': '#7FB6D8',
        'second-color-blue': '#B3DAF2',
        'third-color-blue': '#013B3B',
        'fourth-color-blue': '#91B8C1',
        'fifth-color-blue': '#A8CBE7'
      }
    },
  },
  plugins: [],
};
export default config;
