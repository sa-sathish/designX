/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0056D6',
          50: '#EBF2FF',
          100: '#CCE0FF',
          200: '#99C0FF',
          300: '#66A1FF',
          400: '#3381FF',
          500: '#0056D6',
          600: '#0047B3',
          700: '#003890',
          800: '#002A6D',
          900: '#001B4A',
        },
        navy: {
          DEFAULT: '#0A1628',
          50: '#E8EBF0',
          100: '#C5CDD8',
          200: '#8B9AB5',
          300: '#526793',
          400: '#1E3461',
          500: '#0A1628',
          600: '#091422',
          700: '#07101C',
          800: '#050C16',
          900: '#030810',
        },
        engineering: {
          blue: '#0056D6',
          electric: '#00A3FF',
          steel: '#6B7B8D',
          titanium: '#8D9BA8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'engineering-grid': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 86 214 / 0.07)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
