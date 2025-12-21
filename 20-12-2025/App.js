// Import the FileHandlingModule to access its exported functions
const fileHandler = require("./FileHandlingModule");

// Call the functions to demonstrate file operations
fileHandler.FileWriting();
fileHandler.FileAppending();
fileHandler.FileCopyAndDelete();
fileHandler.checkFileStatus();
fileHandler.createDirectory();
fileHandler.SyncReading();
fileHandler.AsyncReading();