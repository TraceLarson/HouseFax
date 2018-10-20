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
router.get('/me', passport.authenticate('jwt', {session: false}), (req, res, next) => {
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
		err ? console.error('Error finding users', err) : ''
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
		user ? res.status(400).json({email: 'email already exits'}) : ''
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
					err ? console.error('Error saving user', err) : ''
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
			if (!user) {
				errors.email = 'User not found'
				return res.status(404).json(errors)
			}
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if (isMatch) {
						const payload = {
							id: user.id,
							firstname: user.firstname,
							lastname: user.lastname,
							email: user.email
						}
						jwt.sign(payload, process.env.JWT_SECRET, {
							expiresIn: parseInt(process.env.JWT_EXPIRE)
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

router.put('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	User.findOneAndUpdate(
		{_id: req.params.id},
		{$set: req.body.user},
		{new: true},
		(err, user) => {
			err ? console.error('Error updating user', err) : console.log(user)
			// res.json(user)
			bcrypt.genSalt(10, (err, salt) => {
				err ? console.error('Error bcrypt-ing', err) : ''
				bcrypt.hash(user.password, salt, (err, hash) => {
					err ? console.error('Error bcrypt-ing password', err) : ''
					user.password = hash
					user.save((err, user) => {
						err ? console.error('Error saving user', err) : console.log('After bcrypt ', user)
						res.json(user)
					})
				})
			})
		})
})

router.delete('/:id', (req, res, next) => {
	User.findOneAndRemove({_id: req.params.id}).exec((err, user) => {
		err ? console.error('Error deleting user', err) : res.send(`deleted user id: ${req.params.id}`)
	})
})



router.delete('/properties/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	// From token
	const token = req.user

	console.log(`*****\r\n USER user/properties/:id DELETE INFO 1 \r\nToken: ${token.firstname}\r\n*****`)

	User.findOne({_id: token._id}).exec((err, user) => {

		if (err)
			console.log(`*****\r\n USER user/properties/:id DELETE ERROR 1\r\n error: ${err.message}\r\n*****`)
		else {

			console.log(`*****\r\nUSER user/properties/:id DELETE INFO 2 \r\n User.findOne ${user} \r\n *******`)

			Property.findOne({_id: req.params.id}).exec((err, property) => {

				if (err)
					console.log(`*****\r\n USER user/properties/:id DELETE ERROR 2\r\n error: ${err.message}\r\n*****`)
				else {

					console.log(`*****\r\nUSER user/properties/:id DELETE INFO 3 \r\n Property.findOne: ${property} \r\n *******`)

					if (!JSON.stringify(user.properties).includes(property._id)) {
						console.log(`*****\r\n USER user/properties/:id DELETE ERROR 3\r\n Could not find ${req.params.id} in \r\n ${user.properties}\r\n*****`)
						res.status(404).send(`Could not find ${req.params.id} in \r\n ${user.properties}`)
					}
					else {
						user.properties.splice(user.properties.indexOf(property._id), 1)

						console.log(`*****\r\nUSER user/properties/:id DELETE INFO 4 \r\n User Properties: ${user.properties} \r\n *******`)

						user.save((err) => {
							if (err)
								console.log(`*****\r\n USER user/properties/:id DELETE ERROR 4\r\n Error saving user after removing liked property ${err.message}\r\n*****`)
							else {

								console.log(`*****\r\nUSER user/properties/:id DELETE INFO 5 \r\n saved user ${user} \r\n *******`)

								if (!JSON.stringify(property.users).includes(user.id)) {
									console.log(`*****\r\n USER user/properties/:id DELETE ERROR 5\r\n user id ${token.userId} not found in this property's users\r\n ${property.users}\r\n*****`)
									res.status(404).send(`user id ${user._id} not found in this property's users \r\n ${property.users}`)
								}
								else {
									console.log(`******\r\nUSER user/properties/:id DELETE INFO 6 \r\n Property Users before slice: ${property.users}\r\n`)

									property.users.splice(property.users.indexOf(user), 1)

									console.log(`\r\n Property Users after slice: ${property.users} \r\n *******`)

									property.save((err) => {
										if(err) {
											console.log(`*****\r\n USER user/properties/:id DELETE ERROR 5\r\n Error saving property after removing user from users ${err.message}\r\n*****`)
											console.error('', err)
										}
										else{
											console.log(`*****\r\nUSER user/properties/:id DELETE INFO 6 \r\n Deleted property ${req.params.id} from user id: ${user._id} \r\n *******`)
											res.send(`Deleted property ${req.params.id} from user id: ${user._id}`)
										}
									})
								}

							}

						})
					}
				}
			})
			// res.send('testing')
		}
	})
})

module.exports = router