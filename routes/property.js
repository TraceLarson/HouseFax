const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
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
	Property.findOne({_id: req.params.id}).populate('users').exec((err, property) => {
		err ? console.error('Error finding likes', err) : ''
		res.send(property.likes.toString())
	})
})

// Create a new property to be saved in the database
router.post('/', (req, res, next) => {
	let newProperty = Property({
		listingId: req.body.listingId,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		likes: req.body.likes ? req.body.likes : 0
	})

	newProperty.save((err, property) => {
		err ? console.error('Error creating property', err) : ''
		res.send('Property Created')
	})
})

// Update likes on a property
router.put('/:id/likes', (req, res, next) => {
	// From token
	let token = {
		userId: '5b933723b45f685e82d5212f'
	}
	User.findOne({_id: token.userId}).exec((err, user) => {
		err ? console.error('Error loading user to add property', err) : ''

		Property.findOne({_id: req.params.id}).exec((err, property) => {
			err ? console.log('Error finding property to update likes', err) : ''


			!JSON.stringify(property.users).includes(user.id) ? property.users.push(user) : console.error('user already likes this property')
			property.likes = property.users.length
			property.save(err => {
				err ? console.error('Error saving likes and updating users') : ''
			})

			!JSON.stringify(user.properties).includes(property.id) ? user.properties.push(property) : 'property already liked by this user'
			user.save(err => {
				err ? console.error('Error saving property to user', err) : ''
				res.send('Added property to user')
			})
		})
	})
})

router.delete('/:id', (req, res, next) => {
	Property.findOneAndRemove({_id: req.params.id}).exec((err, property) => {
		err ? console.error('Error deleting property', err) : res.send(`deleted id: ${req.params.id}`)
	})
})

module.exports = router