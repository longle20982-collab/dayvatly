/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        physics: {
          dark: '#0f2b5c',
          navy: '#1e3a8a',
          blue: '#2563eb',
          light: '#f0f7ff',
          teal: '#0d9488',
          accent: '#14b8a6',
          cyan: '#06b6d4',
          surface: '#f8fafc',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
