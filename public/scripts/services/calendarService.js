angular.module('meal-planning')
.service('calendarService', function($http, $q) {

  this.createNewFoodItem = function(foodObj) {
    var dfd = $q.defer();

    $http({
      method: "POST",
      url: "/api/newFoodItem",
      data: foodObj
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    })

    return dfd.promise;
  };

  this.getMeals = function() {
    var dfd = $q.defer();

    $http({
      method: "GET",
      url: "/api/foodItems"
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    })
    return dfd.promise;
  };

  this.getBreakfasts = function() {
    var dfd = $q.defer();

    $http({
      method: "GET",
      url: "/api/foodItems/breakfast"
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    })
    return dfd.promise;
  };

  this.getLunches = function() {
    var dfd = $q.defer();

    $http({
      method: "GET",
      url: "/api/foodItems/lunch"
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    })
    return dfd.promise;
  };

  this.getDinners = function() {
    var dfd = $q.defer();

    $http({
      method: "GET",
      url: "/api/foodItems/dinner"
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    })

    return dfd.promise;
  };

  this.getSnacks = function() {
    var dfd = $q.defer();

    $http({
      method: "GET",
      url: "/api/foodItems/snacks"
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    })

    return dfd.promise;
  };

  this.getIngredients = function() {
    return ingredientsList;
  };

  // Fake data - always a bad practice but oh well
  var ingredientsList = [
    {
      name: 'Avocado',
      qty: 1
    },
    {
      name: 'Red Onion',
      qty: 1
    },
    {
      name: 'Chopped Garlic',
      qty: 1
    },
    {
      name: 'Keylime Juice',
      qty: '1 oz'
    },
    {
      name: 'Salt and Pepper',
      qty: 'a pinch'
    }
  ]

})
