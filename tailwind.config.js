/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#08090c',
          dark: '#0e1117',
          surface: '#131720',
          card: '#181d28',
          cardHover: '#1f2535',
          border: '#282f42',
          borderLight: '#39425a',
          gold: '#d4af37',
          goldLight: '#f6d87c',
          goldDark: '#997316',
          amber: '#e6a817',
        }
      },
      fontFamily: {
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.2)',
        'gold-md': '0 0 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 35px rgba(212, 175, 55, 0.35)',
        'screen-glow': '0 -15px 45px rgba(212, 175, 55, 0.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5d061 0%, #d4af37 50%, #aa771c 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
        'dark-glass': 'linear-gradient(135deg, rgba(26, 31, 44, 0.7) 0%, rgba(14, 17, 24, 0.85) 100%)',
      }
    },
  },
  plugins: [],
}
