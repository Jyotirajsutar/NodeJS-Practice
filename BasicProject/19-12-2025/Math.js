// Define a function named 'add' that takes two parameters 'a' and 'b'
function add(a, b) {
    // Return the sum of 'a' and 'b'
    return a + b;
}
// Define a function named 'sub' that takes two parameters 'a' and 'b'
function sub(a, b) {
    // Return the difference of 'a' and 'b'
    return a - b;
}

// module.exports is used in Node.js to make functions available to other modules
// Export the 'add' and 'sub' functions as an object so they can be imported in other files
module.exports = { add, sub };