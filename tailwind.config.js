/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-mode-main': 'var(--light-main)',
        'light': 'var(--light)',
        'dark-darker': 'var(--dark-darker)',
        'dark-lighter': 'var(--dark-lighter)'
      },
    },
  },
  plugins: [],
}