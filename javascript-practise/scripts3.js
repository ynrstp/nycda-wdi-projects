// var anObject = {

// 	length: "10 meters",
// 	height: "20 meters"
// }

// anObject.width = "30 meters"

// anObject["property"] = "something"

// console.log(anObject)

// var example = anObject.length
// console.log(example)

// console.log(anObject.length)
// console.log(anObject["length"])


// var notAnArray = {

// 	length: "blablabla",
// 	"length": "test"
// }

// console.log(notAnArray.length)
// console.log(notAnArray["length"])
// console.log(notAnArray[length])

// Scope exercise 1

// var randomNumber = 20

// function addition() {

// 	var secondNumber = 30;

// 	return randomNumber + secondNumber
// }

// console.log(randomNumber)
// //console.log(secondNumber)
// console.log(addition())


//anonymous functions exercise 1

function findSum(p1, p2){

	return p1 + p2;
}

function findProduct(p1, p2){

	return p1 * p2;
}

function threeOperation(x, operation) {

	return operation(x,3)
}

console.log(threeOperation(4, findSum))
console.log(threeOperation(5, findSum))
console.log(threeOperation(4, findProduct))
console.log(threeOperation(5, findProduct))