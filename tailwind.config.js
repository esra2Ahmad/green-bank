/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    
        backgroundImage: {
          'dora': "url('/images/dora.png')", 
          'radial-gradient': "radial-gradient(40.40% 40.55% at 94.76% 6.29%, rgba(43, 179, 42, 0.10) 0%, rgba(43, 179, 42, 0.06) 100%)",
        },
        fontFamily:{
     

          'M PLUS 1': ['M Plus 1', 'sans-serif'],
    
          
              },
       
      colors:{
        'blackbg':"#1c1c1c",
        'green':"#2BB32A",
        'gray':"#ADB2B1",
        'gray1':"#B9BEBD"
      },
     
     
    },
  },
  plugins: [],
}
