const typeColors = {
  water: "#4C91D6",
  fire: "#FF9D53",
  grass: "#63BC5B",
  ground: "#DA7844",
  rock: "#C8B88C",
  steel: "#5A8FA2",
  ice: "#75CFC1",
  electric: "#F3D338",
  dragon: "#036DC5",
  ghost: "#5169AE",
  psychic: "#F97277",
  normal: "#919AA2",
  fighting: "#CF3E69",
  poison: "#AC6AC9",
  bug: "#91C228",
  flying: "#90AADE",
  dark: "#5A5266",
  fairy: "#ED90E7",
};

export const typeColor = (typeName: keyof typeof typeColors) => {
  return typeColors[typeName] || "";
};
