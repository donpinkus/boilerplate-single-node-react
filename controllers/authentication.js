const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

// Using JWT token (json web token)
// Docs on JWT are here https://jwt.io/
function tokenForUser(user){
	const timestamp = new Date().getTime();

	// "sub" is short for "subject"
	// "iat" is short for "issued at time"
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next){
	// User has already had their email and password auth'd
	// we just need to give them a token.
	//
	// Question: How or where were they auth'd?
	res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next){
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(422).send({ error: 'You must provide an email and password' });
	}

	// See if a user with the given email exists
	User.findOne({ email: email }, function(err, existingUser){
		if (err) { return next(err); }

		if (existingUser) {
			return res.status(422).send({ error: 'Email is already registed' });
		}

		// If a user with email does not exist, save the record.
		const user = new User({
			email: email,
			password: password
		});

		user.save(function(err){
			if (err) { return next(err); }
		})

		// Respond to request indicating the user was created.
		res.json({ token: tokenForUser(user) });
	});
}