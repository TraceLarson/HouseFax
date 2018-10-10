const mongoose = require('mongoose')



const propertySchema = new mongoose.Schema({
	listingId: {type: String, unique: true },
	address: {type: String, unique: true},
	city: String,
	state: String,
	likes: {type: Number, default: 0},
	users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	created_at: {type: Date, default: Date.now},
	updated_at: Date
})

propertySchema.pre('save', next => {
	let currentDate = new Date()
	this.updated_at = currentDate
	if(!this.created_at) this.created_at = currentDate

	next()
})

module.exports = mongoose.model('Property', propertySchema, 'properties')