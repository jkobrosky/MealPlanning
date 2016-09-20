angular.module('meal-planning')
.controller('CalendarController', function($scope, calendarService, infoStorage, initialBreakfast, initialLunch, initialDinner, initialSnacks){
  $scope.breakfasts = initialBreakfast;
  $scope.lunches = initialLunch;
  $scope.dinners = initialDinner;
  $scope.snacks = initialSnacks;

  $scope.getIngredients = function() {
    $scope.ingredientsList = calendarService.getIngredients();
  }

  $scope.getMeals = function() {
    calendarService.getMeals()
    .then(function(response) {
      $scope.meals = response;
    })
  }

  $scope.getBreakfasts = function() {
    calendarService.getBreakfasts()
    .then(function(response) {
      $scope.breakfasts = response;
      //$scope.getBreakfasts();
    })
  }

  $scope.getLunches = function() {
    calendarService.getLunches()
    .then(function(response) {
      console.log('response from infoStorage ', response);
      $scope.lunches = response;
      //console.log('length of lunches ', $scope.lunches.length);
      //$scope.getLunches();
    })
  }

  $scope.getDinners = function() {
    calendarService.getDinners()
    .then(function(response) {
      $scope.dinners = response;
      //$scope.getDinners();
    })
  }

  $scope.getSnacks = function() {
    calendarService.getSnacks()
    .then(function(response) {
      $scope.snacks = response;
      //$scope.getSnacks();
    })
  }

  $scope.createNewFoodItem = function(foodItem) {
    console.log('foodItem ', foodItem);
    calendarService.createNewFoodItem(foodItem)
    .then(function(response) {
      console.log('response ', response);
      //infoStorage.saveMeals(response);
      $scope.foodItem = {}; // Resets form
      $scope.getMeals();
      $scope.getBreakfasts();
      $scope.getLunches();
      $scope.getDinners();
      $scope.getSnacks();

    })
  }

  // $scope.getIngredients();
  // $scope.getMeals();
  // $scope.getBreakfasts();
  // $scope.getLunches();
  // $scope.getDinners();
  // $scope.getSnacks();

})
