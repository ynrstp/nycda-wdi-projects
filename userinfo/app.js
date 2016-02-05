var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.set('views', './views');
app.set('view engine', 'jade');

//route 1: renders a page that displays all your users.
app.get('/users', function (req, res) {

	var file = require('./users.json');
	res.render('users', {stuff: file});

});

 //route 2: renders a page that displays a form which is your search bar.
app.get('/search', function (req, res) {

	delete require.cache[require.resolve('./users.json')]
	res.render('search');

});

//route 3: takes in the post request from your form, then displays matching
//users on a new page. Users should be matched based on whether either their 
//first or last name contains the input string.

app.post('/results', function(req, res){

	var userName = req.body.userName;

	fs.readFile('./users.json', function (err, data) {

		if (err) {
			throw err;
		}

		var text = JSON.parse(data)

		console.log(text)

		var result = []

		for(var i = 0; i < text.length; i++){

			if(text[i].firstname === userName || text[i].lastname === userName){

				result.push(text[i])
			}
		}

	var html = ''

	if(result.length == 1){

		html = result[0].firstname + "<br>" +  result[0].lastname + "<br>" + result[0].email + "<br>" + 
             '<a href="search/">Return to search</a>';

	}

	else{

		html = "Sorry, no results" + "<br>" + '<a href="/search">Try again</a>'

	}

  	res.send(html);

	});

});


//route 4: renders a page with three forms on it (first name, last name, and email) 
//that allows you to add new users to the users.json file.

app.get('/adduser', function (req, res) {

	res.render('adduser');

});

//route 5: takes in the post request from the 'create user' form, then adds the user to
//the users.json file. Once that is complete, redirects to the route that displays all
//your users (from part 0).

app.post('/add', function(req, res){

	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;

	var newuser = {       
			    firstname: firstName,
			    lastname: lastName,
			    email: email
			}

	console.log(newuser.firstname)

	console.log(firstName + lastName + email)

	function addUser(p1) {

	  	fs.readFile('./users.json', function (err, data) {

			if (err) {
				throw err;
			}

			var original = JSON.parse(data)

		  	original.push(p1);

		  	var reformat = JSON.stringify(original);

		  	fs.writeFile('./users.json', reformat, function(err) {

				if(err) {
				throw err;
				}
		
			});
		});
	}

	addUser({
		firstname: firstName,
		lastname: lastName,
		email: email
	});
	
	delete require.cache[require.resolve('./users.json')]
  	res.redirect('/users');

});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);

});