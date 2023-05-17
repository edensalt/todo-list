/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        list: '200px 300px 200px 50px 100px 100px',
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
