// Dependencies
var Breakfast = require('../models/BreakfastModel.js');

exports.createNewBreakfast = function(req, res) {
  console.log('req.body', req.body);
  new Breakfast(req.body)
  .save(function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};

exports.getAllBreakfast = function(req, res) {
  Breakfast.find({}, function(err, data) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};
