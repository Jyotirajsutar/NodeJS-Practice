// Import the Node.js file system module to handle file operations
const files = require('fs'); //fs stand for file system

// Function to demonstrate synchronous and asynchronous file writing
function FileWriting() {
    // Create a file synchronously
    // Write to a file synchronously, waiting for the operation to complete before proceeding
    files.writeFileSync("./text1.txt", "Hello, I am here!");

    // Create a file Asynchronous
    console.log("start");
    // Write to file asynchronously with a callback function to handle completion
    files.writeFile("./text2.txt", "Hello Jyotiraj", (error) => { //call back function
        // Check if an error occurred during the file write operation
        if (error) {
            // Log the error message to the console
            console.log("Error:", error);
        } else {
            // Log success message if no error
            console.log("File written successfully!");
        }
    });
    console.log("end");
}

// Function to demonstrate file appending
function FileAppending() {
    // Append the current date and time synchronously to text1.txt
    files.appendFileSync("./text1.txt", new Date().toLocaleString());

    // Append text asynchronously to text2.txt with a callback
    files.appendFile("./text2.txt", `Hey There\n`, (err, data) => {
        // Check for error in appending
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Data append Successfully!");
        }
    });
    // Append synchronously again to text2.txt with a string including date placeholder
    files.appendFileSync("./text2.txt", `{Date now()}Hello World\n`);
}

// Function to demonstrate file copying and deleting
function FileCopyAndDelete() {
    // Copy the file synchronously from personalDetls.txt to copy.txt
    files.copyFileSync("./personalDetls.txt", "copy.txt");

    // Delete the file synchronously
    files.unlinkSync("./copy.txt");
}

// Function to check file status
function checkFileStatus() {
    // Get and log the file stats synchronously for personalDetls.txt
    console.log(files.statSync("./personalDetls.txt"));
}

// Function to create directory
function createDirectory() {
    // Check if the directory already exists before creating it to avoid errors
    if (!files.existsSync("myDocument")) {
        // Create a new directory synchronously named myDocument
        files.mkdirSync("myDocument");
    }
}

// Function to demonstrate synchronous file reading
function SyncReading() {
    // Blocking request (synchronous)
    console.log("<--Blocking request-->")
    console.log("Start");
    // Read the file synchronously with UTF-8 encoding, blocking until complete
    const result = files.readFileSync("personalDetls.txt", "utf-8");// UTF-8 is a character encoding that converts binary data
    // Log the read result to the console
    console.log(result);
    console.log("end");
}

// Function to demonstrate asynchronous file reading
function AsyncReading() {
    //Non-Blocking request (asynchronous)
    console.log("<--Non-Blocking request-->")
    console.log("Start");
    // Read the file asynchronously with UTF-8 encoding and a callback
    files.readFile("./personalDetls.txt", "utf-8", (err, res) => {
        // Log the result in the callback
        console.log(res);
    });
    console.log("end");
}

// Export the functions to make them available for import
module.exports = {
    FileWriting,
    FileAppending,
    FileCopyAndDelete,
    checkFileStatus,
    createDirectory,
    SyncReading,
    AsyncReading
};