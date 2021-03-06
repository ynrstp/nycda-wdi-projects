var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';

app.set('views', './views');
app.set('view engine', 'jade');

var titles = []
var bodies = []

//route 1: renders a page that displays all messages.
app.get('/messages', function (req, res) {

	var messages = []
	
	pg.connect(connectionString, function (err, client, done) {

		client.query('SELECT title,body FROM bulletin', function (err, result) {

			for(var i = 0; i < result.rows.length; i++){

				var nextMessage = {}

				nextMessage.title = result.rows[i].title
				nextMessage.body = result.rows[i].body

				messages.push(nextMessage)

			}

			done();
			pg.end();

			res.render('messages', {data: messages});
		});

	});

});

//route 2: renders a page where one can add messages
app.get('/add', function (req, res) {

	res.render('add')

});

//route 3: adding message to the database
app.post('/adding', function (req,res){

	var messageTitle = req.body.messageTitle;
	var message = req.body.message;

	console.log(messageTitle + " " + message)

	pg.connect(connectionString, function (err, client, done) {

			client.query("INSERT INTO bulletin(title, body) VALUES($1, $2)", [messageTitle, message], function (err) {
				if(err) {
					throw err;
				}

				done();
				pg.end(); 
				res.redirect('/messages')
			});
	});

})

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);

});