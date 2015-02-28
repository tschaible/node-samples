var fs = require('fs');
var path = require('path');

module.exports = function(directory, ext, callback) {
    fs.readdir(directory, function(err, files) {
        if (err) {
            return callback(err);
        }
        var result = [];
        for (var i = 0; i < files.length; i++) {
            if (path.extname(files[i]) == ('.' + ext)) {
                result.push(files[i]);
            }
        }
        callback(null,result);
    });    


};