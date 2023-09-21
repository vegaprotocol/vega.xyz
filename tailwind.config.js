const uiToolkitTheme = require('@vegaprotocol/tailwindcss-config/src/theme.js')
const vegaCustomClasses = require('@vegaprotocol/tailwindcss-config/src/vega-custom-classes.js')
const _ = require('lodash')

const theme = {
  spacing: {
    'space-1': '0.25rem',
    'space-2': '0.5rem',
    'space-3': '0.75rem',
    'space-4': '1rem',
    'space-5': '1.5rem',
    'space-6': '2rem',
    'space-7': '2.5rem',
    'space-8': '3rem',
    'space-9': '3.5rem',
    'space-10': '4rem',
    'space-11': '5rem',
    'space-12': '6rem',
    'space-13': '7rem',
    'space-14': '8rem',
  },
  backgroundImage: {
    'four-oh-four': "url('/404.png')",
    fairground: "url('/fairground-bg.png')",
    'experiment-on-fairground': "url('/experiment-on-fairground.svg')",
    buildersClubHero: "url('/builders-club-hero-background.jpg')",
    buildersClubFooter: "url('/builders-club-footer-background.jpg')",
    buildersClubFooterLight:
      "url('/builders-club-footer-background-light.jpg')",
    countdownBar: "url('/countdown-marker.png')",
    moshed: "url('/moshed.jpg')",
    moshed2: "url('/moshed2.jpg')",
    moshed3: "url('/moshed3.jpg')",
    moshed4: "url('/moshed4.jpg')",
  },
  opacity: {
    15: '.15',
  },
  colors: {
    'vega-white': '#FFFFFF',
    'vega-black': '#000000',
    'vega-off-black': '#252525',
    'vega-lightest-grey': '#EDEDED',
    'vega-light-grey': '#F2F2F2',
    'vega-grey': '#C0C0C0',
    'vega-mid-grey': '#828282',
    'vega-border-grey': '#4f4f4f',
    'vega-box-grey': '#161616',
    'vega-yellow': '#DFFF0B',
    'vega-mint': '#00F780',
    'vega-pink': '#FF077F',
    'vega-purple': '#633DFF',
    'vega-text-muted': '#BFCCD6',
    'vega-border-muted': '#696969',
    'vega-dark-100': '#17191E',
    'vega-dark-200': '#3E4045',
    'vega-dark-300': '#868A94',
    'vega-dark-400': '#BFC1C7',
    'vega-light-100': '#F0F0F0',
    'vega-light-200': '#D2D2D2',
    'vega-light-300': '#A7A7A7',
    'vega-light-400': '#626262',
  },
  scale: {
    185: '1.85',
  },
  typography: (theme) => ({
    DEFAULT: {
      css: {
        color: theme('colors.vega-light-300'),
        '--tw-prose-links': theme('colors.vega-light-300'),
        lineHeight: '1.4',

        p: {
          lineHeight: '1.4',
        },
        a: {
          '&:hover': {
            textDecoration: 'none',
          },
        },
        li: {
          lineHeight: '1.4',
        },
        ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((obj, heading) => {
          obj[heading] = {
            color: theme('colors.vega-light-300'),
          }
          return obj
        }, {}),
        '--tw-prose-bullets': theme('colors.vega-black'),
        '--tw-prose-invert-bullets': theme('colors.vega-white'),
      },
    },
    dark: {
      css: {
        color: theme('colors.vega-dark-300'),
        ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((obj, heading) => {
          obj[heading] = {
            color: theme('colors.vega-dark-300'),
          }
          return obj
        }, {}),
        '--tw-prose-links': theme('colors.vega-dark-300'),
      },
    },
  }),
  keyframes: {
    'fairground-marquee': {
      from: { backgroundPositionX: 0 },
      to: { backgroundPositionX: '-1326px' },
    },
  },
  animation: {
    'fairground-marquee': 'fairground-marquee 10s linear infinite;',
  },
  gridTemplateColumns: {
    'auto-3': 'repeat(3, minmax(auto, auto))',
    'auto-4': 'repeat(4, minmax(auto, auto))',
    'auto-5': 'repeat(5, minmax(auto, auto))',
    'auto-7': 'repeat(7, minmax(auto, auto))',
  },
}
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@vegaprotocol/ui-toolkit/index.js',
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    },
    extend: _.merge(uiToolkitTheme, theme),
  },
  plugins: [
    vegaCustomClasses,
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-hyphens'),
    require('@tailwindcss/line-clamp'),
  ],
}
