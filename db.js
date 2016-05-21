let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Cocktail = new Schema({
	name: String,
	ingredients: String,
	description: String,
	difficulty: String
})

mongoose.model('Cocktail', Cocktail)
mongoose.connect('monodb://localhost/barbook')
