module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // <- viktigt!
  ],
  theme: {
    extend: {
      screens: {
        'max-1180': { max: '1180px' },
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
}
