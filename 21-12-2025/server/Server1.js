// Import the built-in 'http' module to create and manage HTTP servers
const http = require("http");
// Import the built-in 'fs' module to handle file system operations like appending to files
const fs = require("fs");

// Create an HTTP server, that handles incoming requests and sends responses
const myServer = http.createServer((req, res) => {
    // Create a log entry string with the current timestamp, requested URL, and a message
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    // Asynchronously append the log entry to 'log.txt' file
    fs.appendFile('log.txt', log, (err, data) => {
        // Use a switch statement to handle different URL routes
        switch (req.url) {
            // If the request is for the root path '/', respond with "HomePage"
            case "/":
                res.end("HomePage");
                break;
            // If the request is for '/about', respond with a personal introduction
            case "/about":
                res.end("Hi, I am Jyotiraj Sutar");
                break;
            // For any other URL, respond with a 404 error message
            default:
                res.end("404 Not Found");
        }
    });
});

// Start the server and listen on port 5050
myServer.listen(5050, () => {
    // Message to the console when the server starts successfully
    console.log("Server Started");
});