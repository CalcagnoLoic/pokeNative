const typeColors = {
  water: "#579DD9",
  fire:  "#FDA054",
  grass: "#60BB5B",
  ground: "#D77E4E",
  rock: "#CBBD8E",
  steel:  "#53899F",
  ice: "#76CEC0",
  electric: "#F6D751",
  dragon: "#086DBE",
  ghost: "#616DBC",
  psychic: "#F87278",
  normal: "#929AA2",
  fighting: "#D24064",
  poison: "#A865CA",
  bug: "#93C12B",
  flying: "#92ACE1",
  dark:  "#5E5769",
  fairy: "#EE8FE5",
};

export const typeColor = (typeName: keyof typeof typeColors) => {
  return typeColors[typeName] || "";
};
