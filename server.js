const express = require("express");
const hexToRgb = require("./hexToRgb");

const app = express();

/**
 * Converts a hexadecimal color to RGB through the REST API.
 * Example: GET /api/hex-to-rgb?hex=FF5733
 */
app.get("/api/hex-to-rgb", (req, res) => {
    const { hex } = req.query;

    if (!hex) {
        return res.status(400).json({
            error: "Missing hex query parameter."
        });
    }

    try {
        const rgb = hexToRgb(hex);
        return res.status(200).json(rgb);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
});

// Start the server when this file is run directly.
if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running at http://localhost:3000");
    });
}

module.exports = app;