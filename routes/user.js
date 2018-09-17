const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const User = require('../models/User')
const Property = require('../models/Property')




router.get('/', (req, res, next) => {
	User.find().populate('properties').exec((err, users) => {
		err ? console.log('Error finding users', err) : ''
		res.send(users)
	})
})

router.get('/:id', (req, res, next) => {
	User.findOne({_id: req.params.id}).populate('properties').exec((err, user) => {
		err ? console.log('Error finding user', err) : ''
		res.send(user)
	})
})

// REGISTER
router.post('/', (req, res, next) => {

	User.findOne({
		email: req.body.email
	}).then(user => {
		user ?  res.status(400).json({email: 'email already exits'}) : ''
		let newUser = User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password
		})
		bcrypt.genSalt(10, (err, salt) => {
			err ? console.error('Error bcrypt-ing', err) : ''
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				err ? console.error('Error bcrypt-ing password', err) : ''
				newUser.password = hash
				newUser.save((err, user) => {
					err ? console.log('Error saving user', err) : ''
				}).then(user => {
					res.json(user)
				})
			})
		})
	})
})

// LOGIN
router.post('/login', (req, res, next) => {

	const email = req.body.email
	const password = req.body.password

	User.findOne({email})
		.then(user => {
			!user ? res.status(404).json(errors) : ''

			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if(ifMatch) {
						const payload = {
							id: user.id,
							firstname: user.firstname,
							lastname: user.lastname,
						}
						jwt.sign(payload, 'secret', {
							expiresIn: 3600
						}, (err, token) => {
							err ? console.error('Error in token', err) : ''
							res.json({
								success: true,
								token: `Bearer ${token}`
							})
						})
					}
					else {
						return res.status(400).json(errors)
					}
				})
		})
})

// Get user
router.get('/me', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	return res.json({
		id: req.user.id,
		firstname: req.user.firstname,
		lastname: req.user.lastname
	})
})


router.put('/:id', (req, res, next) => {
	User.findOneAndUpdate(
		{_id: req.params.id},
		{$set: req.body},
		{new: true},
		(err, user) => {
			err ? console.log('Error updating user', err) : ''
			res.send(user)
		})
})

router.delete('/:id', (req, res, next) => {
	User.findOneAndRemove({_id: req.params.id}).exec((err, user) => {
		err ? console.log('Error deleting user', err) : res.send(`deleted user id: ${req.params.id}`)
	})
})

router.delete('/properties/:id', (req, res, next) => {
	// From token
	let token = {
		userId: '5b933723b45f685e82d5212f'
	}
	User.findOne({_id: token.userId}).exec((err, user) => {
		err ? console.log('Error finding user to remove property from', err) : ''

		Property.findOne({_id: req.params.id}).exec((err, property) => {
			err ? console.log('Error finding property to remove user from users', err) : ''

			JSON.stringify(user.properties).includes(property.id) ? user.properties.splice(user.properties.indexOf(property), 1) : res.status(404).send(`Could not find ${req.params.id} in \r\n ${user.properties}`)
			user.save((err) => {
				err ? console.log('Error saving user after removing liked property', err) : console.log('saved user')
			})

			JSON.stringify(property.users).includes(user.id) ? property.users.splice(property.users.indexOf(user), 1) : res.status(404).send(`user id ${token.userId} not found in this property's users \r\n ${property.users}`)
			property.save((err) => {
				err ? console.log('Error saving property after removing user from users', err) : console.log('saved property')
			})

			res.send(`Deleted property ${req.params.id} from user id: ${token.userId}`)
		})
	})
})

module.exports = router