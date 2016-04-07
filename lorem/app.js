var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'jade');

var words = []

var dingetjes = ['lantaarnpaal', 'ongemengd', 'uniek', 'dingetje', 'wokkels', 'koffiefilter', 'chuckle', 'cherry', 'asperges']
var food = ['Apple', 'Hamburger']
var drinks = []


app.post('/addword', function (req,res){

	var word = req.body.word;
	console.log(word)
	words.push(word)
	console.log(words)
	res.redirect('/')

})

app.post('/deleteword', function (req,res){

	var word = req.body.word;
	console.log(word)

	index = words.indexOf(word)
    words.splice(index, 1)
	console.log(words)
	res.redirect('/')

})

app.get('/generate', function (req, res){

	var text = ''

	console.log(req.query.number)

	function generateText(number){

		for(var i = 0; i < number; i++){

			var random = Math.floor((Math.random() * words.length) + 0);

			text = text + words[random] + ' '

		}

		console.log(text)
		load()

	}

	generateText(req.query.number)

	function load(){

		res.send(text)

	}

})

app.get('/wordlist', function (req, res){

	res.send(words)

})

app.get('/loaddingetjes', function (req, res){

	for(var i = 0; i < dingetjes.length; i++){

		words.push(dingetjes[i])
	}

	res.send("done")

})

app.get('/loadfood', function (req, res){

	for(var i = 0; i < food.length; i++){

		words.push(food[i])
	}

	res.send("done")

})

app.get('/clearlist', function (req, res){

	words = []

	res.send("done")

})

//route 1: renders a page where one can enter a location
app.get('/', function (req,res) {

	res.render('index')

});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);

});