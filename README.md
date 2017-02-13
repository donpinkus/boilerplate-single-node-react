## Tech

Frontend:
- react
- redux
- redux-thunk, for doing async requests
- SCSS

Backend:
- node
- passport
- mongodb

Build:
- webpack

Dev tools:
- redux-dev-tools
- webpack-dev-server

## Installing

1. Clone
2. Run `$ npm i` to install dependencies

If you are starting from a blank boilerplate project:

3. Update config.js to have a secret & db_name for your project.  The first time you run the webserver, mongodb will create a 'db' with this name.

## Developing

#### Development Server
Update dependencies
`$ npm i`

Start mongo db
`$ mongod`

Start the node server.  This will run webpack-dev-middleware in development (according to env var)
`$ npm run dev`

#### Production Server (runs without webpack-dev-server)
This will build the static assets (as opposed to using in-memory from webpack-dev-server), and will start the node server. 
`$ npm run build && npm run prod`

View it at `localhost:3000`. Note that the port is an env var, defaulting to 3000.

## Deploying
First deployment to heroku?
1. Create a heroku app.
2. Add MongoLab DB to it. It will create a mongo env var that the app already looks for.

Just push to heroku.  There is a heroku-post-build in the package.json which will build the static assets for you. 
`git push heroku master`


## quick design
[Imgur](http://i.imgur.com/aCE1gci.png)

