import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          'primary': '#1B2534',
        },
        blue: {
          'primary': '#29A0F5',
        },
      },
      backgroundImage: {
        'hero': "url('/hero.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
