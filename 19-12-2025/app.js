// Require and import the math module from the local file './math.js'
const mathModule = require("./Math");

// Call the add and subtract functions from the mathModule
// Log the result of adding 5 and 8 to the console using the add function from mathModule
console.log("Math value is:", mathModule.add(5, 8));

// Log the result of subtracting 8 from 5 to the console using the sub function from mathModule
console.log("Math value is:", mathModule.sub(5, 8));