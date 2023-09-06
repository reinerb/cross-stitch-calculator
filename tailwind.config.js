/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f4",
          100: "#daf1e2",
          200: "#b8e2c9",
          300: "#89cca7",
          400: "#57b082",
          500: "#369366",
          600: "#257651",
          700: "#1e5f43",
          800: "#1a4b36",
          900: "#163e2d",
          950: "#0b2319",
        },
        neutral: {
          50: "#f8f7f7",
          100: "#f0eeee",
          200: "#dddada",
          300: "#bfbaba",
          400: "#9b9595",
          500: "#797272",
          600: "#686161",
          700: "#554f4f",
          800: "#484444",
          900: "#3f3c3b",
          950: "#2a2727",
        },
      },
      gridTemplateRows: {
        primary: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
