/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        minhaCor: {
          100: '#ffccee',
          default: '#ff66cc'
        }
      }
    },
  },
  plugins: [],
}

