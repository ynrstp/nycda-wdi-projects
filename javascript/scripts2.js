/*
function waterBottle(x){

	if(x < 10){

		console.log("test")
	}

	else {

		console.log("Try a different number")
	}
}

waterBottle(20)
*/


/*
function addingUp(p1, p2, p3) {

	var total = p1 + p2 + p3;
	console.log(total)
}

addingUp(10,40,30)
*/


/*function greeting(p1) {

	var text = "Hi " + p1;
	console.log(text)
}

greeting("Yoni")*/


/*function squareCalc(p1) {

	var square = p1 * p1;
	console.log(square)
}

squareCalc(10)*/

/*function smallerNumber(p1, p2) {

	if(p1 < p2){

		console.log(p1)
	}

	if(p2 < p1){

		console.log(p2)
	}
}

smallerNumber(30,500)*/


/*function closestZero(p1, p2) {

	var firstNumber = (p1 * p1) / p1
	var secondNumber = (p2 * p2) / p2

	if(firstNumber < secondNumber){

		console.log(firstNumber)
	}

	if(secondNumber < firstNumber){

		console.log(secondNumber)
	}

}

closestZero(-30, 70)*/


/*var numbers = [10, 30, 50, 40, 70]

function highestNumber(p1){

	var high = p1[0];

	for(var i = 0; i < p1.length; i++) {

		if(high < p1[i]){

		high = p1[i];
		}
	}

	return(high)
}

console.log(highestNumber(numbers))
*/

/*
// put your answer here:

function name (name) {
    var greetings= "hi " + name;
    console.log(greetings);
}

name ("koen");


// --------------------


function math(b) {
    return b*b;
}
console.log (math(4));

// --------------------

function aFunction(a){
    console.log(a * a)
}

aFunction(5)

// --------------------

console.log("Exercise3");

var x = 20
var y = 10

function exercise3(x, y){
    if(x < y) {
        return x;
    }
    else if(y < x){
        return y;
    }
    else {
        return (x + "+" + y);
    }
}

console.log(exercise3(x,y));
console.log(exercise3(4,4));

// --------------------

console.log("math2");
function math2 (c,d) {
    if (c < d) {
        return c;
    }
    else return d;
}
console.log (math2(44,77));
console.log (math2(-1000, 10));

// --------------------
console.log("close2zero");


function close2zero(a,b){
    if(Math.abs(a) < Math.abs(b)){
        return a;
    } else {
        return b;
    }
}
console.log(close2zero(-1000,100));
console.log(close2zero(100,100));

// --------------------


function functie3(x,y) {
    if((x * x) > (y * y)) {
        return(y)
    } else if((y * y) > (x * x)) {
        return(x)
    }
}

console.log(functie3(-11,10))
console.log(functie3(10,-12))
console.log(functie3(12,30))
console.log(functie3(-12,-30))

// --------------------
console.log("*****************");


function ex5 (x,y) {
    if (x < 0) {
        x=(-(x));
    }
    
    if (y < 0) {
        y=(-(y));
    }
    
    if (x>y) {
        return (y);
    } else {
        return (x);
    }
}

console.log(ex5 (-5, 3))


console.log("*****************");
console.log("maxvalue");


// ------------------------
var score = [130, 270, 140];

function maxValue(x){
    var value = x[0];
    for(var i = 0; i < x.length; i++){
        if(value < x[i]){
            value = x[i];
        }
    }
    return value;
}
console.log(maxValue(score));

console.log("max value test # 2:");
console.log(maxValue([0.2,0.3,2]));
*/
/*
var table = {

	location:"Amsterdam"
	size: "medium"

}

table.material = "Wood"

console.log(table.location)
console.log(table.material)
console.log(table.size)
*/

/*var artemis = {

	numberOfLegs: 2,
	symbol:"bow",
	occupation:"hunting"
}

console.log(artemis.symbol)
*/

var brands = ["apple", "samsung", "sony"]
var score = ["good", "better", "best"]

var rating = {}

function createObject(p1, p2){

	for(i = 0; i < p1.length; i++){

		rating[p1[i]] = p2[i]
	}

}	 

createObject(brands, score)

console.log(rating)