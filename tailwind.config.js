/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors : {
        blackBlue : "#021225",
        mightnightBlue : "#041c40",
        softBlue : "#93bcf0",
        darkBlue : "#0e518b",
        vividbLUE : "#1f8ef2"
      },
      backgroundColor : {
        blackBlue : "#021225",
        mightnightBlue : "#041c40",
        softBlue : "#93bcf0",
        darkBlue : "#0e518b",
        vividbLUE : "#1f8ef2",
        
      },
      boxShadow : {
        insideShadow : 'inset 8px 8px 12px #c5c5c5, inset 4px 4px 12px #ffffff',
        outsideShadow : '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff',
        profilePicShadow : 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
      },
      dropShadow : {
        blob : '0px 2px 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

