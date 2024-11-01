/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B46C1", // purple-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#3B82F6", // blue-500
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
