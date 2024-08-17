/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      DMSans: ["DM Sans", "sans-serif"],
      Nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        back: "url('../assets/bg.png')",
      },
    },
  },
  plugins: [],
};
