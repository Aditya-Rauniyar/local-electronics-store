/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#0F1115',
        ink: '#F8FAFC',
        brand: '#00B7A8',
        brandDark: '#00877C',
        accent: '#F59E0B',
        sky: '#0B1320',
      },
      fontFamily: {
        heading: ['Hind', 'system-ui', 'sans-serif'],
        body: ['Noto Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.05)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '0.85' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.6s ease-in-out 2',
      },
    },
  },
  plugins: [],
}
