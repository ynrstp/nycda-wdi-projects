//First try

/*
var numbers = []

for(i = 0; i < 101; i++){

	numbers.push(i)
}


for(var k = 0; k < 101; k++) {

	if(numbers[k] % 3 === 0 && numbers[k] % 5 === 0) {
		numbers[k] = "fizzbuzz"
	}
}

for(var i = 0; i < 101; i++) {

	if(numbers[i] % 5 === 0) {
		numbers[i] = "buzz"
	}
}

for(var j = 0; j < 101; j++) {

	if(numbers[j] % 3 === 0) {
		numbers[j] = "fizz"
	}
}
console.log(numbers)
*/

//Second try
/*
var numbers = []

for(var i = 0; i < 101; i++){

	numbers.push(i);

	if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
		numbers[i] = "fizzbuzz"
	}

	if(numbers[i] % 5 === 0) {
		numbers[i] = "buzz"
	}

	if(numbers[i] % 3 === 0) {
		numbers[i] = "fizz"
	}
}

console.log(numbers)
*/

//Final version

var numbers = []

for(var i = 0; i < 101; i++){

	numbers.push(i);

	if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
		numbers[i] = "FizzBuzz"
	}

	if(numbers[i] % 5 === 0) {
		numbers[i] = "Buzz"
	}

	if(numbers[i] % 3 === 0) {
		numbers[i] = "Fizz"
	}
}

numbers.shift()

console.log(numbers) 
