// Import File System module
// This line runs FIRST
const fs = require("fs");

// Import Path module 
// This line runs SECOND
const path = require("path");

// Store file name you want to read
// This line runs THIRD
const fileName = "fsPromises.txt";

// Create absolute file path using __dirname
// __dirname = current folder path
// This line runs FOURTH
const filePath = path.join(__dirname, fileName);

// Start reading file asynchronously
// This does NOT block execution
// Node.js sends this task to background
fs.promises.readFile(filePath, "utf-8")
    // This runs ONLY when file reading is finished
    .then((data) => {
        console.log("File content:");
        console.log(data);
    })
    // This runs ONLY if readFile fails
    .catch((err) => {
        console.error("Error reading file:", err.message);
    });

// Store current directory path
// This line runs immediately after readFile call
const folderPath = __dirname;

// Start reading directory asynchronously
// This also goes to background
fs.promises.readdir(folderPath)
    // Runs when directory reading finishes
    .then((files) => {
        console.log("Files in directory:");
        console.log(files);
    })
    // Runs if readdir fails
    .catch((err) => {
        console.error("Error reading directory:", err.message);
    });
