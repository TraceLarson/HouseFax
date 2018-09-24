const express = require('express')
const router = express.Router()
const bodyParser  = require('body-parser')
const mongoose = require('mongoose')
const axios = require('axios')
const path = require('path')
const Bridge = require('../models/Bridge')
const Crime = require('../models/Crime')



router.get('/crime/:location', (req, res, next) => {
	let location = {
		lat: '30.276581', // req.params.location.lat
		lng: '-97.766132' // req.params.location.lng
	}
	Crime.getCrime(location.lat, location.lng)
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