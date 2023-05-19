/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      handwriting: ['handwriting', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        list: '120px 180px 120px 30px 90px 90px',
        main: '1fr 3fr',
      },
      gap: {
        list: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
