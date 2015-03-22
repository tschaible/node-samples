var http = require('http');
var url = require('url');
var trace = require('jstrace');

var server = http.createServer(function(req, resp) {
  var urlParts = url.parse(req.url, true);
  var statusCode, body;

  trace('request:start', {
    url: req.url
  });
  if (req.method == 'GET' && urlParts.pathname == '/prognosis') {
    statusCode = 200;
    body = JSON.stringify({
      'ok': true
    });
  } else {
    statusCode = 404;
    body = JSON.stringify({
      'error': 'notfound'
    });
  }
  resp.writeHead(statusCode, {
    'content-type': 'application/json'
  });
  resp.end(body);
  trace('request:end', {
    'statusCode': statusCode,
    'body': body
  });
});

server.listen(9999, function() {
  console.log('pid: ' + process.pid);
  console.error('up');
});
