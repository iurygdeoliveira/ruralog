/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  darkMode: 'class',
  theme: {
      extend: {
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
              heading: ['Outfit', 'sans-serif'],
          },
          colors: {
              ruralog: {
                  green: '#5FBD00',
                  greenHover: '#4e9c00',
                  greenDark1: '#3F8B18',
                  greenDark2: '#077000',
                  yellow: '#FFCB00',
                  blueDark: '#131672',
                  blueBright: '#0085FF',
                  darkBg: '#0F172A',
                  lightBg: '#F8F9FA',
                  grayLogo: '#696969'
              }
          },
          animation: {
              'blob': 'blob 7s infinite',
              'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
          },
          keyframes: {
              blob: {
                  '0%': { transform: 'translate(0px, 0px) scale(1)' },
                  '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                  '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                  '100%': { transform: 'translate(0px, 0px) scale(1)' },
              },
              fadeInUp: {
                  '0%': { opacity: '0', transform: 'translateY(20px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
              }
          }
      }
  },
  plugins: [],
}
