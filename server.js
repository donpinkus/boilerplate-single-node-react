const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiRoutes = require('./router.js');
const config = require('./config.js');

/* DB setup */
if (process.env.NODE_ENV !== 'production') {
	mongoose.connect('mongodb://localhost/' + config.db_name);
} else {
	// We're using the MongoLab Heroku add-on. The add-ons ets a heroku config var that we use.
	// Docs: https://devcenter.heroku.com/articles/mongolab
	mongoose.connect(process.env["MONGODB_URI"]);
}

/* App setup */
const app = express();

// Question: What's this do?
app.use(bodyParser.json({ type: '*/*' }));

// Server static files from "/public"
// To access "/public/images/foo.png" user src="/images/foo.png".
app.use(express.static('public'));

// Routing for API
// Note that these routes are above the routes that serve the site so they take precedence. 
// Route which don't match an API route will fall through, resulting in the index.html being served and React's router doing on the page routing, for example if a person navigates to "site.com/some-page".
apiRoutes(app);

// Routing for the 'single page application'. Basically in dev, webpack-dev-server middleware will catch requests for the page and its assets, and serve them from memory. In production, express serves the SPA page and assets.
if (process.env.NODE_ENV !== 'production') {
	console.log('Node server running DEVELOPMENT');

	// Actual webpack library
	const webpack = require('webpack');
	// Middleware that will intercept requests
	const webpackDevMiddleware = require('webpack-dev-middleware');
	// Our configuration file
	const webpackConfig = require('./webpack.config.js');

	// Tell express to use webpack middleware to use webpack, configured by our file.
	// Webpack middleware catches relevant requests
	app.use(webpackDevMiddleware(webpack(webpackConfig)));
} else {
	console.log('Node server running PRODUCTION');
	app.use(express.static('dist'));

	// Always respond with the index.html file.
	// This will work correctly with react-router broswerHistory working correctly.
	app.get('*', (req, res, next) => {
		res.sendFile(path.join(__dirname, 'dist', 'index.html'));
	});
}

const server = http.createServer(app);

// Heroku provides a port variable, so we use that if it's set.
const port = process.env.PORT || 3000;
server.listen(port);

console.log('Web server listening on:', port);