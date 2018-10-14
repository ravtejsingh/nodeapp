var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Welcome to IoT WoRKS! This is the year 2018!');
};
var www = http.createServer(handleRequest);
www.listen(8080);