/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6290CB",
        borderColor: "#202020",
        primaryGray: "#919B9B",
      },
      fontFamily: {
        geologica: ["Geologica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
