export const getEvolutionDetails = (trigger, evolutionDetail) => {
  console.log(evolutionDetail);

  switch (trigger) {
    case "level-up":
      let condition = "Level up ";

      if (evolutionDetail.level && evolutionDetail.level !== " ")
        condition += `at level ${evolutionDetail.level}`;
      if (evolutionDetail.happiness > 0)
        condition += ` with a happiness level of ${evolutionDetail.happiness}`;

      if (evolutionDetail.affection > 0)
        condition += ` with an affection level of ${evolutionDetail.affection}`;

      if (evolutionDetail.beauty > 0)
        condition += ` with a beauty level of ${evolutionDetail.beauty}`;
      if (evolutionDetail.timeOfDay && evolutionDetail.timeOfDay.trim() !== "")
        condition += ` during the ${evolutionDetail.timeOfDay}`;
      if (evolutionDetail.location && evolutionDetail.location.trim() !== "")
        condition += ` at a specific location: ${evolutionDetail.location}`;
      if (evolutionDetail.needsRain !== undefined)
        condition += evolutionDetail.needsRain ? " at rainy day" : "";
      if (evolutionDetail.knownMove && evolutionDetail.knownMove.trim() !== "")
        condition += ` if ${evolutionDetail.knownMove} is known`;

      return condition;

    case "trade":
      return "Evolves by trading";
    case "use-item":
      return evolutionDetail.item
        ? `Use this item: ${evolutionDetail.item}`
        : "Use an item to evolve";
    case "shed":
      return "Sheds its skin to evolve";
    case "spin":
      return "Spins to evolve";
    case "tower-of-darkness":
      return "Evolves at the Tower of Darkness";
    case "tower-of-waters":
      return "Evolves at the Tower of Waters";
    case "three-critical-hits":
      return "Requires three critical hits to evolve";
    case "take-damage":
      return "Requires taking damage to evolve";
    case "other":
      return "Other evolution condition";
    case "agile-style-move":
      return "Requires an agile style move to evolve";
    case "strong-style-move":
      return "Requires a strong style move to evolve";
    case "recoil-damage":
      return "Requires recoil damage to evolve";

    default:
      return "This is a base Pokémon with no prior evolution.";
  }
};
