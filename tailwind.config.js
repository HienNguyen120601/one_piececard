/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {

    extend: {
      backgroundImage: {
        'map': "url('assets/bg/bg.jpg')",
        'menu': "url('https://asia-en.onepiece-cardgame.com/images/common/sp/bg_menu.png')"
      },
      animation: {
        'scale': 'scale 0.5s linear 1',
        'translateX': 'translateX 0.5s linear 1'
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
        translateX: {
          '0%': { transform: 'translateX(50%)' },
          '50%': { transform: 'translateX:(0)' },
        }
      },
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
      maxWidth: {

      },
      width: {
        "60%": '60%',
        "80%": '80%',
        "40%": '40%',
        "1/5": '20%',
        "full": "100%",
        "10%": "10%",
        "20%": "20%",


      },
      height: {
        "1px": "1px",
        '90vh': "90vh",
        '66px': "66px"
      },
      minHeight: {
        '90vh': "90vh"
      },
      maxHeight: {
        'content': "calc(90vh - 85px)"
      },
      theme: {
        screens: {
          'min': "1px"
        }
      }
    },
  },
  plugins: [],
}
