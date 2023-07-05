const fs = require('fs');


// // reading a file

// let file_content = fs.readFileSync('f1.txt');

// console.log("Data from file " + file_content );

// // writing in a file

// fs.writeFileSync('f2.txt' , 'Hello I am modified f2');

// // update in a file

// // fs.appendFileSync('f3.txt ' , ' What can i do for you')

// // delete a file

// // fs.unlinkSync('f3.txt')

// fs.writeFileSync('f4.txt' , 'This is f4')

// Directories

// create a directory

// fs.mkdirSync("myDir");

// check the content inside the directory

let folderpath = 'C:\\Users\\91987\\Desktop\\NodeJs Scalar\\Node Moudles\\myDir'

let fol_cont = fs.readdirSync(folderpath)

console.log("Folder Content", fol_cont);

// check directory exists or not

let does_exist =fs.existsSync("f4.txt")
console.log(does_exist);

// remove dir

fs.rmdirSync('myDir');
