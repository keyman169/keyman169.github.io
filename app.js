var http = require('http');
var url = require("url");
var path = require("path");
var fs = require("fs");


var server = http.createServer(function (req, res) {
  var uri = url.parse(req.url).pathname;
  var filename = path.join(process.cwd(),'public', uri);
  var contentTypesByExtension = {
    '.html': "text/html",
    '.htm': "text/html",
    '.css':  "text/css",
    '.js':   "text/javascript"
  };

  //path.exists(filename, function(exists) {
  fs.exists(filename, function(exists) {
    if(!exists) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
      return;
    }
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(err + "\n");
      res.end();
      return;
      }

      var headers = {};
      var contentType = contentTypesByExtension[path.extname(filename)];
      if (contentType) headers["Content-Type"] = contentType;
      res.writeHead(200, headers);
      res.write(file, "binary");
      res.end();
    });
  });
});

server.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');