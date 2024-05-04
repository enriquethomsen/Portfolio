/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
    },
   
    fontFamily: {
      signature: 'Great Vibes',
      primary: 'Raleway', 
      secondary: 'Rajdhani',
      home: 'Anton',
     
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    backgroundImage: {
      about: "url('./assets/about.png')",
      site: "url('./assets/site.jpg')",
      site2: "url('./assets/site2-min.jpg')",
      site3: "url('./assets/site3-min.jpg')",
      site4: "url('./assets/aesthetic-min.jpg')",
      site5: "url('./assets/test7.jpeg')",
     
    },
    
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}
}

