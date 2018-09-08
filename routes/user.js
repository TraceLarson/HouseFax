const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const User = require('../models/User')


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

router.post('/', (req, res, next) => {
	let newUser = User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})

	newUser.save((err, user) => {
		err ? console.log('Error creating user') : ''
		res.send('User Created')
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

module.exports = router