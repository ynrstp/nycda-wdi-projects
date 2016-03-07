
//more objects exercise

// function User(x, password, email) {

// 	this.username = username
// 	this.password = password
// 	this.email = email
// }

// var user1 = new User("Yoni","Stap", "yoni.stap@gmail.com")
// var user2 = new User("Sara","Koops", "sara.koops@gmail.com")

// console.log(user1)
// console.log(user2)

function Rectangle (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
 
Rectangle.prototype.computearea = function() {

 	return (this.width- this.x) * (this.height - this.y)

}

Rectangle.prototype.containspoint = function(a,b) {

	if( a > this.x && a < (this.x + this.width) && b > this.y && b < (this.y + this.height)){

		return true
}
	else{

		return false
	}

}

var aSample = new Rectangle(0,0,4,4);

var doesIt = aSample.computearea()

var pointTrack = aSample.containspoint(10,10)

console.log(doesIt)
console.log(pointTrack)
