/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'bg_start': '#CCD0D9',
        'bg_end': '#AAB2BD'
      }
    },
    fontFamily: {
      'body': ['Inter', 'Arial', 'sans-serif']
    },

  },
  plugins: [],
}
