/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        "deep-blue": "#010026",
        blue: "#003566",
        red: "#DC4492",
        orange: "#dc562e",
        yellow: "#ffc300",
        grey: "#cccccc",
        "dark-grey": "#101010",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
