/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      handwriting: ['handwriting', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        list: '30px minmax(120px, 1fr) minmax(180px, 2fr) 120px 75px 90px 90px',
        main: '1fr 3fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
