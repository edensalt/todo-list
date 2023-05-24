/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      handwriting: ['handwriting', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        list: '30px minmax(120px, 1fr) minmax(180px, 2fr) 120px 78px 93px 75px',
        listSmall: '1fr minmax(120px, 1fr) minmax(120px, 1fr) 1fr 1fr 1fr 1fr 1fr',
        main: '1fr 3fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
