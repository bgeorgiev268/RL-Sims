var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FavoritesSchema = new Schema({
  user: {
    type: String
  },
  name: {
    type: String,
    unique: true
  },
  location: {
    type: String,

  },
  star: {
    type: Number,

  },
  url: {
    type: String,
    unique: true

  },
  image: {
    type: String
  }
});

var Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;