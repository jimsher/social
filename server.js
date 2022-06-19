const http = require('http');
const hostname = 'localhost';
const port = 5500;

const server = http.createServer((req,ras) => {

    res.statusCode = 200;
    ras.serHeader('content-Type', 'text-plain');
    ras.end('Hallo worid!');

})

server.listen(port, hostname, () => {

    console.log('server running at http://${hostname:${port}/')

})