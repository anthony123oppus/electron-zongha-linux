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
        vividbLUE : "#1f8ef2"
      },
    },
  },
  plugins: [],
}

