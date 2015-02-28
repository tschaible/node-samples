var mymodule = require('./mymodule.js');


if (process.argv.length < 4) {
    console.error('At least 2 parameters required');
    process.exit(1);
}

var directory = process.argv[2];
var extension = process.argv[3];

mymodule(directory, extension, function(err, files) {
    if (err) {
        console.log('Error getting filtered files');
        process.exit(2);
    }
    for (var i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});