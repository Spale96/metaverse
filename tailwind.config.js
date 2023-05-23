/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      keyframes: {
        ping: {
          '25%, 25%': { transform: 'scale(1.1)', opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-15%)' },
        }
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'pulse': 'pulse 1s infinite',
        'ping': 'ping 2s infinite',
        'bounce': 'bounce 3s infinite'
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
