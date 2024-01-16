import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px'
      },
      colors: {
        relazee: {
          primary: '#FF4401',
          orange: '#FF6934',
          dark: {
            1: '#1E252B',
            2: '#262D34',
            3: '#2C353D'
          },
          text: {
            heading: '#F7F7F7',
            body: {
              1: '#C5D0E6',
              2: '#97989D',
              3: '#858EAD'
            },
            placeholder: '#858EAD'
          },
          icon: {
            nav: '#F4F6F8'
          },
          accent: {
            yellow: {
              1: '#EA942C',
            },
            blue: {
              1: '#5D95E8'
            }
          },
          border: '#C5D0E6'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
