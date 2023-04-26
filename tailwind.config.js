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
            color: theme('colors.white'),
            maxWidth: 'inherit',
            'p, strong, th': {
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
            code: {
              color: theme('colors.yellow')
            }
          },
        },
      }),
    },
    fontSize: {
      base: '18px'
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
