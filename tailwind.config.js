/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        havelockBlue: "#4C91D6", //Type eau
        tanHide: "#FF9D53", //Type feu
        fern: "#63BC5B", //Type plante
        rawSienna: "#DA7844", //Type sol
        yuma: "#C8B88C", //Type roche
        wedgehood: "#5A8FA2", //Type acier
        downy: "#75CFC1", //Type glace
        energyYellow: "#F3D338", //Type électrique
        scienceBlue: "#036DC5", //Type dragon
        blueViolet: "#5169AE", //Type spectre
        froly: "#F97277", //Type psy
        regentGray: "#919AA2", //Type normal
        cabaret: "#CF3E69", //Type combat
        amethyst: "#AC6AC9", //Type poison
        atlantis: "#91C228", //Type insecte
        dullLavender: "#90AADE", //Type vol
        scarpaFlow: "#5A5266", //Type ténèbre
        lavenderMagenta: "#ED90E7", //Type féé

        lucky: "#BA9D1E", //jaune plus foncé
        azure: "#3461AC", //border bleue du titre
        biskay: "#1B2C5E", //azure plus foncé

        crimson: "#D9303C",
        midGray: "#636071",
        periglacialBlue: "#DFE5D8",
        snuff: "#DCDBEB",
        
        //palette harmonieuse
        zircon: "#F0F4FF", //background général
        macaroniAndCheese: "#FFBE76", //boutons secondaire, filtre sélectionné
        geyser: "#D6DDE5", //filtre déselectionné
        riverBed: "#4A5568", //titre important
        tropicalBlue: "#BED9F9"
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
