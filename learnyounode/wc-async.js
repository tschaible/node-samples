var fs = require('fs');

if (process.argv.length < 3) {
    console.error('At least 1 parameter required');
    process.exit(1);
}

function fileRead(err, buffer) {
	if ( err ) {
		console.error('Could not open file');
		return;
	}
    console.log(buffer.toString().split('\n').length - 1);
}


var buffer = fs.readFile(process.argv[2], fileRead);