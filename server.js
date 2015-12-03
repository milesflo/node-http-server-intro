var http = require('http');
var fs   = require('fs');

var server = null;

function handleRequest(req, resp) {

};

server = http.createServer(handleRequest);

server.listen(1337, function() {
	console.log("I'm listening on port 8000...")
});
