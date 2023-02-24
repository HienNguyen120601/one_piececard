/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    colors: {
      'primary': '#928157',
      'primary-hover': "#ddd8cb",
      'white': '#fff',
      'black': '#000',
      'overlay': 'rgba(0,0,0,0.5)'
    },
    minWidth: {
      'normal': '100px'
    },
    width: {
      "60%": '60%',
      "40%": '40%',
      "1/5": '20%',
    },

    extend: {
      backgroundImage: {
        'map': "url('assets/bg/bg.jpg')"
      },
      animation: { 'scale': 'scale 0.5s linear 1' },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
