// Dependencies
var Food = require('../models/FoodModel.js');

exports.createNewFood = function(req, res) {
  console.log('req body ', req.body);
  new Food(req.body)
  .save(function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};

exports.getAllFoods = function(req, res) {
  Food.find({}, function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};

exports.getAllBreakfast = function(req, res) {
  Food.find({ mealType: "Breakfast" }, function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};

exports.getAllLunch = function(req, res) {
  Food.find({ mealType: "Lunch" }, function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};

exports.getAllDinner = function(req, res) {
  Food.find({ mealType: "Dinner" }, function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};

exports.getAllSnacks = function(req, res) {
  Food.find({ mealType: "Snack" }, function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};
