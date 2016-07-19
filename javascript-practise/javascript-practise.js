//exercise 1

function returnPi(r){

	return Math.PI * (r * r)
}

console.log(returnPi(10))

//exercise 2

function lastChar(p1){

	return p1[p1.length-1];
}

console.log(lastChar("ThisIsARandomString"))

//exercise 3

function starPrinter(p1){

	return Array(p1.length + 1).join("*")

}

console.log(starPrinter("thisIsAnotherRandomString"))


// exercise 4

function starBlockPrinter(p1) {

for(var i = 0; i < p1.length; i++) {

	console.log(Array(p1.length + 1).join("*"))

	}

}

starBlockPrinter("randomWord")

// exercise 5

function findAverage(p1) {

	var total = p1[0]

	for(var i = 1; i < p1.length; i++){

		total = total + p1[i]
	}

	return total / p1.length

}

var randomNumbers = [10,20,30]

console.log(findAverage(randomNumbers))

//exercise 6 

function commonInteger(p1, p2) {

	var longestArray = p1
	var commonIntegers = []

	if(p2.length > p1.length){

	 	longestArray = p2
	}

	for(i = 0; i < longestArray.length; i++){

		for(j = 0; j < longestArray.length; j++){

			if(p1[i] === p2[j]){

				commonIntegers.push(p1[i]);
			}
		}	

	}

	var highestNumber = commonIntegers[0]

	for(i = 0; i < commonIntegers.length; i++){

		if(commonIntegers[i] > highestNumber){

			highestNumber = commonIntegers[i]
		}
	}

	if(commonIntegers.length === 0){

		return "No common integers"
	}

	else{

		return highestNumber
	}

}

var firstArray = [1000,30,3,4,5,6,10,100,40,17,50]
var secondArray = [6,17,8,50,9,0,40,50,30, 1000]

console.log(commonInteger(firstArray,secondArray))