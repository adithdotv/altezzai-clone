/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'hover-blue': '#2e9eb9',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          '"Nanum Gothic"',
          'sans-serif',
        ],
      },
      borderRadius: {
        '45px': '45px',
      },
    },
  },
  plugins: [],
}

