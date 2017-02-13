// Handles routing for Node server.
// If you're looking for the React application's router, go search in /src for "<Router". Note the lack of closing tag.

const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// Use "session: false" since the token will be supplied with each request.
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app) {
	// Pass through requireAuth step before handler.

	// An example route that requires authorization to hit. 
	// app.get('/', requireAuth, function(req, res){
	// 	res.send({ message: 'Super secret code is ABC1234' });
	// });

	app.post('/signin', requireSignIn, Authentication.signin);
	app.post('/signup', Authentication.signup);
}