angular.module('meal-planning')
.factory('infoStorage', function() {
  var service = {};

  var meals;

  // Food Items
  service.saveMeals = function(passedMeals) {
    meals = passedMeals;
  }
  service.getMeals = function() {
    return meals;
  }

  return service;
})
