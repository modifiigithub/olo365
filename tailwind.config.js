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
      blue: colors.blue,
      red: colors.red,
      brand: {
        950: "#182753",
        900: "#2143ac",
        800: "#2143ac",
        700: "#2052d5",
        600: "#2866e8",
        500: "#327df2", // main color
        400: "#63a7f7",
        300: "#95c6fb",
        200: "#c0dcfd",
        100: "#dceafd",
        50: "#eff6ff",
      }
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}