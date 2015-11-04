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
    app.use(bodyParser.json());

    // Connect mongoose
    mongoose.connect(mongoUri);
    mongoose.connection.once('open', function() {
      console.log('Connected on ', mongoUri);
    });

    app.listen(port, function() {
      console.log('I was aiming for his head!', port);
    });
