 const fs = require('fs');
// fs.mkdirSync('THAPA');
// creation of a file 
 //fs.writeFileSync('THAPA/bio.txt',"my name is rishabh ");
 // adding some data without over wwritting
 fs.appendFileSync('THAPA/bio.txt',"im a boy")
 //read the data without getting the buffer data at first ... now have to do file encoding 
const data= fs.readFileSync('THAPA/bio.txt',"utf8");
 console.log(data);
 //rename the file 
 fs.renameSync('THAPA/bio.txt','THAPA/myBio.txt') 
 // delet everything
 fs.unlinkSync('THAPA/myBio.txt'); // remove the file myBio.txt
 //deleting folder THAPA
 fs.rmdirSync('THAPA')