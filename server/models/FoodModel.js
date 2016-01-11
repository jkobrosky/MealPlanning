var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: { type: String, index: true, required: true },
  ingredients: { type: String, index: true, required: true },
  recipe: { type: String, required: false },
  mealTime: { type: String, required: false }
});

module.exports = mongoose.model('Food', foodSchema);
