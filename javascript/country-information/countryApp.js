// Synchronous version

//part 1 - Getting country name from commandline

var country = process.argv[2]

var fileReader = require('./jsonFileReader.js');


//part 2 - Parse JSON file, and Look for match between commandline country and the countries in the JSON file

fileReader.JSONparserA('countries.json', function (contents){
	
 var countryInfo = contents;

	function countryMatch () {

		for (var i = 0; i < countryInfo.length; i++) {

	 		 if(countryInfo[i].name == country){

	 		 	return "country: " + countryInfo[i].name + "\n" + "Top level domain: " + countryInfo[i].topLevelDomain
	 		}

	    }
	}

	console.log(countryMatch())
})