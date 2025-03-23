/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Helvetica', 'Arial', 'sans-serif'],
          'antic-slab': ['"Antic Slab"', 'serif'],
        },
      },
    },
    plugins: [],
  }