/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.htm"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        darkBlue: 'hsl(217, 28%, 15%)',
        accentCyan: 'hsl(176, 68%, 64%)'
      },
      fontFamily:{
        "opensans":["Open Sans","sans-serif"]
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}

