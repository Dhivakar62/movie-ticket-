/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dream: {
          primary: '#6722A0',
          primaryDark: '#531584',
          plum: '#321044',
          orchid: '#9B4BC5',
          softPink: '#F9E5F2',
          lavender: '#F5F0FC',
          periwinkle: '#E9E5FA',
          paleBlue: '#E6ECFF',
          pearl: '#FFFFFF',
          border: '#E8E1EF',
          text: '#241532',
          muted: '#746A7D',
          amber: '#E6A817',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Poppins"', '"Inter"', 'sans-serif'],
        serif: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'dream-sm': '0 2px 10px rgba(103, 34, 160, 0.06)',
        'dream-md': '0 8px 30px rgba(103, 34, 160, 0.10)',
        'dream-lg': '0 16px 45px rgba(103, 34, 160, 0.15)',
        'dream-glow': '0 0 25px rgba(103, 34, 160, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F8F4FD 0%, #EFE8FA 45%, #FDEEE9 100%)',
        'purple-gradient': 'linear-gradient(135deg, #9B4BC5 0%, #6722A0 100%)',
      }
    },
  },
  plugins: [],
}
