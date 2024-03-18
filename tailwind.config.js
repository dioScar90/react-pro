/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3655C7'
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    darkTheme: 'cat',
    base: false,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  }
}

