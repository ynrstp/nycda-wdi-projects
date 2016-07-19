var fs = require('fs');

var jsonFiles = []

function getFiles(path, p1){

	fs.readdir(path, function(err, data){


		var fileList = data

		for(i = 0; i < fileList.length; i++){

		if(fileList[i].substr(fileList[i].length - 4) == 'json'){

			jsonFiles.push(fileList[i])
			}

		}

		console.log(jsonFiles);


		readFiles()
	})
}	

function readFiles(){

	for(var i = 0; i < jsonFiles.length; i++){

		var contents = fs.readFileSync(jsonFiles[i])

	    	console.log(contents)

	}
}

getFiles('./files')


// function peopleMerger(fileOne, fileTwo){

// 	fs.readFile(fileOne, function(err, data){ //Read first file

//     resultOne = JSON.parse(data)

// 	});

// 	fs.readFile(fileTwo, function(err, data){ //Read second file

// 	    resultTwo = JSON.parse(data)

// 	    var combined = resultOne.concat(resultTwo); //Combine the two arrays
// 	    var sorted = combined.sort() // Sort the combined array

// 	    console.log(sorted) // Log the sorted array

// 	    fs.writeFile('peopleComplete.txt', sorted); // Create file and write sorted array to it

// 	});

// }

// peopleMerger('people.json','people2.json') // Calling the peopleMerger function