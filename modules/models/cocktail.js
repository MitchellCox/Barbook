import mongoose from 'mongoose'
let Schema = mongoose.Schema

let Cocktail = new Schema({
	name: String,
	image: String,
	ingredients: [ String ],
	description: [ String ], 
	equipment: [ String ],
	difficulty: String
})

module.exports = mongoose.model('Cocktail', Cocktail)
