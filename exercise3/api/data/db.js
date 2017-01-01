var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanhotel';

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error ' + err);
});

process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log("Mongoose disconnected on app termination");
		process.exit(0);
	});
});

//to help nodemon to pick connection terminations on rs
process.on('SIGUSR2', function() {
	mongoose.connection.close(function() {
		console.log("Mongoose disconnected on app termination");
		process.kill(process.pid, 'SIGUSR2');
	});
});

//Bring in SCHEMAS and MODELS
require('./hotels.model.js');