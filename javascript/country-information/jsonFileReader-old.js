// var fs = require('fs');

// module.exports = {

//   JSONparser: function(filename){

//   	var contents = fs.readFileSync(filename);

// 		return JSON.parse(contents);
//   },

//   JSONparserA: fs.readFile('countries.json', function(data){

//   	var contents = data;

//   	return JSON.parse(contents);
//   })

// };

//-----------------------------------------------------------------

// var fs = require('fs');

// function JSONparser(filename){

//   	var contents = fs.readFileSync(filename);

// 		return JSON.parse(contents);
// }


// a function that takes in a filename and a callback function as parameters. 
//Once the file is read and parsed, it must pass the parsed file contents to the callback function. 
//Name this module "json-file-reader".


var fs = require('fs');

var contents = []

function processFile() {

	return contents;
	}

function JSONparserA(filename){

	fs.readFile(filename, function read(err, data) {

	    if (err) {
	        throw err;
	    }

	    contents = JSON.parse(data);

	    console.log(contents)

    	processFile(); 
		});

}

// JSONparserA('countries.json')

module.exports = {

	// JSONparser: JSONparser
	JSONparserA: JSONparserA

};





// fs.readFile(filename, function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;
//     contents = JSON.parse(content)

//     processFile(); 
// });

// function processFile() {

// 	return contents;
// }

