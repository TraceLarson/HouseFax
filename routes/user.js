const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

const User = require('../models/User')
const Property = require('../models/Property')



// Get user
router.get('/me', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	User.findOne({_id: req.user.id}).populate('properties').exec((err, user) => {
		err ? console.error('Error loading user info') : res.json(user)
	})
	// return res.json({
	// 	id: req.user.id,
	// 	firstname: req.user.firstname,
	// 	lastname: req.user.lastname,
	// 	email: req.user.email
	// })
})

router.get('/', (req, res, next) => {
	User.find().populate('properties').exec((err, users) => {
		err ? console.log('Error finding users', err) : ''
		res.send(users)
	})
})

router.get('/:id', (req, res, next) => {
	User.findOne({_id: req.params.id}).populate('properties').exec((err, user) => {
		err ? console.error('Error finding user', err) : ''
		res.send(user)
	})
})

// REGISTER
router.post('/', (req, res, next) => {

	const {errors, isValid} = validateRegisterInput(req.body)
	!isValid ? res.status(400).json(errors) : ''

	User.findOne({
		email: req.body.email
	}).then(user => {
		user ?  res.status(400).json({email: 'email already exits'}) : ''
		let newUser = new User({
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
					res.json(user)
				})
			})
		})
	})
})

// LOGIN
router.post('/login', (req, res, next) => {

	const {errors, isValid} = validateLoginInput(req.body)
	!isValid ? res.status(400).json(errors) : ''

	const email = req.body.email
	const password = req.body.password

	User.findOne({email})
		.then(user => {
			if(!user){
				errors.email = 'User not found'
				return res.status(404).json(errors)
			}
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if(isMatch) {
						const payload = {
							id: user.id,
							firstname: user.firstname,
							lastname: user.lastname,
							email: user.email
						}
						jwt.sign(payload, process.env.JWT_SECRET, {
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
						errors.password = 'Incorrect Password'
						return res.status(400).json(errors)
					}
				})
		})
})

router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	User.findOneAndUpdate(
		{_id: req.params.id},
		{$set: req.body.user},
		{new: true},
		(err, user) => {
			err ? console.error('Error updating user', err) : console.log(user)
			res.json(user)
		})
})

router.delete('/:id', (req, res, next) => {
	User.findOneAndRemove({_id: req.params.id}).exec((err, user) => {
		err ? console.log('Error deleting user', err) : res.send(`deleted user id: ${req.params.id}`)
	})
})

router.delete('/properties/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	// From token
	let token = req.user

	User.findOne({_id: token.Id}).exec((err, user) => {
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