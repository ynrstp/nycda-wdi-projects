var fs = require('fs');

// function JSONparser(filename){ //synchronous

//   	var contents = fs.readFileSync(filename);

// 		return JSON.parse(contents);
// }

function JSONparserA(filename, callback){     //Asynchronous

	fs.readFile(filename, function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    var contents = JSON.parse(data)

	    callback(contents);
	});
}


module.exports = {

	JSONparserA: JSONparserA
	//JSONparser: JSONparser

};