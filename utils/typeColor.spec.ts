import { typeColor } from "./typeColor";
import { describe, test, expect } from "@jest/globals";

describe("Unit Test Suite typeColor", () => {
  test("return something", () => {
    expect(typeColor("water")).toBeDefined();
  });

  test("return the good color for each types", () => {
    expect(typeColor("water")).toBe("#4C91D6");
    expect(typeColor("fire")).toBe("#FF9D53");
    expect(typeColor("grass")).toBe("#63BC5B");
    expect(typeColor("ground")).toBe("#DA7844");
    expect(typeColor("rock")).toBe("#C8B88C");
    expect(typeColor("steel")).toBe("#5A8FA2");
    expect(typeColor("ice")).toBe("#75CFC1");
    expect(typeColor("electric")).toBe("#F3D338");
    expect(typeColor("dragon")).toBe("#036DC5");
    expect(typeColor("ghost")).toBe("#5169AE");
    expect(typeColor("psychic")).toBe("#F97277");
    expect(typeColor("normal")).toBe("#919AA2");
    expect(typeColor("fighting")).toBe("#CF3E69");
    expect(typeColor("poison")).toBe("#AC6AC9");
    expect(typeColor("bug")).toBe("#91C228");
    expect(typeColor("flying")).toBe("#90AADE");
    expect(typeColor("dark")).toBe("#5A5266");
    expect(typeColor("fairy")).toBe("#ED90E7");
  });
});
