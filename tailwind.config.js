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
        vividbLUE : "#1f8ef2",
        darkTeal : "#1a3749"
      },
      backgroundColor : {
        blackBlue : "#021225",
        mightnightBlue : "#041c40",
        softBlue : "#93bcf0",
        darkBlue : "#0e518b",
        vividbLUE : "#1f8ef2",
        darkTeal : "#1a3749"
      },
      backgroundImage: {
        'base-gradient': "linear-gradient(0deg, rgba(26,55,73,1) 8%, rgba(134,202,223,1) 100%)",
        'reverse-gradient': "linear-gradient(0deg, rgba(134,202,223,1) 8%, rgba(26,55,73,1) 100%)",
      },
      boxShadow : {
        insideShadow : 'inset 8px 8px 12px #c5c5c5, inset 4px 4px 12px #ffffff',
        outsideShadow : '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff',
        profilePicShadow : 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
        lightShadow : 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
      },
      dropShadow : {
        blob : '0px 2px 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

