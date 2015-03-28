var replify = require("replify");
var replpad = require("replpad");
var http = require("http");

module.exports = scenario;

function scenario(callback) {
  var createServer = require("http").createServer;

  var server = http.createServer(function(req, res) {
    res.end("hello");
  });
  var repl = replify({
    name: "bug-clinic",
    start: replpad
  }, {"__message":"REPLs are neat"},
     {"server":server});

  server.listen(8080, function() {
    console.log("listening");
  });

  callback(server, repl);
}
