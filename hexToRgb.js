/**
 * Converts a hexadecimal color value to RGB.
 * Accepts six hexadecimal digits, with an optional # prefix.
 *
 * @param {string} hex - The hexadecimal color value.
 * @returns {{r: number, g: number, b: number}} The RGB color.
 * @throws {Error} If the input is not a valid hexadecimal color.
 */
function hexToRgb(hex) {
    if (typeof hex !== "string") {
        throw new Error("Hex color must be a string.");
    }

    // Remove the optional # prefix.
    const value = hex.startsWith("#") ? hex.slice(1) : hex;

    // Check that the value contains exactly six hexadecimal digits.
    if (!/^[0-9A-Fa-f]{6}$/.test(value)) {
        throw new Error("Invalid hex color. Use a format like #FF5733.");
    }

    // Convert the hexadecimal pairs into decimal RGB values.
    return {
        r: parseInt(value.slice(0, 2), 16),
        g: parseInt(value.slice(2, 4), 16),
        b: parseInt(value.slice(4, 6), 16)
    };
}

module.exports = hexToRgb;