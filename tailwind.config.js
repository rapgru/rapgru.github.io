module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        morange: {
          primary: '#ffc56e',
          secondary: '#ffe5be'
        },
        background: "#fbfaf8"
      },
      borderRadius: {
        'xl': '30px'
      },
      height: {
        'alfull': '99%'
      }
    },
  },
  variants: {},
  plugins: [
    require("tailwind-percentage-heights-plugin")()
  ],
}
