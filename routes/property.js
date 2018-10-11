const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const Property = require('../models/Property')
const User = require('../models/User')


// Get all properties saved in the db
router.get('/', (req, res, next) => {
	Property.find().populate('users').exec((err, properties) => {
		err ? console.error('Error finding properties', err) : ''
		res.send(properties)
	})
})

// Get a saved property by id of the Property
router.get('/:id', (req, res, next) => {
	Property.findOne({_id: req.params.id}).populate('users').exec((err, property) => {
		err ? console.error('Error finding property', err) : ''
		res.send(property)
	})
})

// Get the number of likes on a Property by id of the property
router.get('/:id/likes', (req, res, next) => {
	Property.findOne({listingId: req.params.id}).populate('users').exec((err, property) => {
		err ? console.error('Error finding likes', err) : ''
		res.send(property.likes.toString())
	})
})

// Create a new property to be saved in the database
router.post('/', (req, res, next) => {

	Property.find({listingId: req.body.listingId})
		.exec((err, properties) => {
			console.log(properties)
			if (properties.length)
				res.send(`Property Already Exists`)
			else {
				let newProperty = Property({
					listingId: req.body.listingId,
					address: req.body.address,
					city: req.body.city,
					state: req.body.state,
					likes: req.body.likes ? req.body.likes : 0
				})
				newProperty.save((err, property) => {
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