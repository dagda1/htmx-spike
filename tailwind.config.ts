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
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography, aspectRatio],
} satisfies Config;
