var fs = require('fs');
var http = require('http');

var port = 5001;

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' }); // Sends first packet
    fs.createReadStream("file.html").pipe(res); // Sends second packet
}).listen(port);