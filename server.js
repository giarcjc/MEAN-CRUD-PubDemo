var express = require('express');
var mongoose = require('mongoose');
var app = express();

/* DB Connection*/
/*  LOCAL MONGO CONNECTION WITH MONGOOSE */

var db = mongoose.connect('mongodb://localhost/scratch');

var Schema = mongoose.Schema;
var Publications = new Schema({
	title: String,
	date: String,
	description: String
});

var Pub = mongoose.model('Publication', Publications);

/* Configure server */
app.configure(function(){
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());		
});


app.get('/api/pubs', function(req, res){
	// use mongoose to get all the pubs in db
	Pub.find(function(err, pubs){
		if (err) res.send(err);
			res.json(pubs);
	});
});


app.post('/api/pubs', function(req, res){
	Pub.create({
		title: req.body.title, 
		date: req.body.date, 
		description: req.body.description, 
		done: false
	}, function(err, publication){
		if (err) res.send(err);

		// get and return all the pubs after you create another
		Pub.find(function(err, pubs){
			if(err) res.send(err);
			res.json(pubs);
		});


	});
});


app.delete('/api/pubs/:pub_id', function(req, res){
	Pub.remove({
		_id : req.params.pub_id
	}, function(err, pubs){
		if (err) res.send(err);

		Pub.find(function(err, pubs){
			if (err) res.send(err);
				res.json(pubs);
		});	
	});
});

app.get('/', function(req, res){
	res.sendfile('./public/index.html');
});

app.listen(8080);
console.log('listening on port 8080');
