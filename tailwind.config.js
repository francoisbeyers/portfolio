/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash)"],
        'pixel': ['monospace'],
        'mono': ['Courier New', 'monospace'],
        'comic': ['Comic Sans MS', 'cursive'],
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
        // Retro color palette
        'retro-cyan': '#00FFFF',
        'retro-magenta': '#FF00FF',
        'retro-yellow': '#FFFF00',
        'retro-lime': '#00FF00',
        'retro-blue': '#0000FF',
        'retro-red': '#FF0000',
        'retro-black': '#000000',
        'retro-gray': '#C0C0C0',
        'retro-darkgray': '#808080',
        'retro-purple': '#800080',
        'win95-teal': '#008080',
        'win95-blue': '#000080',
        'win95-silver': '#C0C0C0',
        // Original colors
        orange: "#dc562e",
        "dark-grey": "#101010",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'rainbow': 'rainbow 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch 0.5s infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        rainbow: {
          '0%': { color: '#FF0000' },
          '14%': { color: '#FF7F00' },
          '28%': { color: '#FFFF00' },
          '42%': { color: '#00FF00' },
          '57%': { color: '#0000FF' },
          '71%': { color: '#4B0082' },
          '85%': { color: '#9400D3' },
          '100%': { color: '#FF0000' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0,0,0,1)',
        'retro-hover': '6px 6px 0px 0px rgba(0,0,0,1)',
        'win95': 'inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
