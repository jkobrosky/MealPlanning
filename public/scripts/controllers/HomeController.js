angular.module('meal-planning')
.controller('HomeController', function($scope, homeService){

  $scope.newBreakfastItem = function(breakfastItem) {
    console.log('breakfast', breakfastItem);
    homeService.createNewBreakfast(breakfastItem)
    .then(function(response) {
      console.log('response', response);
      $scope.breakfast.name = "";
      $scope.breakfast.ingredients = "";
    })
  }

  $scope.newLunchItem = function(lunchItem) {
    console.log('lunchItem ', lunchIten);
    homeService.createNewLunch(lunchItem)
    .then(function(response) {
      console.log('response ', response);
      $scope.lunch.name = "";
      $scope.lunch.ingredients = "";
    })
  }

  $scope.newDinnerItem = function(dinnerItem) {
    console.log('dinnerItem ', dinnerItem);
    homeService.createNewDinner(dinnerItem)
    .then(function(response) {
      console.log('response ', response);
      $scope.dinner.name = "";
      $scope.dinner.ingredients = "";
    })
  }

  $scope.newSnackItem = function(snackItem) {
    console.log('snackItem ', snackItem);
    homeService.createNewSnack(snackItem)
    .then(function(response) {
      console.log('response ', response);
      $scope.snack.name = "";
      $scope.snack.ingredients = "";
    })
  }

})
