// Import Chai assertions, Supertest, and the Express application.
const { expect } = require("chai");
const request = require("supertest");
const app = require("../server");

/**
 * Integration tests for the hex-to-RGB REST API.
 */
describe("Hex-to-RGB API", function () {

    // Test a valid request.
    it("should return RGB values for a valid hex color", async function () {
        const response = await request(app)
            .get("/api/hex-to-rgb")
            .query({ hex: "FF5733" });

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({
            r: 255,
            g: 87,
            b: 51
        });
    });

    // Test a request without the required parameter.
    it("should return 400 when the hex parameter is missing", async function () {
        const response = await request(app)
            .get("/api/hex-to-rgb");

        expect(response.status).to.equal(400);
        expect(response.body.error)
            .to.equal("Missing hex query parameter.");
    });

    // Test an invalid hex color.
    it("should return 400 for an invalid hex color", async function () {
        const response = await request(app)
            .get("/api/hex-to-rgb")
            .query({ hex: "GGGGGG" });

        expect(response.status).to.equal(400);
        expect(response.body.error)
            .to.include("Invalid hex color");
    });
});