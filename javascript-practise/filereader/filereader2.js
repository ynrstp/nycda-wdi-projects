//Create an application that reads itself as a file and prints itself out to the console.

var fs = require('fs');

fs.readFile('filereader2.js', function(err, file) {

	var content = file.toString();

	console.log(content)
});

// var fs = require('fs');

// fs.readFile('lines.txt', function(err, file) {

// 	var content = file.toString();

// 	console.log(content)
// });