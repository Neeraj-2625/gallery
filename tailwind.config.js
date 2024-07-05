/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-main':'#735DA5',
        'color-main':'#D3C5E5'
      }
    },
  },
  plugins: [],
}

