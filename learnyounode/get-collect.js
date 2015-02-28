var http = require('http');
var bl = require('bl');

if ( process.argv.length < 3 ) {
	console.error('1 parameter must be provided');
	process.exit(1);
}

http.get(process.argv[2],function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data){
		console.log(data.toString().length);
		console.log(data.toString());
	}));
	
})

