/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
 

      screens: {
        'xs':'280px',
        'sm': '450px',
  
        'md': '700px',
  
        'lg': '1100px',
  
        'xl': '1200px',
  
        '2xl': '1536px',
      }
  },
  plugins: [],
}

