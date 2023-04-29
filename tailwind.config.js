/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js",
    './resources/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
        'second_called': '#B6DE8C',
        'third_called': '#F4CC7A',
      }
    },
    fontFamily: {
      'body': ['Inter', 'Arial', 'sans-serif']
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}
