var http = require('http');
var url = require('url');


if (process.argv.length < 3) {
    console.error('You must provide a single port number as an argument');
    process.exit(1);
}

function parsetime(isoTime) {
    var date = new Date(isoTime);
    var parts = {};
    parts.hour = +date.getHours();
    parts.minute = +date.getMinutes();
    parts.second = +date.getSeconds();
    return parts;
}

function unixtime(isoTime) {
    var date = new Date(isoTime);
    var unixtime = {};
    unixtime.unixtime = +date.getTime();
    return unixtime;
}


var server = http.createServer(function(req, resp) {
    if (req.method == 'GET') {
        var urlParts = url.parse(req.url, true);

        if (urlParts.pathname == '/api/parsetime') {
            resp.writeHead(200, {
                'content-type': 'application/json'
            });
            resp.end(JSON.stringify(parsetime(urlParts.query.iso)));
        } else if (urlParts.pathname == '/api/unixtime') {
            resp.writeHead(200, {
                'content-type': 'application/json'
            });
            resp.end(JSON.stringify(unixtime(urlParts.query.iso)));
        } else {
            resp.writeHead(404, {
                'content-type': 'text/plain'
            });
            resp.end('Unknown path: ' + urlParts.pathname);
        }


    } else {
        resp.writeHead(400, {
            'content-type': 'text/plain'
        });
        resp.end('Unsupported method');
    }
});

server.listen(Number(process.argv[2]));