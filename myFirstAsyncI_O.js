var fs = require('fs');
var filename = process.argv[2];

var contents = "";
var newLines = 0;

function counter(callback) {
  fs.readFile(filename, function (err, data) {
    contents = data.toString(); 
    newLines = contents.split("\n").length - 1;
    callback(newLines);
  });
}

function logNumLines(num) {
	console.log(num);
}

counter(logNumLines);