const fs = require("fs");
// creating a folder 
//fs.mkdir("THAPA",(err)=>{
// console.log(" folder is created")
//});
// creat a file name bio.txt; inside thapa
//fs.writeFile('./THAPA/bio.txt',"my name is rishabh",(err)=>{
  //  console.log("file created")
//})
// append data
//fs.appendFile("./THAPA/bio.txt",  "my name is farishta" ,(err)=>{
// console.log("filess data appended")
//});
//read the data
//fs.readFile("./THAPA/bio.txt","UTF-8",(err,data)=>{
//console.log(data)
//});
// rename a file 
//fs.rename("./THAPA/bio.txt","./THAPA/myBIO.txt",(err)=>{
  //  console.log('RENAME IS DONE')
//})
// delet  file myBIo.txt
fs.unlink("./THAPA/myBIO.txt",(err)=>{
    console.log("file deleted")
})
// deleting folder THAPA
fs.rmdir("./THAPA",(err)=>{
    console.log("folder deleted")
})