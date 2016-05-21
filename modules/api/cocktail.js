require('../../db.js')
// import mongoose from 'mongoose'
// import $ from 'jquery'
let mongoose = require('mongoose') 
let Cocktail = mongoose.model('Cocktail')

export function getCocktail(req, res) {
	Cocktail.find( function (err, cocktails ) {
		res.send(cocktails)
	})
}

export function createCocktail(req, res) {
	new Cocktail({
		name: req.body.name,
		ingredients: req.body.ingredients,
		description: req.body.description,
		difficulty: req.body.difficulty
	}).save( (err, cocktail) => {
		res.send({ cocktail: cocktail })
	})
}

export function updateCocktail(req, res) {
	Cocktail.findById(req.body.id, (err, cocktail) => {
		cocktail.name = req.body.name,
		cocktail.ingredients = req.body.ingredients,
		cocktail.description = req.body.description,
		cocktail.difficulty = req.body.difficulty
		cocktail.save( function (err, cocktail) {
			res.send({ cocktail: cocktail })
		})
 	})
}
