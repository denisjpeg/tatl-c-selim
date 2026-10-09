/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#061D1E',
          900: '#0C3A3B',
          850: '#0F4648',
          800: '#0F4C4E',
          700: '#156163',
          600: '#1C797B',
        },
        gold: {
          100: '#FCF8E8',
          200: '#F5EBC4',
          300: '#EED998',
          400: '#E4C268',
          500: '#D4AF37',
          600: '#C5A059',
          700: '#997B28',
          800: '#735C1D',
          900: '#4D3E13',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F8F5EC',
          200: '#EFE9DA',
          300: '#E4DAC2',
        },
        charcoal: {
          900: '#121516',
          800: '#1A1A1A',
          700: '#2A2E30',
          600: '#404548',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.4)',
        'luxury': '0 10px 30px -10px rgba(6, 29, 30, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
