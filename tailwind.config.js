module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#30C88F',
        secondary: '#2D314D',
        tertiary: '#9597A5',
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
};
