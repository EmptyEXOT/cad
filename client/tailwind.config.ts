/** @type {import('tailwindcss').Config} */
import {Config} from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'secondary-light': '#9F9F9F',
      'primary-light': '#E6E6E6',
      'contrast-light': '#FFFFFF',
      'secondary-dark': '#121212',
      'primary-dark': '#0D0D0D',
      'contrast-dark': '#000000',
      'neutral-100': '#DBDBDB',
      'neutral-250': '#808080',
      'neutral-300': '#616161',
      'neutral-400': '#464646',
      'neutral-500': '#373737',
      'neutral-650': '#282828',
      'neutral-800': '#1F1F1F',
      'cyan-300': '#0D7070',
      'cyan-500': '#185656',
      'cyan-600': '#084D4D',
      'cyan-800': '#0B2727',
      'red-light': '#D72E4D',
      'red-dark': '#6B2431',
    },
    extend: {
      grayscale: {
        80: '80%'
      },
      brightness: {
        30: '30%',
        20: '20%',
        10: '10%',
      }
    }
  },
  plugins: [],
} satisfies Config

