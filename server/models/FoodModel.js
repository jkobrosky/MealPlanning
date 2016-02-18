var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: { type: String, index: true, required: true },
  weblink: { type: String },
  cookTime: { type: String },
  mealType: { type: String, required: false },
  ingredients: [{ type: String, index: true, required: true }],
  notes: { type: String, required: false }
});

module.exports = mongoose.model('Food', foodSchema);
