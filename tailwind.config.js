/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'russo': ['Russo One', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'neon-green': '#00ff41',
        'neon-orange': '#ff6b35',
        'neon-blue': '#0066ff',
        'neon-yellow': '#ffff00',
        'neon-purple': '#8a2be2',
        'background': '#0a0a0a',
        'foreground': '#ffffff',
        'card-bg': '#1a1a1a',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        'brutalist': '4px 4px 0px var(--neon-green)',
        'brutalist-lg': '8px 8px 0px var(--neon-orange)',
        'brutalist-xl': '12px 12px 0px var(--neon-blue)',
      },
    },
  },
  plugins: [],
}
