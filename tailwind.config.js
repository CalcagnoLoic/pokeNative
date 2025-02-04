/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
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

        roman: "#D85962",
        midGray: "#636071",
        periglacialBlue: "#DFE5D8",
        snuff: "#DCDBEB",
      },
      fontFamily: {
        "kregular": ["Kaisei-Regular", "sans-serif"],
        "kmedium": ["Kaisei-Medium", "sans-serif"],
        "kextrabold": ["Kaisei-ExtraBold", "sans-serif"],
        "kbold": ["Kaisei-Bold", "sans-serif"],
        "preregular": ["Press-Regular", "sans-serif"],
      }
    },
  },
  plugins: [],
};
