/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#f5f3e7',
        'earth-green': '#5e8a3b',
        'sunrise-gold': '#e2b352',
        'dark': '#2e2e2e',
        'light': '#fafaf8',
      },
        fontFamily: {
          'playfair': ['var(--font-playfair)', 'serif'],
          'inter': ['var(--font-inter)', 'sans-serif'],
          sans: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
    },
  },
  plugins: [],
}

