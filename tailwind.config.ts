import path from 'path';
// import {fileURLToPath} from 'url'
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// TODO: check why prettier reports that __dirname already declared
const fromRoot = (p: string) => path.join(__dirname, p);

export default {
  mode: 'jit',
  content: [fromRoot('./app/**/*.+(js|jsx|ts|tsx|mdx|md)'), fromRoot('./server/**/*.+(js|jsx|ts|tsx|mdx|md)')],
  darkMode: 'class',
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1500px', // this is the "design resolution"
    },
    colors: {
      // color scheme is defined in /app.css
      transparent: 'transparent',
      current: 'currentColor',
      white: 'var(--color-white)',
      black: 'var(--color-black)',

      gray: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      slate: {
        500: 'var(--color-slate-500)',
      },
      team: {
        unknown: 'var(--color-team-unknown)',
        current: 'var(--color-team-current)',
        yellow: 'var(--color-team-yellow)',
        blue: 'var(--color-team-blue)',
        red: 'var(--color-team-red)',
      },
      yellow: {
        500: 'var(--color-yellow-500)',
        '500-inverted': 'var(--color-yellow-500-inverted)',
      },
      blue: {
        100: 'var(--color-blue-100)',
        500: 'var(--color-blue-500)',
      },
      red: {
        500: 'var(--color-red-500)',
      },
      green: {
        100: 'var(--color-green-100)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
      },
    },

    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-xslow': 'spin 7s linear infinite',
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-10': '-10',
      },
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      gridTemplateRows: {
        'max-content': 'max-content',
      },
      spacing: {
        '5vw': '5vw', // pull featured sections and navbar in the margin
        '8vw': '8vw', // positions hero img inside the margin
        '10vw': '10vw', // page margin
      },
      height: {
        hero: 'min(60rem, calc(100vh - 10rem))', // screen - navbar height (lg: only)
      },
      maxWidth: {
        '8xl': '96rem',
      },
      maxHeight: {
        '50vh': '50vh', // max height for medium size hero images
        '75vh': '75vh', // max height for giant size hero images
      },
      rotate: {
        '-135': '-135deg',
        135: '135deg',
      },

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: any) => {
        // some fontSizes return [size, props], others just size :/
        const fontSize = (size: string) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };

        return {
          DEFAULT: {
            css: [
              {
                '> *': {
                  gridColumn: '1 / -1',

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    gridColumn: '3 / span 8',
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                '> div': {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
              },
            ],
          },
        };
      },
    },
  },
  plugins: [typography, aspectRatio],
} satisfies Config;
