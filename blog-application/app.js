var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var session = require('express-session')
var sassMiddleware = require('node-sass-middleware');

var fs = require('fs');
var bcrypt = require('bcrypt');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/css', sassMiddleware({
	src: __dirname + '/sass',
	dest: __dirname + '/public/css',
	debug: true,
	outputStyle: 'expanded'
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'easy', resave: false, saveUninitialized: true}))
app.use(express.static('public'));

var sequelize = new Sequelize('postgres', process.env.PSQL_USERNAME, process.env.PSQL_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

var blogusers = sequelize.define('blogusers', {

  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  username: {
    type: Sequelize.STRING,
  },

  password: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});

var blogposts = sequelize.define('blogposts', {

  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: Sequelize.STRING,
  },

  body: {
    type: Sequelize.TEXT
  },

  author: {
    type: Sequelize.STRING
  },

  timestamp: {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true
});

var blogcomments = sequelize.define('blogcomments', {

  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  author: {
    type: Sequelize.STRING,
  },

  comment: {
    type: Sequelize.TEXT
  },

  post: {
    type: Sequelize.INTEGER
  },

  timestamp: {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true
});

//route 1: renders a page that displays login/register screen.
app.get('/', function (req, res) {

	res.render('login', {message: ""})

})

//Will login the username
app.post('/login', function (req, res) {

	var userName = req.body.username;
	var passWord = req.body.password;

	if(userName !== "" && passWord !== ""){

		blogusers.findAll({
		  where: {
		    username: userName
		  }
		})
			.then(function(data){

				if(data.length > 0){
					
					bcrypt.compare(passWord, data[0].password, function(err, result) {
					    if (err !== undefined) {
					      console.log(err);
					    } 

	    				if(result){

					    	req.session.loggedIn = true;
							req.session.userid = data[0].uid
							req.session.user = data[0].username
							res.redirect('/blog');

						}

						else{

						   res.render('login', {message: "Wrong password"});;
						}
  					});
				}

				else{

					res.render('login', {message: "User not found"});
				}

			})
	}

	else{

		res.render('login', {message: "Please fill all fields"});
	}

})	

app.get('/logout', function (req, res) {

	req.session.loggedIn = false;
	res.render('login')

})	

//Will register a new user and redirect to login page
app.post('/adduser', function (req, res) {

	var newUsername = req.body.newUsername;
	var newPassword = req.body.newPassword;

	if(newUsername !== "" && newPassword !== ""){

		bcrypt.hash(newPassword, 8, function(err, hash) {
  			if (err !== undefined) {
    			console.log(err);
  			} else {
   				 blogusers.create({
		    		username: newUsername,
		    		password: hash
				});
  			}
		});

		console.log(newUsername + " " + newPassword)

		res.render('login', {message: "Account created, you can now login"});
	}

	else{

		res.render('login', {message: "Please fill out the form"});

	}

})

//renders the welcome page
app.get('/blog', function (req, res) {


	if(req.session.loggedIn == true){

		res.render('blog', {welcome: "Welcome back, " + req.session.user});

	}

	else{

		res.send(401);	
	}


})

//Will add new post to the posts table

app.get('/loadmyposts', function(req, res){

	var results = []

	loadMyPosts()

	function loadMyPosts(){

		blogposts.findAll({
			  where: {
			    author: req.session.user
			  }
		})
			.then(function(data){

				var times = data.length

				for(i = 0; i < times; i++){

					results.push("<a href='/post/" + data[i].dataValues.title + "'>" + data[i].dataValues.title + "<a/>" + "<br>")

				}

				res.send(results)	
			})
	}
	
});

app.get('/loadallposts', function(req, res){

	var results = []

	loadAllPosts()

	function loadAllPosts(){

		blogposts.findAll({

		})
			.then(function(data){

				var times = data.length

				for(i = 0; i < times; i++){

					results.push("<a href='/post/" + data[i].dataValues.title + "'>" + data[i].dataValues.title + "<a/>" + " by " + data[i].dataValues.author + "<br>")

				}

				res.send(results)	
			})
	}
	
});

app.post('/post', function (req,res){

	var postTitle = req.body.postTitle;
	var postContent = req.body.content;
	var userId = req.session.userid
	var user = req.session.user
	var timeSet = new Date();

	console.log(postTitle + " " + postContent)

	if(postTitle !== "" && postContent !== ""){

		blogposts.create({
		    title: postTitle,
		    body: postContent,
		    author: user,
		    timestamp: timeSet
		})
			.then(function(data){
				res.render('blog', {welcome: "Post succesfully added, " + req.session.user});
			})
	}

	else{

		res.render('blog', {welcome: "Please fill out the form, " + req.session.user});

	}

})

var postShow = 

app.get('/post/:posttitle', function (req, res) {

	if(req.session.loggedIn == true){

		var post = req.params.posttitle

		blogposts.findAll({
				  where: {
				    title: post
				  }
			})
				.then(function(data){

					postShow = data[0].dataValues.uid

					console.log(postShow)

					res.render('post', {title: data[0].dataValues.title + " by "  + data[0].dataValues.author, content: data[0].dataValues.body, date: data[0].dataValues.timestamp, welcome: "Happy reading, " + req.session.user})	
				})

	}

	else{

		res.send(401);	
	}

});

app.post('/comment', function (req, res) {

	var comment = req.body.comment;
	var timeSet = new Date();

	if(comment !== ""){

		blogcomments.create({
		    author: req.session.user,
		    comment: comment,
		    post: postShow,
		    timestamp: timeSet
		});

		res.redirect('back');
	}

	else{

		res.redirect('back');

	}

})

app.get('/loadcomments', function(req, res){

	var results = []

	loadComments()

	function loadComments(){

		blogcomments.findAll({
			where: {
				    post: postShow
					}

		})
			.then(function(data){

				var times = data.length

				for(i = 0; i < times; i++){

					results.push('<b>' + data[i].dataValues.author + '</b>' + '<br>' + data[i].dataValues.comment + '<br>' + data[i].dataValues.timestamp + '<br>')

				}

				res.send(results)	
			})
	}
	
});

sequelize.sync().then(function () {

	var server = app.listen(3000, function () {
		console.log('Example app listening on port: ' + server.address().port);

	});

});