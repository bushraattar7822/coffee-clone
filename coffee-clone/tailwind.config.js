/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'joe-blue': '#118acb',
        'joe-dark': '#1a1a1a',
        'joe-cream': '#f7f5f0',
        'joe-mid': '#555555',
        'joe-light': '#e8e4dc',
        'joe-gold': '#d4a96a',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}