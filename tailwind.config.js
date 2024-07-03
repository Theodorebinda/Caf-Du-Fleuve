/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'tours': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          'fade-in': 'fade-in 2s ease-out',
          'tours': 'tours 2s ease-in-out infinite'
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          italianno:[ "Italianno", "cursive"]
          
        },
       
      },
    },
  },
  plugins: [],
}