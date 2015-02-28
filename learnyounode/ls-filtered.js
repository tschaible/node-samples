var fs = require('fs');
var path = require('path');

if (process.argv.length < 4) {
    console.error('At least 2 parameters required');
    process.exit(1);
}

var extension = process.argv[3];

fs.readdir(process.argv[2], dirRead);