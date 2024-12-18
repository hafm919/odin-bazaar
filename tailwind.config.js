/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "system-ui"],
        serif: ["Playfair Display", "Georgia"],
      },
      colors: {
        "accent-green": "#839467",
      },
    },
  },
  plugins: [],
};
