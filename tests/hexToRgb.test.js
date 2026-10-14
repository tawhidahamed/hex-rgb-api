const { expect } = require("chai");
const hexToRgb = require("../hexToRgb");

describe("hexToRgb()", function () {
    // Test a valid hexadecimal color with #.
    it("should convert a hex color to RGB", function () {
        const result = hexToRgb("#FF5733");

        expect(result).to.deep.equal({
            r: 255,
            g: 87,
            b: 51
        });
    });

    // Test a hexadecimal color without #.
    it("should accept hex values without #", function () {
        expect(hexToRgb("000000")).to.deep.equal({
            r: 0,
            g: 0,
            b: 0
        });
    });

    // Test invalid hexadecimal input.
    it("should throw an error for invalid hex values", function () {
        expect(() => hexToRgb("GGGGGG"))
            .to.throw("Invalid hex color");
    });

    // Test input that is not a string.
    it("should throw an error for non-string input", function () {
        expect(() => hexToRgb(123456))
            .to.throw("Hex color must be a string.");
    });
});