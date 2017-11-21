//use library to tal http to client
var http=require('http');
//create server with http
var server=http.createServer(function (request,response) {
    response.writeHead(200,{'Constent-Type': 'text/plain'});//write head to specify the content type we're going to send
    response.end('Wake up!');
});

// boot server

server.listen('1876','127.0.0.1');
console.log('server running now at 127.0.0.1:1876'); //show message at console