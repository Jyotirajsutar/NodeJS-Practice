// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Create an HTTP server, that handles incoming requests and sends responses
const server = http.createServer((req, res) => {

    // Check if the request URL is the root path "/"
    if (req.url === "/") {
        // Send a response with "Home Page" and end the response
        res.end("Home Page");
    // Check if the request URL is "/about"
    } else if (req.url === "/about") {
        // Send a response with "About Page" and end the response
        res.end("About Page");
    // If neither condition is met, handle as a 404 error
    } else {
        // Send a response with "404 Page Not Found" and end the response
        res.end("404 Page Not Found");
    }

});

// Start the server and listen on port 5000
server.listen(5000, () => {
    // Message to the console when the server is running
    console.log("Server running on port 5000");
});
