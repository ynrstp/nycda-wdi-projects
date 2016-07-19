function sum(p1, p2, p3){

	return p1 + p2 + p3
}

console.log(sum(3, 6, 7))


function cube(p1){

	return p1 * p1 * p1
}

console.log(cube(3))

function last(p1){

	return p1.substr(p1.length - 1);
}

console.log(last("Yoni"))


function reverse(p1){

	var splitted = p1.split("")
	var string = ''

	for(i = splitted.length -1; i > -1; i--){

		string = string + splitted[i]
	}

	return string
}

console.log(reverse("Yoni"))


function createObject(p1, p2){

	for(i = 0; i < p1.length; i++){

		rating[p1[i]] = p2[i]
	}

}

var brands = ["apple", "samsung", "sony"]
var score = ["good", "better", "best"]

var rating = {}

createObject(brands, score)

console.log(rating)


function power(x, n){

	var answer = x

	for(i = 0; i < n -1; i++){

		answer = answer * x
	}

	return answer
}


console.log(power(3,10))

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.

var car = {place:"Amsterdam", country:"NL", color:"orange"};

function objectReturner(p1){

	var keys = []
	var values = []

	for (var key in p1) {

 		keys.push(key)
 	
	}

	console.log(keys)

	for (var value in p1) {
 	 values.push(p1[value])
 	
	}

	console.log(values)

	var secondObject = {}

	secondObject.keys = keys
	secondObject.values = values

	console.log(secondObject)

}

objectReturner(car)


//A FEW ATTEMPTS BELOW, NO WORKING FUNCTION YET

// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

// longest chain of falses = answer

//loop door array, if false, 
//loop door array, if volgende ook false, iets + 1, hoogste nummer = langste chain, midden van die chain is beste positie voor Jon

// var chairs = [true, true, false, true, false, false, false, true, false, false, true]
// //              0     0    1       0     1      2      1      0     1      1      0

// if chairs[i] === false & chairs[i-1] === false // --> 1
// if chairs[i] === false & chairs[+1] === false & chairs[i+1] === false // --> 2
// if chairs[i] === false & chairs[+2] === false & chairs[i+1] === false & chairs[-1] === false & chairs[i-2] === false// --> 3

// if(chairs[i] === false){

// 	counter = counter + 1
// }

// if(chairs[i]) === true){

// }

// var seats = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]

// function anxietyJon(p1) {

//     var currentChain = 0;    
//     var longestChain = 0;   
//     var bestSeat = 0;  
    
//     for(i = 0; i < p1.length; i++) {

//         if (p1[i] == false) {

//             currentChain++;
            
//         }

//         else {

            
//             if (currentChain > longestChain) {

//             	longestChain = currentChain;

//                 bestSeat = Math.round(i - ( longestChain / 2 ) - 1)
                
//                 currentChain = 0;
//             }
//         }
//     }
    
//     return bestSeat;
    
// }

// console.log(anxietyJon(seats))


var seats = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]

var seats3 = [1,0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1] 

//           0  1  2  3  4  5  6  7  8  9  10 11 12 13 14


function anxietyJon(p1) {

	console.log(" array length = " + p1.length)

    var currentChain = 0;    
    var longestChain = 0;   
    var bestSeat = 0;

    var firstPosition = undefined
    var lastPosition = undefined
    
    for(i = 0; i < p1.length; i++) {

        if (p1[i] == false) {

            currentChain++;
            
        }

        else {

        	console.log(" current chain length = " + currentChain)


            if(currentChain > longestChain) {

            	firstPosition = i - currentChain
            	lastPosition = i - 1
            	console.log(" Last position = " + lastPosition)

            	console.log(" firstPosition = " + firstPosition)

            	longestChain = currentChain;

                if(firstPosition == 0 & ){

                	bestSeat = 0

                }

                if(firstPosition !== 0){

 					bestSeat = Math.round(i - ( longestChain / 2 ) - 1)

                }	
                
                currentChain = 0;
            }
        }
    }
    
    return bestSeat;
    
}

console.log(anxietyJon(seats3))



// console.log("test")