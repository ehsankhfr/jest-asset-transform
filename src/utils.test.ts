import { camelcase } from "./utils";

describe("camelcase function", () => {
  it("should convert a sentence to camelCase", () => {
    const input = "this is a test sentence";
    const expectedOutput = "ThisIsATestSentence";
    const result = camelcase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle special characters and numbers", () => {
    const input = "word123_and_Special_chars";
    const expectedOutput = "Word123AndSpecialChars";
    const result = camelcase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle an empty string", () => {
    const input = "";
    const expectedOutput = "";
    const result = camelcase(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle single characters", () => {
    const input = "aBcD";
    const expectedOutput = "Abcd";
    const result = camelcase(input);
    expect(result).toBe(expectedOutput);
  });
});
