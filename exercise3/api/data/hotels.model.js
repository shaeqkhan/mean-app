var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	rating : {
		type : Number,
		min : 0,
		max : 5,
		required : true
	},
	review : {
		type : String,
		required : true
	},
	createdOn : {
		type : Date,
		"default" : Date.now
	}
});

var roomSchema = new mongoose.Schema({
	type : String,
	number : Number,
	description : String,
	photos : [String],
	price : Number
});

var hotelSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	stars : {
		type : Number,
		min : 0,
		max : 5,
		"default" : 0
	},
	services : [String],
	description : String,
	photos : [String],
	currency : String,
	reviews : [reviewSchema],
	rooms : [roomSchema],
	location : {
		address : String,
		// always store as longitude E/W, lattitude N/S
		coordinates :  {
			type : [Number],
			index : '2dsphere'
		}
	}
});

//pluralizes and converts to lowercase the schema name Hotel -> hotels by default
mongoose.model('Hotel', hotelSchema);