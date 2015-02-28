var http = require('http');
var fs = require('fs');


if (process.argv.length < 4) {
    console.error('You must provide a single port number and a file as an argument');
    process.exit(1);
}

var file = process.argv[3];

var server = http.createServer(function(req,resp) {
	resp.writeHead(200, { 'content-type': 'text/plain' })
	fs.createReadStream(file).pipe(resp);
});

server.listen(process.argv[2]);