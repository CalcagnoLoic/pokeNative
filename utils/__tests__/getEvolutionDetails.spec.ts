import { getEvolutionDetails } from "../getEvolutionDetails";
import { describe, test, expect } from "@jest/globals";

describe("Unit Test Suite getEvolutionDetails", () => {
  test("return something", () => {
    expect(getEvolutionDetails("level-up", 21)).toBeDefined();
  });

  test("return the correct evolution method for level-up at specific level", () => {
    const evolutionDetail = { level: 25 };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up at level 25",
    );
  });
  test("return the correct evolution method for level-up at specific happiness level", () => {
    const evolutionDetail = { happiness: 220 };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up with a happiness level of 220",
    );
  });
  test("return the correct evolution method for level-up at specific affection level", () => {
    const evolutionDetail = { affection: 2 };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up with an affection level of 2",
    );
  });
  test("return the correct evolution method for level-up at specific beauty level", () => {
    const evolutionDetail = { beauty: 5 };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up with a beauty level of 5",
    );
  });
  test("return the correct evolution method for level-up at specific time of the day", () => {
    const evolutionDetail = { timeOfDay: "night" };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up during the night",
    );
  });
  test("return the correct evolution method for level-up at specific location", () => {
    const evolutionDetail = { location: "Mont Courronné" };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up at a specific location: Mont Courronné",
    );
  });
  test("return the correct evolution method for level-up at rainy day", () => {
    const evolutionDetail = { needsRain: true };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up at rainy day",
    );
  });
  test("return the correct evolution method for level-up with known move", () => {
    const evolutionDetail = { knownMove: "boost" };
    expect(getEvolutionDetails("level-up", evolutionDetail)).toBe(
      "Level up if boost is known",
    );
  });

  test("return the correct evolution method", () => {
    const evolutionDetail = { item: "moon stone" };

    expect(getEvolutionDetails("trade", "")).toBe("Evolves by trading");
    expect(getEvolutionDetails("shed", "")).toBe("Sheds its skin to evolve");
    expect(getEvolutionDetails("spin", "")).toBe("Spins to evolve");
    expect(getEvolutionDetails("tower-of-darkness", "")).toBe(
      "Evolves at the Tower of Darkness",
    );
    expect(getEvolutionDetails("tower-of-waters", "")).toBe(
      "Evolves at the Tower of Waters",
    );
    expect(getEvolutionDetails("three-critical-hits", "")).toBe(
      "Requires three critical hits to evolve",
    );
    expect(getEvolutionDetails("take-damage", "")).toBe(
      "Requires taking damage to evolve",
    );
    expect(getEvolutionDetails("other", "")).toBe("Other evolution condition");
    expect(getEvolutionDetails("agile-style-move", "")).toBe(
      "Requires an agile style move to evolve",
    );
    expect(getEvolutionDetails("strong-style-move", "")).toBe(
      "Requires a strong style move to evolve",
    );
    expect(getEvolutionDetails("recoil-damage", "")).toBe(
      "Requires recoil damage to evolve",
    );
    expect(getEvolutionDetails("", "")).toBe(
      "This is a base Pokémon with no prior evolution.",
    );
    expect(getEvolutionDetails("use-item", "")).toBe("Use an item to evolve");
    expect(getEvolutionDetails("use-item", evolutionDetail)).toBe(
      "Use this item: moon stone",
    );
  });
});
