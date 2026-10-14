# Hex-to-RGB REST API

## Overview

This project implements a JavaScript library that converts hexadecimal color values into RGB values. An Express REST API provides access to the conversion function. The project includes automated unit and integration tests using Mocha, Chai, and Supertest.

## Technologies

- JavaScript and Node.js
- Express
- Mocha
- Chai
- Supertest
- cURL

## Project Structure

```text
hex-rgb-api/
├── tests/
│   ├── hexToRgb.test.js
│   └── server.test.js
├── .gitignore
├── hexToRgb.js
├── server.js
├── package.json
└── package-lock.json
```

## Installation

Make sure Node.js and npm are installed. Clone the repository and open the project directory in a terminal.

Install the required dependencies:

```bash
npm install
```

## Running the API

Start the Express server:

```bash
node server.js
```

The server runs at `http://localhost:3000`.

### API Endpoint

**Method:** GET

**Route:** `/api/hex-to-rgb`

**Query parameter:** `hex`

Example request:

```text
http://localhost:3000/api/hex-to-rgb?hex=FF5733
```

Successful response:

```json
{
  "r": 255,
  "g": 87,
  "b": 51
}
```

Valid requests return HTTP status `200`. Missing parameters and invalid hexadecimal values return HTTP status `400` with an error message.

## Running the Tests

Run all unit and integration tests with:

```bash
npm test
```

The unit tests verify the hexadecimal conversion function. The integration tests check the Express API route, response values, and error handling.

The test suite contains seven tests: four unit tests and three integration tests.

## Manual API Testing

With the server running, use cURL:

```bash
curl.exe -i "http://localhost:3000/api/hex-to-rgb?hex=FF5733"
```

Test invalid input:

```bash
curl.exe -i "http://localhost:3000/api/hex-to-rgb?hex=GGGGGG"
```

## Repository

GitHub: https://github.com/tawhidahamed/hex-rgb-api
