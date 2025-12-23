// Load environment variables from a .env file into process.env using the dotenv package
require("dotenv").config();

// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Import the custom 'App' module 
const app = require("./App");

// Create an HTTP server using the http module, with a request handler function
const server = http.createServer((req, res) => {
    // Set the response header with status code 200 and content type as plain text
    // req.writeHead(200, { "Content-Type": "text/plain" });
    // End the response by sending a simple message to the client
    res.end("Hello, this is a simple HTTP server!\n");
});
// Define the port number, using the PORT environment variable if set, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    // Log a message to the console indicating the server is running and on which port
    console.log(`Server is running on port ${PORT}`);
});
