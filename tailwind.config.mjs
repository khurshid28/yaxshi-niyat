import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
import twElements from 'tw-elements-react/dist/plugin.cjs'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  plugins: [tailwindcssAnimate, typography, twElements],
  prefix: '',
  safelist: [],
  theme: {

    extend: {
      fontFamily: {
        nunitoSans: ['var(--font-nunito-sans)', 'sans-serif'],
        sofiaSans: ['var(--font-sofia-sans)', 'sans-serif'],
      },
      colors: {
        primary: '#023047',
        orange: '#FB8500',
        secondary: {
          200: '#617A8B',
          300: '#617A8BBF',
        },
      },
      screens: {
        sm: '640px',
        md: '960px',
        lg: '1280px',
      },
    },
    container: {
      center: true,
      padding: '48px',
      screens: {
        DEFAULT: '100%',
      },
    },

  },
}

export default config
