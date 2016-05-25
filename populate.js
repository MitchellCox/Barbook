var fs = require('fs')
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Cocktail = new Schema({
  name : String,
  ingredients : [ String ]
})

mongoose.model('Cocktail', Cocktail)
var Drink = mongoose.model('Cocktail')
mongoose.connect('mongodb://localhost/barbook')


fs.readFile('./drinks.json', 'utf8', function (err, data) {
  data = JSON.parse(data)
  for (var row in data) {
    var cocktail = new Drink()
    cocktail.name = row;
    cocktail.ingredients = data[row]
    cocktail.save(function (err, cocktail) {
      if (err)
        console.log("ERROR: " + err)
      console.log(cocktail)
    })
  }
})
