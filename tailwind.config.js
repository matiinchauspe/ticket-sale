/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6789ba",
        secondary: "#4a6fa4",
        tertiary: "#e6e6e6",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}