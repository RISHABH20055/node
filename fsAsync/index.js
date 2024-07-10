const fs = require("fs");
// creat  a new file 
fs.writeFile('read.txt',"today is awesome day", // callback function below
    (err) =>{
 console.log("file is created");
    }
);
//adding data to it
fs.appendFile("read.txt","helli myself rishabh",
    (err)=>{
  console.log("task completed")
    })

    // reading data
    fs.readFile("read.txt", "UTF-8",(err,data)=>{
  console.log(data);
    })