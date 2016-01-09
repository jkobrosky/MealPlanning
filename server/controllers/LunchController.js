var Lunch = require('../models/LunchModel.js');

exports.createNewlunch = function(req, res) {
  console.log('req.body ', req.body);
  new Lunch(req.body)
  .save(function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};

exports.getAllLunch = function(req, res) {
  Lunch.find({}, function(err, data) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  })
};
