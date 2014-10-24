var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/MongoosePM';
mongoose.connect(dbURI);

/*********************
	USET SCHEMA
**********************/

var userSchema = new mongoose.Schema({
	name : String,
	email: {type : String/*, unique: true*/},
	createOn:{type: Date, default: Date.now},
	modifiedOn: Date,
	lastLogin: Date
});

//Build the User Model
mongoose.model('User', userSchema);


/**********************
	PROJECT SCHEMA
**********************/

var projectSchema = new mongoose.Schema({
	projectname : String,
	createOn: {type: Date, default: Date.now},
	modifiedOn:Date,
	createdBy: String,
	contributors: String,
	tasks: String
});

//Build the Projcet Model
mongoose.model('Project', projectSchema);
module.exports=mongoose;
