const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const Property = require('../models/Property')
const User = require('../models/User')



router.get('/', (req, res, next) => {
	Property.find().populate('users').exec((err, properties) => {
		err ? console.log('Error finding properties', err) : ''
		res.send(properties)
	})
})

router.get('/:id', (req, res, next) => {
	Property.findOne({_id: req.params.id}).populate('users').exec((err, property) => {
		err ? console.log('Error finding property', err) : ''
		res.send(property)
	})
})

router.get('/:id/likes', (req, res, next) => {
	Property.findOne({_id: req.params.id}).populate('users').exec((err, property) => {
		err ? console.log('Error finding likes', err) : ''
		res.send(property.likes.toString())
	})
})

router.post('/', (req, res, next) => {
	let newProperty = Property({
		listingId: req.body.listingId,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		likes: req.body.likes ? req.body.likes : 0
	})

	newProperty.save((err, property) => {
		err ? console.log('Error creating property', err) : ''
		res.send('Property Created')
	})
})


router.put('/:id/likes', (req, res, next) => {
	// From token
	let token = {
		userId: '5b933723b45f685e82d5212f'
	}
	User.findOne({_id: token.userId}).exec((err, user) => {
		err ? console.log('Error loading user to add property', err) : ''

		Property.findOne({_id: req.params.id}).exec((err, property) => {
			err ? console.log('Error finding property to update likes', err) : ''


			!JSON.stringify(property.users).includes(user.id) ? property.users.push(user) : console.log('user already likes this property')
			property.likes = property.users.length
			property.save(err => {
				err ? console.log('Error saving likes and updating users') : ''
			})

			!JSON.stringify(user.properties).includes(property.id) ? user.properties.push(property) : 'property already liked by this user'
			user.save(err => {
				err ? console.log('Error saving property to user', err) : ''
				res.send('Added property to user')
			})
		})
	})
})

router.delete('/:id', (req, res, next) => {
	Property.findOneAndRemove({_id: req.params.id}).exec((err, property) => {
		err ? console.log('Error deleting property', err) : res.send(`deleted id: ${req.params.id}`)
	})
})

module.exports = router