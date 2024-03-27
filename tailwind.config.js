/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/model.html",
    "./src/modelS.html",
    "./src/modelY.html",
    "./src/modelX.html",
    "./src/model3.html",
    "./src/solarroof.html",
    "./src/powerwall.html",
    "./src/cyber.html",
    "./src/cybermodel.html",
    "./src/phones.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    screens:{
      'sm':'640px',
      'md':'1224px',
      'lg':'1024px',

    },
  },
  plugins: [],
}