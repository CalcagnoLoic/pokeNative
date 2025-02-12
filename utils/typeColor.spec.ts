import { typeColor } from "./typeColor";
import { describe, test, expect } from "@jest/globals";

describe("Unit Test Suite typeColor", () => {
  test("return something", () => {
    expect(typeColor("water")).toBeDefined();
  });

  test("return the good color for each types", () => {
    expect(typeColor("water")).toBe("#579DD9");
    expect(typeColor("fire")).toBe("#FDA054");
    expect(typeColor("grass")).toBe("#60BB5B");
    expect(typeColor("ground")).toBe("#D77E4E");
    expect(typeColor("rock")).toBe("#CBBD8E");
    expect(typeColor("steel")).toBe("#53899F");
    expect(typeColor("ice")).toBe("#76CEC0");
    expect(typeColor("electric")).toBe("#F6D751");
    expect(typeColor("dragon")).toBe("#086DBE");
    expect(typeColor("ghost")).toBe("#616DBC");
    expect(typeColor("psychic")).toBe("#F87278");
    expect(typeColor("normal")).toBe("#929AA2");
    expect(typeColor("fighting")).toBe("#D24064");
    expect(typeColor("poison")).toBe("#A865CA");
    expect(typeColor("bug")).toBe("#93C12B");
    expect(typeColor("flying")).toBe("#92ACE1");
    expect(typeColor("dark")).toBe("#5E5769");
    expect(typeColor("fairy")).toBe("#EE8FE5");
  });
});
