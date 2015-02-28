var fs = require('fs');

if (process.argv.length < 3) {
    console.error('At least 1 parameter required');
    process.exit(1);
}

var buffer = fs.readFileSync(process.argv[2]);

console.log(buffer.toString().split('\n').length - 1);