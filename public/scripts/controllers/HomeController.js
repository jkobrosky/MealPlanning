angular.module('meal-planning')
.controller('HomeController', function($scope, homeService, infoStorage){

  $scope.getIngredients = function() {
    $scope.ingredientsList = homeService.getIngredients();
  }

  $scope.getMeals = function() {
    homeService.getMeals()
    .then(function(response) {
      $scope.meals = response;
    })
  }

  $scope.getBreakfasts = function() {
    homeService.getBreakfasts()
    .then(function(response) {
      $scope.breakfasts = response;
    })
  }

  $scope.getLunches = function() {
    homeService.getLunches()
    .then(function(response) {
      $scope.lunches = response;
    })
  }

  $scope.getDinners = function() {
    homeService.getDinners()
    .then(function(response) {
      $scope.dinners = response;
    })
  }

  $scope.getSnacks = function() {
    homeService.getSnacks()
    .then(function(response) {
      $scope.snacks = response;
    })
  }

  $scope.createNewFoodItem = function(foodItem) {
    console.log('foodItem ', foodItem);
    homeService.createNewFoodItem(foodItem)
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

  $scope.getIngredients();
  $scope.getMeals();
  $scope.getBreakfasts();
  $scope.getLunches();
  $scope.getDinners();
  $scope.getSnacks();

})
