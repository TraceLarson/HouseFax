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
		userId: '5b931ded0055ac5b07933e61'
	}
	Property.findOne({_id: req.params.id}).exec((err, property) => {
		err ? console.log('Error finding property to update likes', err) : ''
		let newlikes = property.likes + 1
		property.users.push(token.userId)
		Property.findOneAndUpdate(
			{_id: req.params.id},
			{likes: newlikes, users: property.users},
			{new: true},
			(err, updatedProperty) => {
				err ? console.log('Error updating likes', err) : console.log(updatedProperty)

				User.findOne({_id: token.userId}).exec((err, user) => {
					err ? console.log('Error loading user to add property', err) : ''
					user.properties.push(req.params.id)
					user.save(err => {
						err ? console.log('Error saving property to user', err) : ''
						res.send('Added property to user')
					})
				})
			})
	})

})


module.exports = router