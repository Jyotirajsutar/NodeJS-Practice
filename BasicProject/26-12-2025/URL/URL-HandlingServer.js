// Import built-in HTTP module (to create server)
const http = require("http");

// Import File System module (for logging)
const fs = require("fs");

// Import URL module (to read pathname & query)
const url = require("url");

//  Define port (env port or default 3000)
const PORT = process.env.PORT || 3000;

// Create HTTP server
// This function runs ONLY when a request comes
const URLServer = http.createServer((req, res) => {
    //  Ignore browser favicon request
    // Browser automatically requests /favicon.ico
    if (req.url === "/favicon.ico") {
        res.end();
        return;
    }
    //  Create log string
    // Date.now() → current timestamp
    const log = `${Date.now()} : ${req.url} : New Request Received\n`;
    // Parse URL
    // true → query string to convert object 
    const myUrl = url.parse(req.url, true);

    //  See parsed URL structure
    console.log(myUrl);

    // Append log to file (asynchronous)
    fs.appendFile("log.txt", log, (err) => {
        // Error handling for file write
        if (err) {
            console.error("Error writing log file");
            res.end("Internal Server Error");
            return;
        }
        // Route handling using pathname
        switch (myUrl.pathname) {
            case "/":
                // Home route
                res.end("Home Page Loaded!");
                break;
            case "/about":
                // Read query param ?myname=
                const username = myUrl.query.myname || "Guest";
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                // Read search query
                const search = myUrl.query.search_query || "Nothing";
                res.end(`Here are your results for: ${search}`);
                break;
            default:
                // Unknown route
                res.end("404 Not Found!");
                break;
        }
    });
});

//  Start server listening
URLServer.listen(PORT, () => {
    console.log(` Server started on port ${PORT}`);
});
