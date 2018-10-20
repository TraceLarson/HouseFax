const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const Property = require('../models/Property')
const User = require('../models/User')



// Get the number of likes on a Property by id of the property
router.get('/:id/likes', (req, res, next) => {
	console.log(`********* \r\nProperty route GET /:id/likes 1\r\n Listing from params: ${req.params.id}\r\n*********`)

	Property.findOne({listingId: req.params.id}).exec((err, property ) => {
		console.log(`********\r\n Property route GET /:id/likes 2\r\n Property returned from DB: ${property}\r\n****************`)
		const defaultValue = "0"
		if (property === null){
			console.log(`*******\r\nProperty route GET /:id/likes ERROR 1:\r\nProperty is NULL sending 0 back\r\n*********`)
			res.send(defaultValue)
		} else if (err) {
			console.log(`********* \r\n Property route GET /:id/likes ERROR 2: \r\n Error retrieving likes on property ${err.message}\r\n************`)
		}else {
			console.log(`********\r\n Property route GET /:id/likes 3\r\n property likes router: ${property}\r\n****************`)
			property === null ? res.send(defaultValue) : res.send(property.likes.toString())
		}
	})
})


// Get a saved property by id of the Property
router.get('/:id', (req, res, next) => {
	Property.findOne({_id: req.params.id}).populate('users').exec((err, property) => {
		err ? console.error('Error finding property', err) : res.send(property)

	})
})


// Get all properties saved in the db
router.get('/', (req, res, next) => {
	Property.find().populate('users').exec((err, properties) => {
		err ? console.error('Error finding properties', err) : ''
		res.send(properties)
	})
})


// Create a new property to be saved in the database
router.post('/', (req, res, next) => {
	console.log(`********* \r\nProperty route POST /property\r\n Listing from params: ${req.body.listingId}\r\n*********`)
	Property.find({listingId: req.body.listingId})
		.exec((err, properties) => {
			if (err){
				console.log(`******\r\nProperty route POST /property \r\n error finding property ${err.message}\r\n****`)
			}
			console.log(`********* \r\nProperty route POST /property MONGOOSE 1 \r\n Properties returned from DB ${properties.length} \r\n*********`)
			if (properties.length) {
				console.log(`********* \r\nProperty route POST /property MONGOOSE ALERT\r\n Property Already Exists \r\n*********`)
				res.send(`Property Already Exists`)
			}
			else {
				console.log(`********* \r\nProperty route POST /property MONGOOSE 2\r\n Creating NEW property\r\n*********`)
				console.log(`${req.body.listingId}\r\n${req.body.address}\r\n${req.body.city}\r\n${req.body.state}\r\n${req.body.likes ? req.body.likes : 0}`)
				let newProperty = new Property({
					listingId: req.body.listingId,
					address: req.body.address,
					city: req.body.city,
					state: req.body.state,
					likes: req.body.likes ? req.body.likes : 0
				})
				console.log(`#### newProperty: \r\n ${newProperty}`)
				newProperty.save((err, property) => {
					console.log(`********* \r\nProperty route POST /property MONGOOSE 3\r\n Saving NEW property ${newProperty}\r\n*********`)
					err ? res.sendStatus(400).send(`!!! Error creating property ${err.errmsg} !!!`) : res.send('Property Created')
				})
			}
		})
})



// Update likes on a property
router.put('/:id/likes', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	// From token
	let token = req.user

	User.findOne({_id: token.id}).exec((err, user) => {
		if (err) {
			res.sendStatus(400).send('Error loading user to add property', err)
		} else {
			console.log('found user')

			Property.findOne({listingId: req.params.id}).exec((err, property) => {
				if (err) {
					res.sendStatus(400).send(`Error finding property to update likes ${err.name}`)
				} else {
					console.log('found property')
					console.log(property)

					!JSON.stringify(property.users).includes(user.id) ? property.users.push(user) : console.error(`user already likes this property`)
					console.log(`added user to property`)
					property.likes = property.users.length
					console.log('set likes = property.users.length')
					property.save(err => {
						console.log(`property.save method`)
						if (err) {
							console.log(`Error saving likes and updating users`)
							res.sendStatus(400).send(`Error saving likes and updating users ${err}`)
						} else {
							!JSON.stringify(user.properties).includes(property.id) ? user.properties.push(property) : 'property already liked by this user'
							console.log(`added property to user`)
							user.save(err => {
								if (err) {
									console.log(`Error Saving property to user`)
									res.sendStatus(400).send(`Error Saving property to user ${err}`)
								} else
									console.log(`saved user with new property, response sent`)
									res.send(property.likes.toString())
							})
						}
					})
				}
			})
		}
	})
})




router.delete('/:id', (req, res, next) => {
	Property.findOneAndRemove({_id: req.params.id}).exec((err, property) => {
		err ? console.error('Error deleting property', err) : res.send(`deleted id: ${req.params.id}`)
	})
})

module.exports = router