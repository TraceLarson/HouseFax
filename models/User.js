const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
	name: {type: String, unique: true},
	email: {type: String, unique: true},
	password: String,
	properties: [{type: mongoose.Schema.Types.ObjectId, ref: 'Property'}],
	created_at: {type: Date, default: Date.now},
	updated_at: Date,
})

userSchema.pre('save', next => {
	let currentDate = new Date()
	this.updated_at = currentDate
	if(!this.created_at) this.created_at = currentDate

	next()
})

module.exports = mongoose.model('User', userSchema, 'users')