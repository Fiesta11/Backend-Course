// child process is a node moudule used to create sub process within a script

const cp = require('child_process')

// cp.execSync('calc');

// cp.execSync('start Firefox https://algouniversity.com/dashboard/');

console.log('O/P: ' + cp.execSync('node demo.js'));