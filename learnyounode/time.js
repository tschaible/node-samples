var net = require('net');
var strftime = require('strftime');

if (process.argv.length < 3) {
    console.error('You must provide a single port number as an argument');
    process.exit(1);
}

var server = net.createServer(function(socket) {
	socket.end(strftime('%Y-%m-%d %H:%M',new Date()));
});

server.listen(process.argv[2]);

