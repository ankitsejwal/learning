const fs = require('fs');

// synchronous method
// const files = fs.readdirSync('./');
// console.log(files);

// asynchronous method
fs.readdir('./', function(err, result){
    if (err) console.log('Error', err)
    else console.log('Result', result)
});