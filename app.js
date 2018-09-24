const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')


// Passport Requirements
app.use(passport.initialize())
require('./passport')(passport)

// Configure Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// Connect to MongoDB Databse
mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`)

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