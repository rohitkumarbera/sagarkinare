/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F5F0',
          dark: '#EFEAE2',
          card: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#B88A44',
          light: '#D8B87A',
          shimmer: '#E4C88E',
          dark: '#966E30',
        },
        espresso: '#1E1B18',
        taupe: '#5F5A54',
        linen: '#E9E2D8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 40px -15px rgba(30, 27, 24, 0.07)',
        goldGlow: '0 8px 25px -5px rgba(184, 138, 68, 0.25)',
      },
    },
  },
  plugins: [],
}
