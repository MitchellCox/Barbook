require('../../db.js')
import mongoose from 'mongoose'

export const getCocktail = (req, res) => {
	Cocktail.fine (err, cocktails ) => {
		res.json(cocktails)
	})
}

export const createCocktail = (req, res) => {
	new Cocktail({

	}).save( (err, cocktail) => {
		res.json(cocktail)
	})
}

export const updateCocktail = (req, res) => {
	Cocktail.findById(req.body.id, (err, todo) => {
		cocktail.save( err => {
			res.json(cocktail)
		})
 	})
}
