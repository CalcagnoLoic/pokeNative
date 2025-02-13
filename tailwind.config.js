/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        havelockBlue: "#579DD9", //Type eau
        tanHide: "#FDA054", //Type feu
        fern: "#60BB5B", //Type plante
        rawSienna: "#D77E4E", //Type sol
        yuma: "#CBBD8E", //Type roche
        wedgehood: "#53899F", //Type acier
        downy: "#76CEC0", //Type glace
        energyYellow: "#F6D751", //Type électrique
        scienceBlue: "#086DBE", //Type dragon
        blueViolet: "#616DBC", //Type spectre
        froly: "#F87278", //Type psy
        regentGray: "#929AA2", //Type normal
        cabaret: "#D24064", //Type combat
        amethyst: "#A865CA", //Type poison
        atlantis: "#93C12B", //Type insecte
        dullLavender: "#92ACE1", //Type vol
        scarpaFlow: "#5E5769", //Type ténèbre
        lavenderMagenta: "#EE8FE5", //Type féé

        supernova: "#FFCB05", //jaune intense du titre
        lucky: "#BA9D1E", //jaune plus foncé
        azure: "#3461AC", //border bleue du titre
        biskay: "#1B2C5E", //azure plus foncé

        crimson: "#D9303C",
        midGray: "#636071",
        periglacialBlue: "#DFE5D8",
        snuff: "#DCDBEB",
      },
      fontFamily: {
        mBold: ["Montserrat-Bold", "sans-serif"],
        mExtrabold: ["Montserrat-BoldItalic", "sans-serif"],
        mBoldi: ["Montserrat-ExtraBold", "sans-serif"],
        mItalic: ["Montserrat-Italic", "sans-serif"],
        mMedium: ["Montserrat-Medium", "sans-serif"],
        mRegular: ["Montserrat-Regular", "sans-serif"],
        rBold: ["Roboto-Bold", "sans-serif"],
        rExtrabold: ["Roboto-BoldItalic", "sans-serif"],
        rBoldi: ["Roboto-ExtraBold", "sans-serif"],
        rItalic: ["Roboto-Italic", "sans-serif"],
        rMedium: ["Roboto-Medium", "sans-serif"],
        rRegular: ["Roboto-Regular", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};
