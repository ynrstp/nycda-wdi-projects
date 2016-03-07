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

starBlockPrinter("random")