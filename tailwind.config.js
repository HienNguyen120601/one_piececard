/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    colors: {
      'primary': '#928157',
      'primary-hover': "#ddd8cb",
      'white': '#fff',
      'black': '#000',
    },
    minWidth: {
      'normal': '100px'
    },
    extend: {
      backgroundImage: {
        'map': "url('assets/bg/bg.jpg')"
      },
    },
  },
  plugins: [],
}
