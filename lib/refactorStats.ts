const typeStats = {
  hp: "Hit Point",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Special Attack",
  "special-defense": "Special Defense",
  speed: "Speed",
};

export const refactorStats = (statName: keyof typeof typeStats) => {
  return typeStats[statName] || null;
};
