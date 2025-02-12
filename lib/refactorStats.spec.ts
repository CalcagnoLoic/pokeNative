import { refactorStats } from "./refactorStats";
import { describe, test, expect } from "@jest/globals";

describe("Unit Test Suite refactorStats", () => {
  test("return something", () => {
    expect(refactorStats("hp")).toBeDefined();
  });

  test("return the good statistic's name", () => {
    expect(refactorStats("hp")).toBe("Hit Point");
    expect(refactorStats("attack")).toBe("Attack");
    expect(refactorStats("defense")).toBe("Defense");
    expect(refactorStats("special-attack")).toBe("Special Attack");
    expect(refactorStats("special-defense")).toBe("Special Defense");
    expect(refactorStats("speed")).toBe("Speed");
  });
});
