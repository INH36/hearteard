/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceUp: 'bounceUp 200ms ease-in-out',
      },
      keyframes: {
        // 跳动效果
        bounceUp: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-4px)'
          }
        },
      }
    },
  },
  plugins: [],
}