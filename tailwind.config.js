/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        ...colors,
        'primary': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#0f0f0f',
        }
      })
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [
    require('preline/plugin')
  ],
}
