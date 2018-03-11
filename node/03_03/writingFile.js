let fs = require('fs')

data = {
    'name': 'ankit'
}

fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    console.log('File successfully written ', err)
})