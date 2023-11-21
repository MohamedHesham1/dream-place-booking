/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xl: { max: '1200px' },
        lg: { max: '992px' },
        md: { max: '767px' },
        sm: { max: '600px' },
        xm: { max: '480px' },
      },
      colors: {
        primary: '#2F80ED',
        secondary: '#181818',
        white: '#ffffff',
        black: {
          default: '#000000',
          1: '#1A1A1A',
        },
        gray: {
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0',
          6: '#F2F2F2',
        },
        green: {
          1: '#219653',
          2: '#27AE60',
        },
        orange: '#F2994A',
        red: '#EB5757',
        yellow: '#F2C94C',
      },
    },
  },
  plugins: [],
};
