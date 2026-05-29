/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: '#6c63ff',
        accent2: '#00d4aa',
        accent3: '#ff6b6b',
        gold: '#f5a623',
      },
      animation: {
        pulse2: 'pulse2 2s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulse2: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(0,212,170,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(0,212,170,0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
