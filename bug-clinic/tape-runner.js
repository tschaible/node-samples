var resolve = require("path").resolve;
var tape = require('tape');

var scenario = require(resolve(process.cwd(), process.argv[2]));
tape("test scenario", function(t) {
  scenario(t);
  t.end();
});
