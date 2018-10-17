const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')


// Serve static files if in production environment
if(process.env.NODE_ENV === 'production'){
	// Set static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		// res.sendFile([path.resolve(__dirname, 'client', 'build', 'index.html')])
		res.sendFile(path.join(__dirname + '/client/build/index.html'))
	})
}

// Passport Requirements
app.use(passport.initialize())
require('./passport')(passport)

// Configure Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// Connect to MongoDB Database
process.env.NODE_ENV === 'production' ? (
	mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}${process.env.MLAB_HOST}/${process.env.MLAB_DATABASE}`, { useNewUrlParser: true } )
) : (
	mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`, { useNewUrlParser: true } ) // LOCAL DEVELOPMENT
)



// Get default connection
var db = mongoose.connection

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Bind connection to connection event
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULLY'))


// ROUTES
// TODO: create routes
const index = require('./routes/index')
const api = require('./routes/api')
const user = require('./routes/user')
const property = require('./routes/property')
app.use('/', index)
app.use('/api', api)
app.use('/user', user)
app.use('/property', property)


module.exports = app