const path = require('path');

// use double forward slash instead one

let ext = path.extname('C:\\Users\\91987\\Desktop\\NodeJs Scalar\\Node Moudles\\f1.txt');

let name = path.basename('C:\\Users\\91987\\Desktop\\NodeJs Scalar\\Node Moudles\\f1.txt')
console.log(ext);
console.log(name);

console.log(__filename);
console.log(__dirname);