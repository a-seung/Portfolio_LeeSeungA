/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5477AD', // #5477AD 색상을 'primary'로 정의
        secondary: '#CEDBF0', // #CEDBF0 색상을 'secondary'로 정의
        ggray : '#E0E0E0',
      },
    },
  },
  plugins: [],
}

