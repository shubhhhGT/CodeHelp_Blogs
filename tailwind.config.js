/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header-shadow': 'var(--header-shadow)',
        'footer-shadow' : 'var(--footer-shadow)',
      },
      colors:{
        'bgColor' : 'var(--background-color)',
        'textColor' : 'var(--text-color)'
      }
    },
  },
  plugins: [],
}

