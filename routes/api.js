const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const axios = require('axios')
const path = require('path')
const Bridge = require('../models/Bridge')
const Crime = require('../models/Crime')


router.post('/crime', (req, res, next) => {

	let lat = req.body.lat
	let lng = req.body.lng

	Crime.getCrime(lat, lng)
		.then(response => {
			res.send(response)
		})
})


router.get('/bridge', (req, res, next) => {
	Bridge.getAllListings()
		.then(response => {
			res.json(response)
		})
})

router.post('/bridge', (req, res, next) => {
	let nearHere = req.body.location

	Bridge.getNearbyListings(nearHere)
		.then(response => {
			res.json(response)
		})
})


module.exports = router