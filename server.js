var http   = require('http');
var routes = require('./routes.js');

function handleRequest(req, res) {
  if (routes[req.url]){
    routes[req.url](req,res);
  }  else {
    res.statusCode = (404);
    res.end("This doesn't exist, buddy");
  }
};

var server = http.createServer(handleRequest);
var PORT = 8000;
server.listen(PORT, function() {
	console.log("I'm listening on port: [" + PORT + "]");
});
