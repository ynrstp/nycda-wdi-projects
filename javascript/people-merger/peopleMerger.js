//var fs = require('fs');

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

//peopleMerger('people.json','people2.json') // Calling the peopleMerger function



var fs = require('fs');

function peopleMerger1(fileOne, fileTwo){

	fs.readFile(fileOne, function(err, data){ //Read first file

    resultOne = JSON.parse(data)

    peopleMerger2(fileTwo)

	});

}

function peopleMerger2(fileTwo){

	fs.readFile(fileTwo, function(err, data){ //Read second file

	    resultTwo = JSON.parse(data)

	    var combined = resultOne.concat(resultTwo); //Combine the two arrays
	    var sorted = combined.sort() // Sort the combined array

	    console.log(sorted) // Log the sorted array

	    writeFile(sorted)

	});

}

function writeFile(p1){


		fs.writeFile('peopleComplete.txt', p1); // Create file and write sorted array to it


}

peopleMerger1('people.json','people2.json') // Calling the peopleMerger function





















