const vegaCustomClasses = require('./tailwind/vega-custom-classes.js')
const _ = require('lodash')

const theme = {
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
    square: 'square',
  },
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
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    market: {
      red: {
        // same as vega-red
        650: '#550016',
        DEFAULT: '#EC003C',
        300: '#FDD9DC',
      },
      green: {
        // same as vega-green
        650: '#015D30',
        600: '#01914B',
        550: '#01C566',
        DEFAULT: '#00F780',
        300: '#DDFEE8',
      },
    },
    vega: {
      white: '#FFFFFF',
      black: '#000000',
      grey: '#C0C0C0',
      'off-black': '#252525',
      'mid-grey': '#828282',
      'border-grey': '#4f4f4f',
      'box-grey': '#161616',
      yellow: '#DFFF0B',
      mint: '#00F780',
      pink: '#FF077F',
      purple: '#633DFF',
      'text-muted': '#BFCCD6',
      'border-muted': '#696969',
      // YELLOW
      yellow: {
        700: '#23290E',
        650: '#515E1E',
        600: '#7E932F',
        550: '#ABC840',
        DEFAULT: '#D7FB50',
        500: '#D7FB50',
        450: '#E0FC75',
        400: '#E8FD9A',
        350: '#F0FDBE',
        300: '#F9FEE3',
      },

      // GREEN
      green: {
        700: '#012915',
        650: '#015D30',
        600: '#008545',
        550: '#01C566',
        DEFAULT: '#00F780',
        500: '#00F780',
        450: '#37F99B',
        400: '#6CFAB6',
        350: '#A1FCD0',
        300: '#D6FEEB',
      },

      // BLUE
      blue: {
        700: '#01142A',
        650: '#012C60',
        600: '#014595',
        550: '#015ECB',
        DEFAULT: '#0075FF',
        500: '#0075FF',
        450: '#3793FF',
        400: '#6CAFFF',
        350: '#A1CCFF',
        300: '#D6E9FF',
      },

      // PURPLE
      purple: {
        700: '#15072A',
        650: '#301060',
        600: '#4B1895',
        550: '#6620CB',
        DEFAULT: '#8028FF',
        500: '#8028FF',
        450: '#9B56FF',
        400: '#B683FF',
        350: '#D0B0FF',
        300: '#EBDDFF',
      },

      // PINK
      pink: {
        700: '#210215',
        650: '#600330',
        600: '#95054B',
        550: '#CB0666',
        DEFAULT: '#FF077F',
        500: '#FF077F',
        450: '#FF3C9A',
        400: '#FF70B5',
        350: '#FFA3D0',
        300: '#FFD7EA',
      },

      // RED
      red: {
        700: '#2F000C',
        650: '#550016',
        600: '#7B001F',
        550: '#B3002E',
        DEFAULT: '#EC003C',
        500: '#EC003C',
        450: '#F03D6B',
        400: '#F4668A',
        350: '#F78FA9',
        300: '#F8A3B9',
      },

      // ORANGE
      orange: {
        700: '#2A1701',
        650: '#603301',
        600: '#954F01',
        550: '#CB6C01',
        DEFAULT: '#FF8700',
        500: '#FF8700',
        450: '#FFA137',
        400: '#FFBA6C',
        350: '#FFD3A1',
        300: '#FFECD6',
      },

      // DARK
      dark: {
        100: '#161616',
        150: '#262626',
        200: '#404040',
        300: '#8B8B8B',
        400: '#C0C0C0',
      },

      // LIGHT
      light: {
        100: '#F0F0F0',
        150: '#E9E9E9',
        200: '#D2D2D2',
        300: '#939393',
        400: '#626262',
        grey: '#F2F2F2',
      },
      lightest: {
        grey: '#EDEDED',
      },

      cdark: {
        50: '#DCDEE3', // text-primary-light
        100: '#94969B', // text-secondary
        200: '#7C7E83',
        300: '#626469',
        400: '#44464B',
        500: '#323339', // surface-container-highest, outline-surface-default
        600: '#292B30',
        700: '#202227',
        800: '#17191E', // surface-container
        900: '#05060C',
      },

      clight: {
        50: '#040405',
        100: '#4C4E51',
        200: '#65676B',
        300: '#818388',
        400: '#AAABAE',
        500: '#D1D2D3',
        600: '#E9E9EA',
        700: '#EEEEEF',
        800: '#F4F4F4',
        900: '#F9FAFA',
      },
    },
    danger: '#FF077F',
    warning: '#FF8700',
    success: '#00F780',
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
        '--tw-prose-bullets': theme('colors.vega-light-300'),
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
        '--tw-prose-bullets': theme('colors.vega-dark-300'),
        '--tw-prose-links': theme('colors.vega-dark-300'),
      },
    },
  }),
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
    './tailwind/index.js',
  ],
  theme: {
    extend: theme,
  },
  plugins: [
    vegaCustomClasses,
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-hyphens'),
    require('@tailwindcss/line-clamp'),
  ],
}
