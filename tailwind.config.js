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
        'bg_end': '#AAB2BD',
        'main_text': '#656D78',
        'button': '#FFFCF5',
        'pin_button': '#EAEAEA',
        'menu_bg': '#D9D9D9',
        'menu_button_start': '#FFFFFF',
        'menu_button_end': '#FFFCF5',
      }
    },
    fontFamily: {
      'body': ['Inter', 'Arial', 'sans-serif']
    },

  },
  plugins: [],
}
