var car = {place:"Amsterdam", country:"NL", color:"orange"};

function objectReturner(p1){

	var keys = []
	var values = []

	for (var key in p1) {

 		keys.push(key)
 	
	}

	for (var value in p1) {
 	 values.push(p1[value])
 	
	}

	var secondObject = {}

	secondObject.keys = keys
	secondObject.values = values

	console.log(secondObject)

}

objectReturner(car)