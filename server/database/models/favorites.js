var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FavoritesSchema = new Schema({
  user: {
    type: String,
    unique: false
  },
  name: {
    type: String,
    unique: false

  },
  location: {
    type: String,
    unique: false
  },
  star: {
    type: Number,
    unique: false
  },
  url: {
    type: String,
    unique: false
  },
  image: {
    type: String,
    unique: false
  }
});

var Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;