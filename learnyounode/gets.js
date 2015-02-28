var http = require('http');
var bl = require('bl');

if (process.argv.length < 3) {
    console.error('1 parameter must be provided');
    process.exit(1);
}

var urls = process.argv.slice(2);
var responses = [];


function printResponses() {

    responses.forEach(function(response) {
        console.log(response);
    });
}

var rxCount = 0;
urls.forEach(function(url, i) {
    http.get(url, function(idx, response) {
        response.pipe(bl(function(err, data) {
            rxCount++;
            if (err) {
                responses[idx] = '';
            } else {
                responses[idx] = data.toString();
            }
            if (rxCount >= urls.length) {
                printResponses();
            }
        }));
    }.bind(this, i));
});