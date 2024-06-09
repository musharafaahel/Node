const fs = require("fs");

// fs.writeFile("message.txt", "Hello from node.js", (err) => {
//     if(err) throw err;
//     console.log("File has be saved.");
// });



fs.readFile("message.txt",'utf-8', (err,data) => {
    if(err) throw err;
    console.log("File Read");
    console.log(data);
});

// console.log(content)