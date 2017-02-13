/*
This file defines the userSchema which can be imported and instantiated elsewhere with new User({ attrs... })

Static methods can be used like this: User.findOne()
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	// Mongo is case sensitive.
	email: { type: String, unique: true, lowercase: true },
	password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next){
	// Get access to the user model
	const user = this;

	// generate a salt, then run callback
	bcrypt.genSalt(10, function(err, salt){
		if (err) { return next(err); }

		// hash (encrypt) our password using the salt
		bcrypt.hash(user.password, salt, null, function(err, hash){
			if (err) { return next(err); }

			// overwrite plain text password with encrypted password
			user.password = hash;
			next();
		});
	});
});

// Compare password function that is used by Passport for local strategy.
userSchema.methods.comparePassword = function(candidatePassword, callback){
	// bcrypt.compare will take the salt from the password, use it to hash the candidate, and then compare.
	// this.password is the user model's password (the hashed one)
	//
	// Question: What is 'isMatch'? Seems like it is always null here.
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if (err) { return callback(err); }

		callback(null, isMatch);
	});
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;