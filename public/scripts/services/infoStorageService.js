angular.module('meal-planning')
.factory('infoStorage', function() {
  var service = {};
  var breakfasts = {};
  var meals;
  var currentWeek;

  // Food Items
  service.saveMeals = function(passedMeals) {
    meals = passedMeals;
  }
  service.getMeals = function() {
    return meals;
  }

  service.saveBreakfastData = function(breakfastItems) {
    console.log('saving in infoStorage ', breakfastItems);
    breakfasts = breakfastItems;
  }

  service.serveBreakfasts = function() {
    console.log('return from infoStorage ', breakfasts);
    return breakfasts;
  }

  service.currentWeek = function() {
    console.log('current week is ', currentWeek);
  }

  return service;
})
