import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'left-to-right': {
          from: {
            transform: 'translateX(-90%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
        'grow-to-right': {
          from: {
            width: '24px',
          },
          to: {
            width: '112px',
          },
        },
      },
      animation: {
        'left-to-right': 'left-to-right 2000ms cubic-bezier(.15,.71,.25,.98) forwards',
        'grow-to-right': 'grow-to-right 2000ms cubic-bezier(.15,.71,.25,.98) forwards',
      },
      screens: {
        sm: { max: '617px' },
        md: { min: '618px', max: '767px' },
        lg: { min: '768px', max: '1279px' },
        xl: { min: '1280px' },
      },
    },
    plugins: [],
  },
}
export default config
