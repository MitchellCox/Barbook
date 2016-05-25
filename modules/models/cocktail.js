import mongoose from 'mongoose'
let Schema = mongoose.Schema

let Cocktail = new Schema({
	name: String,
	ingredients: [ String ],
	description: String,
	difficulty: String
})

module.exports = mongoose.model('Cocktail', Cocktail)
