const express = require('express')
const router = express.Router()
const bodyParser  = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const Property = require('../models/Property')



router.get('/', (req, res, next) => {
	Property.find().exec((err, properties) => {
		err ? console.log('Error finding properties', err) : ''
		res.send(properties)
	})
})

router.post('/', (req, res, next) => {
	let newProperty = Property({
		listingId: req.body.listingId,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state
	})

	newProperty.save((err, property) => {
		err ? console.log('Error creating property', err) : ''
		res.send('Property Created')
	})
})



module.exports = router