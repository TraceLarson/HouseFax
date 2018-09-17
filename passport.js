const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const path = require('path')

const User = require('../models/User')
const Property = require('../models/Property')
const opts = {}

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'

module.exports = passport => {
	passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
		User.findById(jwt_payload.id)
			.then(user => {
				user ? done(null, user) : done(null, false)
			})
			.catch(err => console.error(err))
	}))
}