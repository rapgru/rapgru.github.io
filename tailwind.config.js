const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
  ],
  theme: {
    extend: {
      colors: {
        ctorange: {
          primary: '#F8B500',
          secondary: '#FFD563'
        },
        ctwhite: '#FDFDFC',
        ctblue: '#00ADB5',
        ctblack: '#0F1928',
      },
      borderRadius: {
        'xl': '30px'
      },
      height: {
        'alfull': '99%',
        'fullvh': '100vh',
      },
      fontFamily: {
        display: ['Quicksand'],
        body: ['Nunito'],
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwind-percentage-heights-plugin")(),
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { 
          '@apply text-3xl': '',
          '@apply mt-10': '',
          '@apply mb-5': '',
          '@apply font-display': '',
          '@apply text-center': '',
        },
        'h2': { 
          '@apply text-2xl': '',
          '@apply mt-8': '',
          '@apply mb-4': '',
          '@apply font-display': '',
        },
        'h3': { 
          '@apply text-xl': '',
          '@apply font-display': '',
          '@apply mt-6': '',
          '@apply mb-4': '',
        },
        'body': {
          '@apply bg-ctblack': '',
          '@apply font-body': '',
          '@apply leading-tight': '',
          scrollBehavior: 'smooth',
          height: '100%',
        },
        'html': {
          height: '100%',
        },
      })
    }),
    plugin(function({ addComponents, config }) {
      addComponents({
        '.markdown': {
          'ul': {
            '@apply list-disc': '',
            '@apply list-inside': '',
            'ul': {
              '@apply ml-4': '',
            }
          },
          'li': {
            'p': {
              '@apply inline': ''
            }
          },
          '@apply font-body': ''
        },
        '.link': {
          '@apply text-ctblue': ''
        },
      })
    })
  ],
}
