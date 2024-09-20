/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        highlight: 'var(--highlight-color)',
        textBlue: 'var(--text-color)',
        primaryBlue: 'var(--primary-blue)',
        secondaryBlue:'var(--secondary-blue)',
        accentGray: 'var(--accent-gray)',
        textWhite: 'var(--text-white)',
      }
    }
  },
  plugins: [],
}

