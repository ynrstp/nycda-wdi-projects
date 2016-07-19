var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sassMiddleware = require('node-sass-middleware');

var app = express();
var sequelize = new Sequelize('postgres://yoni:123@localhost:5433/yoni');

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/styles', sassMiddleware({
	src: __dirname + '/sass',
	dest: __dirname + '/public/styles',
	debug: true,
	outputStyle: 'expanded'
}));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

var Admin = sequelize.define('admin', {

	uid: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	username: {
		type: Sequelize.STRING
	},

	password: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

var Type = sequelize.define('type', {

	uid: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	type: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

var Topic = sequelize.define('topic', {

	uid: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	topic: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

var Content = sequelize.define('content', {

	uid: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	title: {
		type: Sequelize.STRING
	},

	content: {
		type: Sequelize.TEXT
	},

	author: {
		type: Sequelize.STRING
	},

	status: {
		type: Sequelize.BOOLEAN
	}
}, {
	freezeTableName: true
});

Admin.hasMany(Content);
Content.belongsTo(Admin);

Type.hasMany(Content);
Content.belongsTo(Type);

Topic.hasMany(Content);
Content.belongsTo(Topic);

Type.hasMany(Topic);
Topic.belongsTo(Type);


//route 1: renders the homescreen
app.get('/', function(req, res) {

	var menu = []

	function generateMenu() {

		var counter = 0

		Type.findAll({

		}).then(function(data) {

			for (i = 0; i < data.length; i++) {

				newType = {

					title: data[i].type,
					index: data[i].uid,

				}

				menu.push(newType)

			}

			loadTopics()

			function loadTopics(){

				for(i = 0; i < menu.length; i++){

					loader(i)
				}

			}

				function loader(i){

					Topic.findAll({
						where: {
							typeUid: menu[i].index
						}
					}).then(function(data2) {
						
						topics = []
						
						for (j = 0; j < data2.length; j++) {
						
							topics.push(data2[j].topic)
						
						}

						menu[i].topics = topics
						checker()
						
					});
				}

				function checker(){

					counter++

					if(counter == menu.length){

						res.render('index', {menu: menu})
					}

					else{

						console.log("Not yet ready")
					}

				}

			})
		}

	generateMenu()

})

app.get('/add', function(req, res) {

	var types = []

	Type.findAll({

		}).then(function(data) {

			for (i = 0; i < data.length; i++) {

				var type =  {

					type: data[i].type,
					typeUid: data[i].uid,

				}

				types.push(type)	

			}

			res.render('add', {types: types})
		})

})

app.get('/test', function(req, res) {

	res.render('test')

})

app.post('/addtopic', function(req, res) {

	var topic = req.body.topic;
	var type = req.body.type

	Topic.create({

			topic: topic,
			typeUid: type
		})
		.then(function(data) {
			res.redirect('/')
		})

})

app.post('/addtype', function(req, res) {

	var type = req.body.type

	Type.create({

			type: type
		})
		.then(function(data) {
			res.redirect('/')
		})

})

// Admin.create({

// 	username: "Yoni",
// 	password: "123"

// })

// Topic.create({

// 	topic: "Node.js",
// 	typeUid: 2

// })

// 	title: "Changing State",
// 	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// 	author: "test",
// 	status: false,

// 	adminUid: 1

// })


sequelize.sync().then(function() {

	var server = app.listen(3000, function() {
		console.log('Example app listening on port: ' + server.address().port);

	});

});