// Define a function named 'globalObject' 
function globalObject() {
    // Log a descriptive message indicating the purpose of this function
    console.log("This is a function to demonstrate global object.");

    // Log the global object, which contains all global variables and functions in Node.js
    console.log(global);

    // Log the process object, which provides information about the current Node.js process
    console.log(process);

    // Access and log the version property of the process object to display the Node.js version
    console.log(process.version);

    // Log the argv property of the process object
    console.log(process.argv);

    // Comment: Code for exiting the program using the process global (currently commented out)
    // if (true) {
    //   console.log("Exiting program...");
    //   process.exit();
    // }

    // Comment: Note about process.exit() behavior
    // Note: The code after process.exit() will not be executed
    // Log a message that would not execute if process.exit() were called (but it's commented out)
    console.log("This line will not be executed.");
    // Assign a custom property 'myName' to the global object with the value "Jyotiraj"
    // Log the custom global variable to verify it was set correctly
    console.log(global.myName);
    // Comment: Checking if require is a global function
    // Check if require is global or not
    // Is require() a global object?
    // Log the type of the require function to check if it's a global object (it's actually a global function in Node.js)
    console.log(typeof require);

    // Comment: Scheduling to print the file name after 1 second
    // Print file name after 1 second.
    // Use setTimeout to delay logging the current file's path (__filename) by 1000 milliseconds (1 second)
    setTimeout(() => {
        // Inside the callback, log the __filename global variable, which holds the absolute path of the current module file
        console.log(__filename);
    }, 1000);
    // Comment: Scheduling to print the directory name after 2 seconds
    // Print directory name after 2 seconds.
    // Use setTimeout to delay logging the current directory's path (__dirname) by 2000 milliseconds (2 seconds)
    setTimeout(() => {
        // Inside the callback, log the __dirname global variable, which holds the absolute path of the directory containing the current module
        console.log(__dirname);
    }, 2000);
}
// Export the globalObject function so it can be required and used in other modules
module.exports = globalObject;
