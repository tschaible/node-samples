var http = require('http');
var map = require('through2-map');


if (process.argv.length < 3) {
    console.error('You must provide a single port number as an argument');
    process.exit(1);
}


var server = http.createServer(function(req,resp) {
	if ( req.method == 'POST' ) {
		resp.writeHead(200, { 'content-type': 'text/plain' });
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(resp);	
	} else {
		resp.writeHead(400, { 'content-type': 'text/plain' });	
		resp.end('Unsupported');
	}	
});

server.listen(Number(process.argv[2]));