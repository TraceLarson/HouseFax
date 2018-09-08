const express = require('express')
const router = express.Router()
const bodyParser  = require('body-parser')
const mongoose = require('mongoose')
const axios = require('axios')
const path = require('path')
const Bridge = require('../models/Bridge')
const Crime = require('../models/Crime')



router.get('/crime', (req, res, next) => {
	let location = {
		lat: '30.276581', // req.body.latitude
		lng: '-97.766132' // req.body.longitude
	}
	Crime.getCrime(location.lat, location.lng)
		.then(response => {
			res.send(response)
		})
})


router.get('/bridge', (req, res, next) => {
	Bridge.getListing()
		.then(response => {
			res.send(response)
		})
})


module.exports = router