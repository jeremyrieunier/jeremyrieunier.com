/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-navy': '#020A14',
      'yellow': '#F9B537',
      'white': '#F6F7EE',
      'blue': '#54C1DC',
      'pink': '#FF79C6'
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              color: theme('colors.white')
            },
            a: {
              color: theme('colors.blue'),
              fontWeight: 'unset'
            },
            'h1, h2, h3': {
              color: theme('colors.yellow'),
              letterSpacing: theme('letterSpacing.tight')
            },
          },
        },
      }),
    },
    fontSize: {
      base: '18px'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
