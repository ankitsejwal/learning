const path = require('path');
const os = require('os');
const fs = require('fs');

const pathObj = path.parse(__filename)

console.log(path.join(pathObj.dir, pathObj.base));

// using os module

var totalMemory = os.totalmem;
var freeMemory = os.freemem;

console.log('Total memory: ' + totalMemory);
console.log(`Free memory: ${freeMemory}`);      // using javascript string literals

// using fs module

// synchronous method
var files = fs.readdirSync('./');
console.log(files);

// asynchronous method
var result = fs.readdir('./', function(err, files){
    if(err) console.log('Error', err)
    else console.log('Files: ', files)
})