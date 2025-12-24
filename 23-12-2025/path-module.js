// Import the built‑in "path" module from Node.js 
// This module helps to work with folder paths and file paths on any OS
const path = require("path");

// absolute file path from my project
const samplePath = "D:/GithubProject/NodeJS-Practice/Basic-Project/23-12-2025/path-module.js";

// path.basename()
// Get only the file name 
console.log("basename:", path.basename(samplePath));

// Get the file name without the .js extension.
console.log(
    "basename without extension:",
    path.basename(samplePath, ".js")
);

// path.dirname()
// Get only the folder path
console.log("dirname:", path.dirname(samplePath));

// path.extname()
// Get only the file extension
console.log("extname:", path.extname(samplePath));

// path.join()
// Join many path parts into ONE clean path.
const joinedPath = path.join(
    "D:",
    "GithubProject",
    "NodeJS-Practice",
    "uploads",
    "image.png"
);
console.log("join:", joinedPath);

// path.resolve()
// Convert given segments to an absolute path
const resolvedPath = path.resolve("src", "app.js");
console.log("resolve:", resolvedPath);

// path.parse()
// Break the full path into separate parts as an object
const parsedPath = path.parse(samplePath);
console.log("parse:", parsedPath);

// path.format()
// Build a full path string again from an object
const formattedPath = path.format({
    dir: "D:/Data/Reports",
    name: "sales-2025",
    ext: ".pdf",
});
console.log("format:", formattedPath);

// path.isAbsolute()
// Check if a path is absolute 
console.log("isAbsolute(samplePath):", path.isAbsolute(samplePath));
console.log("isAbsolute('path-module.js'):", path.isAbsolute("path-module.js"));

// path.normalize()
// Clean the path string by fixing extra or wrong slashes
const messyPath = "D:/users//admin///docs/file.txt";
console.log("normalize:", path.normalize(messyPath));

// path.relative()
// Get the relative path from one folder to another target path.
const relativePath = path.relative(
    "D:/GithubProject/NodeJS-Practice/Basic-Project",
    "D:/GithubProject/NodeJS-Practice/Basic-Project/path-module.js"
);
console.log("relative:", relativePath);

// path.sep
// Show which path separator current OS uses (\ or /). 
console.log("path separator:", path.sep);

// path.delimiter
// Show separator used between many paths in PATH env variable
console.log("path delimiter:", path.delimiter);

// __dirname
// Absolute folder path
console.log("__dirname:", __dirname);

// __filename
// Absolute full path
console.log("__filename:", __filename);
