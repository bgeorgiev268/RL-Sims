var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FavoritesSchema = new Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  activity: {
    type: String
  },
  star: {
    type: Number
  },
  url: {
    type: String
  },
  image: {
    type: String
  }
});

var Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;