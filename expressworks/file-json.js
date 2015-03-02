var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

var file = process.argv[3]||path.join(__dirname, 'public/books.json');


app.get('/books',function(req,res){
	fs.readFile(file,'utf8',function(err,data){
		if ( !err ) {
			res.send(JSON.parse(data));
		}
		res.end();
	});
});


app.listen(process.argv[2]);
