const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Welcome to the home page.');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);
console.log('listening at port 3000 ...')