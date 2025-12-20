//require() is a built-in function of Node.js used to import modules
// const module = require('./CommonJSModule') //--> ./ ka means current directory
// const server = require('http') //--> "http" ka means nodeJS directory ka bulid in package 

const files = require('fs'); //fs stand for file system

//Create a file 
//Sync...
files.writeFileSync("./text1.txt", "Hello, I am here!"); //File write complete hone tak wait karta hai

//async...
console.log("start");
//fs module ka writeFile() Function file create karke usme data likne ke liye use karte hai
files.writeFile("./text2.txt", "Hello Jyotiraj", (error) => { //call back function
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("File written successfully!");
    }
}); //File write background me hota hai, Node.js wait nahi karta
console.log("end");

// append file
// sync 
files.appendFileSync("./text1.txt", new Date().toLocaleString());
//async
files.appendFile("./text2.txt", `Hey There\n`, (err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Data append Successfully!");
    }
});
files.appendFileSync("./text2.txt", `{Date now()}Hello World\n`);

//copy file
files.copyFileSync("./personalDetls.txt", "copy.txt");

//delete file
files.unlinkSync("./copy.txt");

//status check
console.log(files.statSync("./personalDetls.txt"));
//create Folder(make a derectory)
files.mkdirSync("myDocument");

// //Read file
// //Blocking request (synchronous)
console.log("<--Blocking request-->")
console.log("Start");
const result = files.readFileSync("personalDetls.txt", "utf-8");// UTF-8 is a character encoding that converts binary data
console.log(result);
console.log("end")

//Non-Blocking request (asynchronous)
console.log("<--Non-Blocking request-->")
console.log("Start");
files.readFile("./personalDetls.txt", "utf-8", (err, res) => {
    console.log(res);
});
console.log("end");