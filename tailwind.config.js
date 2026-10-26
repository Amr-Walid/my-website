/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.tsx', './src/**/*.{ts,tsx,js,jsx}', './public/assets/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: v('--c-base'),
        'base-2': v('--c-base-2'),
        fg: v('--c-fg'),
        muted: v('--c-muted'),
        line: v('--c-line'),
        brand: {
          300: '#8eccff',
          400: '#59b0ff',
          500: '#3b8fff',
          600: '#1b6ff5',
          700: '#1459e1'
        },
        accent: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
};
