var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

// Constants
var port = 8887,
    mongoUri = 'mongodb://localhost:27017/MealPlanning';

// App definition
var app = express();

    app.use(express.static(__dirname + '/public'));

    // Middleware
    app.use(cors());

    // Expanding server capacity
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

    // Controllers
    var Breakfast = require('./server/controllers/BreakfastController.js');
    var Lunch = require('./server/controllers/LunchController.js');
    var Food = require('./server/controllers/FoodController.js');


    ///////////////////////////////////////////////////
    ////                   Rest API                ////
    ///////////////////////////////////////////////////

    // Add food item
    app.post('/api/newFoodItem', Food.createNewFood);
    app.get('/api/foodItems', Food.getAllFoods);

    // Breakfast
    app.post('/api/breakfast', Breakfast.createNewBreakfast);
    app.get('/api/breakfast', Breakfast.getAllBreakfast);

    // Lunch
    app.post('/api/lunch', Lunch.createNewLunch);
    app.get('/api/lunch', Lunch.getAllLunch);


    // Connect mongoose
    mongoose.connect(mongoUri);
    mongoose.connection.once('open', function() {
      console.log('Connected on ', mongoUri);
    });

    app.listen(port, function() {
      console.log('I was aiming for his head!', port);
    });
