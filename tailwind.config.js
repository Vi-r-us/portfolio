/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        200: "#1a1a1a",
        400: "#0f0f0f",
        600: "#050505",
      },
      white: {
        200: "#e6e6e6",
        400: "#999999",
      },
      green: "#00cc96",
      purple: {
        400: "#d6ccff",
        600: "#ac99ff",
      },
    },
    extend: {},
    screens: {
      tablet: "390px",
      // => @media (min-width: 640px) { ... }

      desktop: "800px",
      // => @media (min-width: 1024px) { ... }

      // desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
