import { getColorStats } from "../getColorStat";
import { describe, test, expect } from "@jest/globals";

describe("Unit Test Suite getColorStat", () => {
  test("return something", () => {
    expect(getColorStats(25)).toBeDefined();
  });

  test("return red color if stat value is strictly less than 25%", () => {
    expect(getColorStats(19)).toBe("#EF4444");
  });

  test("return orange color if stat value is between 25% and 49%", () => {
    expect(getColorStats(42)).toBe("#F97316");
  });

  test("return yellow color if stat value is between 50% and 74%", () => {
    expect(getColorStats(64)).toBe("#EAB308");
  });

  test("return green color if stat value is greater or equal to 75%", () => {
    expect(getColorStats(89)).toBe("#22C55E");
  });

  test("return a blue color if the stat value is linked to hit point", () => {
    expect(getColorStats(45, true)).toBe("#0EA5E9");
  });
});
