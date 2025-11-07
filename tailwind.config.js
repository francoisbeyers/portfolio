/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash)"],
        display: ['var(--font-clash)', 'Clash Display', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2.222vw",
          sm: "2.222vw",
          lg: "2.222vw",
          xl: "2.222vw",
          "2xl": "2.222vw",
        },
      },
      colors: {
        // Exact Klarna color palette from thecheckout.klarna.com
        'pink': '#FFB3C7',
        'pink-light': '#FFCAD8',
        'pink-dark': '#FFA3BA',
        'cyan': '#99F8FF',
        'yellow': '#FFF999',
        'lavender': '#F0E3FF',
        'peach': '#FFE6CC',
        'mint': '#9EFFBB',
        'light-blue': '#D1E2FF',
        'neutral-gray': '#E0CFD4',
        'off-white': '#F9F9F9',
        'charcoal': '#000000',
        'text-primary': '#000000',
        // Original colors for compatibility
        orange: "#dc562e",
        "dark-grey": "#101010",
      },
      fontSize: {
        // Klarna's responsive typography system
        'display-xl': ['clamp(46px, 7.407vw, 120px)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(40px, 6vw, 100px)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['clamp(32px, 4.5vw, 80px)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['clamp(25px, 3.407vw, 60px)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'body-lg': ['clamp(18px, 1.8vw, 24px)', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '400' }],
        'body-md': ['clamp(16px, 1.407vw, 20px)', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '400' }],
      },
      spacing: {
        'container': 'max(20px, 2.222vw)',
        'section': 'max(70px, 6.370vw)',
        'gap': 'max(30px, 2.593vw)',
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        // Klarna uses flat design with no shadows
        'none': 'none',
        'soft': 'none',
        'glow': 'none',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'klarna': '50px',
      },
      transitionDuration: {
        'klarna': '250ms',
      },
      transitionTimingFunction: {
        'klarna': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
