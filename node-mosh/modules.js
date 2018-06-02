const path = require('path');
const os = require('os');

const pathObj = path.parse(__filename)

console.log(path.join(pathObj.dir, pathObj.base));

// using os module

var totalMemory = os.totalmem;
var freeMemory = os.freemem;

console.log('Total memory: ' + totalMemory);
console.log(`Free memory: ${freeMemory}`);      // using javascript string literals
