function Emaillist(name){

	this.name = name
	this.list = []

}

Emaillist.prototype.addEmail = function(email) {

 	this.list.push(email)

}

Emaillist.prototype.sendEmailToAll = function(text) {

 	console.log("Email content: " + text)
 	console.log("Sending email to: " + this.list)

}

var test = new Emaillist("TestList")
var testEmail = test.addEmail("yoni.stap@gmail.com")
var testEmail2 = test.addEmail("yoni_stap@hotmail.com")
var testMessage = test.sendEmailToAll("This is a sample message")