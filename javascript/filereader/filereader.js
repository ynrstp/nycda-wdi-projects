//Create an application that reads itself as a file and prints itself out to the console.

// var fs = require('fs');

// fs.readFile('lines.txt', function(err, file) {

// 	var content = file.toString();

// 	console.log(content)

// });

//Create an application that reads a file and creates a duplicate of that file.

var fs = require('fs');

fs.readFile('day-7/lines.txt', function(err, file) {

	var content = file;

	fs.writeFile('lines.txt', content);

});