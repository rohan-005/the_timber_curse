/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'eerie': ['Eerie', 'sans-serif'],
        'horror': ['Horror', 'sans-serif'],
        'creepy': ['Creepy', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'parchment': '#f0e6d2',
        'blood-red': '#8a0303',
        'spooky-green': '#1a3c34',
        'haunted-purple': '#4a1e4a',
        'zombie-green': '#2d5016',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 3s linear infinite',
        'spooky-float': 'spooky-float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #8a0303, 0 0 10px #8a0303, 0 0 15px #8a0303, 0 0 20px #8a0303',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 10px #8a0303, 0 0 20px #8a0303, 0 0 30px #8a0303, 0 0 40px #8a0303',
            transform: 'scale(1.05)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'flicker': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'spooky-float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-15px) translateX(10px)' },
          '50%': { transform: 'translateY(-5px) translateX(-10px)' },
          '75%': { transform: 'translateY(-10px) translateX(5px)' },
        },
        'glow': {
          'from': { textShadow: '0 0 5px #8a0303, 0 0 10px #8a0303' },
          'to': { textShadow: '0 0 10px #8a0303, 0 0 20px #8a0303, 0 0 30px #8a0303' },
        }
      },
      backgroundImage: {
        'parchment-texture': "url('/images/parchment-texture.jpg')",
        'blood-splatter': "url('/images/blood-splatter.png')",
      }
    },
  },
  plugins: [],
}