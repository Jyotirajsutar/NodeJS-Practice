// This file demonstrates the use of Node.js OS module to retrieve system information

// Import the built-in 'os' module to access operating system-related.
const os = require("os");

// Log the number of CPU cores available on the system to the console
console.log(os.cpus().length); //12