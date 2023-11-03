import Transform from "./";

describe("SVG Processing", () => {
  it("should create a PascalCase component for an SVG file", () => {
    const filename = "sample-file.svg";
    const src = "Sample SVG content";
    const result = Transform.process(src, filename);
    const matches = result.code.match(/function\s+(\w+)/);
    const componentName = matches ? matches[1]: '';

    // Ensure that the generated component name is in PascalCase and includes "Svg"
    expect(componentName).toMatch(/^Svg([A-Z][a-z]+)+[A-Z0-9]*$/);
  });

  it("should create a module export for a non-SVG file", () => {
    const filename = "sample-file.png";
    const src = "Sample non-SVG content";
    const result = Transform.process(src, filename);

    // Ensure that the code exports the asset filename
    expect(result.code).toContain(`module.exports = "sample-file.png";`);
  });

  it("should handle special characters in SVG file names", () => {
    const filename = "special@file&name.svg";
    const src = "Special SVG content";
    const result = Transform.process(src, filename);
    const matches = result.code.match(/function\s+(\w+)/);
    const componentName = matches ? matches[1]: '';

    // Ensure that the generated component name is in PascalCase and includes "Svg"
    expect(componentName).toMatch(/^Svg([A-Z][a-z]+)+[A-Z0-9]*$/);
  });
});
