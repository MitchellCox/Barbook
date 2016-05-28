import mongoose from 'mongoose'
let Schema = mongoose.Schema

let Cocktail = new Schema({
	name: { type: String, unique: true, required: true },
	image: String,
	ingredients: [ String ],
	description: [ String ], 
	equipment: [ String ],
	difficulty: String
})

module.exports = mongoose.model('Cocktail', Cocktail)
