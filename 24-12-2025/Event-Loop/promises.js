// Creating a new Promise object
// Promise constructor takes a function with two parameters:
// resolve → call when task is successful
// reject  → call when task fails
const promises = new Promise((resolve, reject) => {
    // A boolean variable to decide success or failure
    const success = true;
    // If condition checks whether task is successful
    if (success) {
        // resolve() is called, when promise is successful
        // This value will be received inside .then()
        resolve("resolved successfully");
    } else {
        // reject() is called, when promise fails
        // This value will be received inside .catch()
        reject("rejected");
    }
});
// .then() runs when promise is resolved successfully
promises.then((result) => {
    // result contains the value passed inside resolve()
    console.log(result);
})
    // .catch() runs when promise is rejected
    .catch((error) => {
        // error contains the value passed inside reject()
        console.log(error);
    });

// This line runs immediately
// JavaScript does NOT wait for promise to finish
console.log("This is after the promise creation");

// PROMISE WITH setTimeout (ASYNC)
// Function that returns a Promise
function fetchData() {
    // Creating a new Promise
    return new Promise((resolve, reject) => {
        // setTimeout simulates async work
        setTimeout(() => {
            // After 3 seconds, promise is resolved
            resolve("Data received from server!");
        }, 3000);
    });
}

// Calling the function which returns a Promise
fetchData()
    // .then() executes when resolve() is called
    .then((data) => {
        // data contains the resolved value
        console.log(data);
    })
    // .catch() executes if promise is rejected
    .catch((err) => {
        console.log(err);
    });


// PROMISE REJECTION
// Function for login validation
function loginUser(password) {
    // Returning a Promise
    return new Promise((resolve, reject) => {
        // Checking password
        if (password === "1234") {
            // If password is correct → success
            resolve("Login successful");
        } else {
            // If password is wrong → failure
            reject("Invalid password");
        }
    });
}
// Calling loginUser with wrong password
loginUser("1111")
    // Runs only if resolve() is called
    .then((msg) => {
        console.log(msg);
    })
    // Runs only if reject() is called
    .catch((err) => {
        console.log(err);
    });

// PROMISE WITH FILE SYSTEM
// Importing built-in File System module
const fs = require("fs");
const { resolve } = require("path");

// Function to read a file using Promise
function readFilePromise(fileName) {
    // Returning a Promise
    return new Promise((resolve, reject) => {
        // Reading file asynchronously
        fs.readFile(fileName, "utf8", (err, data) => {
            // If error occurs 
            if (err) {
                // Reject the promise with error message
                reject("File not found");
            } else {
                // If file read successfully
                // Resolve promise with file content
                resolve(data);
            }
        });
    });
}

// Calling the function with a file name
readFilePromise("test.txt")
    // If file read is successful
    .then((content) => {
        console.log(content);
    })
    // If file read fails
    .catch((error) => {
        console.log(error);
    });
