export const getColorStats = (statValue: number, isHP: boolean = false) => {
  if (isHP) return "#0EA5E9";
  if (statValue < 25) return "#EF4444";
  if (statValue >= 25 && statValue < 50) return "#F97316";
  if (statValue >= 50 && statValue < 75) return "#EAB308";
  if (statValue >= 75) return "#22C55E";
};
