import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      stone: colors.stone,
      brand: {
        950: "#421408",
        900: "#7a2c14",
        800: "#983214",
        700: "#bf3e0f",
        600: "#ee5710",
        500: "#f56f1a",
        400: "#f88e3f",
        300: "#fbb776",
        200: "#fdd5ab",
        100: "#feecd6",
        50: "#fff7ed",
      }
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}