/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'header': 'calc(100% - 5rem)'
      },
      minHeight: {
        'main': "calc(100vh - 62px)"
      },     
      container: {
        center: true, // Centers the container
        screens: {
          sm: '640px',   // Small screens
          md: '768px',   // Medium screens
          lg: '1024px',  // Large screens
          xl: '1280px',  // Extra large screens
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

