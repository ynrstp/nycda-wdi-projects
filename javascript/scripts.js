/*
var namecount = 0

while(namecount < 6) {

	console.log("Yoni");
	namecount = namecount + 1;
}
*/

/*
for(namecount = 0; namecount < 6; namecount = namecount + 1) {

	console.log("Yoni");
}
*/


/*
namecount=0
while [ $namecount -le 5 ]
do
  echo "Yoni"
  namecount=$(( $namecount + 1 ))
done
*/

/*
var fruit = ["cherry", "pear", "strawberry", "pineapple"]

for(var i = 0; i < fruit.length; i++) {

	console.log("My favorite fruit is a " + fruit[i]);
}
*/

/*
var friends = ["seagull", "beagle", "bagel"]

for(var i = 0; i < friends.length; i++) {

	var pluralized = friends[i] + 's';
	friends[i] = pluralized;

}

console.log(friends)
*/

/*
var words = ["one", "tabletop", "hands", "tree"] 
var longest = "to"

for(var i = 0; i < words.length; i++) {

	if(longest.length < words[i].length) {
		longest = words[i];
	}
}

console.log(longest)
*/

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


var numbers = []

for(i = 0; i < 101; i++){

	numbers.push(i)

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










