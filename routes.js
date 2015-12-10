var fs = require('fs');

var routes = {
  '/index': function(req, res) {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./index.html", function (err, data) {
      if (err) throw err;
    res.end(data);
  });
  },
  '/about': function(req, res) {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./about.html", function (err, data) {
      if (err) throw err;
    res.end(data);
  });
  }
}

module.exports = routes;