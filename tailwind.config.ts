import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{html,ts,md,analog,ag}'],
  theme: {
    extend: {
      colors: {
        primary: '#E91E63',
        accent: '#00BCD4',
        lighttext: '#B0BEC5',
        darkBackground: '#00171f',
        purpleBackground: '#6A1B9A',
        softPink: '#ffcfef',
        darkGray: '#282828',
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.066rem',
      '2xl': '1.421rem',
      '3xl': '1.894rem',
      '4xl': '2.525rem',
      '5xl': '3.366rem',
    },
    fontFamily: {
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },

    blur: {
      '4xl': '100px',
      '5xl': '150px',
    },
  },
  plugins: [],
} satisfies Config;
