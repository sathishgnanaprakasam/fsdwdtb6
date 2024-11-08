// Creating a simple web server using Nodejs
// We need the http module to create a server
// import http module
const http = require('http');

// create a server object
const server = http.createServer((request, response) => {
    console.log('Request received');
    // set the response header
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // set the response body
    // response.write('Hello World');
    // end the response

    response.end('Hello World');
});

// listen to a port
server.listen(3001, () => {
    console.log('Server is running on port 3001');
});