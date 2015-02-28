var http = require('http');

if ( process.argv.length < 3 ) {
	console.error('1 parameter must be provided');
	process.exit(1);
}

http.get(process.argv[2],function(response) {
	response.setEncoding('utf8');
	response.on('data',function(data){
		console.log(data);
	});
	response.on('error',function(data){
		console.log(data);
	});
	response.on('end',function(data){
	});
})

