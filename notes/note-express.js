var http = require("http");

var requestHandler = function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
}
var server = http.createServer(requestHandler);
server.listen(3000);

//============================================

var express = require("express");
var http = require("http");
var requestHandler() = express();
// express return a request a function of type requestHandler
// that you can past into http.createServer


requestHandler.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, World!");
});

var server = http.createServer(requestHandler)
server.listen(3000);
