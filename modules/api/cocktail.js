import Cocktail from '../models/cocktail'

export function getCocktail(req, res) {
	Cocktail.find( {}, ( err, cocktails ) => {
		if (err) {
			return res.status(500).json(err)
		} else {
 		  return res.json(cocktails)
 		}
  })
}

export function createCocktail(req, res) {
	new Cocktail({
		name: req.body.name,
		image: req.body.image,
		ingredients: req.body.ingredients,
		description: req.body.description,
		equipment: req.body.equipment,
		difficulty: req.body.difficulty
	}).save( (err, cocktail) => {
		res.send({ cocktail: cocktail })
	})
}

export function updateCocktail(req, res) {
	Cocktail.findById(req.body.id, (err, cocktail) => {
		cocktail.name = req.body.name,
		cocktail.image; req.body.image,
		cocktail.ingredients = req.body.ingredients,
		cocktail.description = req.body.description,
		cocktail.equipment = req.body.equipment,
		cocktail.difficulty = req.body.difficulty
		cocktail.save( function (err, cocktail) {
			res.send({ cocktail: cocktail })
		})
 	})
}
