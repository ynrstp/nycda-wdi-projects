//part 1
function findSum(p1, p2){

	return p1 + p2;
}

//part 2
function findProduct(p1, p2){

	return p1 * p2;
}

//part 3
function threeOperation(x, operation) {

	return operation(x,3);
}

console.log(threeOperation(4, findSum))
console.log(threeOperation(5, findSum))
console.log(threeOperation(4, findProduct))
console.log(threeOperation(5, findProduct))