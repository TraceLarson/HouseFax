const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const axios = require('axios')
const path = require('path')


router.get('/crime', (req, res, next) => {

	// Set location from params
	let location = {
		lat: '30.276581', // req.body.latitude
		lng: '-97.766132' // req.body.longitude
	}
	// Initailize empty array
	let resArray = []

	axios.get(process.env.CRIME_API_ENDPOINT, {
		method: "GET",
		headers: {
			$$app_token: process.env.CRIME_API_APP_TOKEN,
		},
		params: {
			$where: `within_circle(location,${location.lat}, ${location.lng}, 1000)`,
			$limit: 10,
		}
	})
		.then(response => {
			console.log(response)
			response.data.map(occurence => {
				resArray.push(occurence)
			})
			res.send(resArray)
		})
		.catch(err => {
			console.log('error fetching CRIME', err)
		})
})

router.get('/bridge', (req, res, next) => {
	axios.get(`${process.env.BRIDGE_API_ENDPOINT}access_token=${process.env.BRIDGE_API_SERVER_TOKEN}`)
		.then(response => {
			console.log(response)
			res.send(JSON.stringify(response.data))
		})
		.catch(err => {
			console.log('error fetching MLS', err)
		})
})

module.exports = router