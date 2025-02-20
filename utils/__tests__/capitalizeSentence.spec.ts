import { capitalizeSentence } from "../capitalizeSentence";
import { describe, expect, test } from "@jest/globals";

describe("Unit Test Suite capitalizeSentence", () => {
  test("should return something", () => {
    expect(
      capitalizeSentence("Hello world, pikachu. Nice to meet you. "),
    ).toBeDefined();
  });

  test("return the good configuration of sentence", () => {
    expect(capitalizeSentence("hello world, pikachu. nice to meet you.")).toBe(
      "Hello world, pikachu. Nice to meet you.",
    );
  });
});
