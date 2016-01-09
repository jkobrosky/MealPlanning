var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var breakfastSchema = new Schema({
  name: { type: String, index: true, required: true },
  ingredients: { type: String, index: true, required: false }
});

module.exports = mongoose.model('Breakfast', breakfastSchema);
