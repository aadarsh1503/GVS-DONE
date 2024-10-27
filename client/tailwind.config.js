/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', // Define your new size here
        '11xl': '11rem', // Add more if needed
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'], // Add this line
      },
      colors: {
        customBlue: '#39c1f2',
    },
    borderWidth: {
      40: '40px', // Add custom border width of 40px
      20: '20px',
  },
    },
  },
  plugins: [],
};
