const fs =require("fs")
// creating a new file
fs.writeFileSync("read.txt","welxome to my hell");
// over-write karta hai
fs.writeFileSync("read.txt","english,welxome to my hell")
// append without delet

fs.appendFileSync("read.txt","how are you I am Finr Thank you ");
// what is written in a file get it
//fs.readFileSync('read.txt')

const  buf_data=fs.readFileSync('read.txt');

// node.js include an additional data type called buffer
// buffer used to store binary data
//while reading from a file or receiving packets over networks

// <Buffer 65 6e 67 6c 69 73 68 2c 77 65 6c 78 6f 6d 65 20 74 6f 20 6d 79 20 68 65 6c 6c 68 6f 77 20 61 72 65 20 79 6f 75 20 49 20 61 6d 20 46 69 6e 72 20 54 68 ... 8 more bytes>

org_data = buf_data.toString()
console.log(org_data);


// to rename a file
fs.renameSync('read.txt','readWrite.txt')