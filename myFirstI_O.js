var fs = require('fs');

var fileName = process.argv[2];
var file = fs.readFileSync(fileName).toString();

var numLines = file.split('\n').length - 1;

console.log(numLines);


