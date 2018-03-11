let fs = require('fs')

fs.readdir('/Users/ankitsejwal', (err, data) => {
    console.log(data)
})