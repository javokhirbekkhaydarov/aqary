/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6290CB",
        borderColor: "#202020",
      },
      fontFamily: {
        geologica: ["Geologica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
