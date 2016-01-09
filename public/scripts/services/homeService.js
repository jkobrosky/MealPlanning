angular.module('meal-planning')
.service('homeService', function($http, $q) {

  this.createNewBreakfast = function(breakfastObj) {
    var dfd = $q.defer();

    $http({
      method: "POST",
      url: "/api/breakfast",
      data: breakfastObj
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    });

    return dfd.promise;
  };

  this.createNewLunch = function(lunchObj) {
    var dfd = $q.defer();

    $http({
      method: "POST",
      url: "/api/lunch",
      data: lunchObj
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    });
  }

  this.createNewDinner = function(dinnerObj) {
    var dfd = $q.defer();

    $http({
      method: "POST",
      url: "/api/dinner",
      data: dinnerObj
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    });
  }


  this.createNewSnack = function(snackObj) {
    var dfd = $q.defer();

    $http({
      method: "POST",
      url: "/api/snack",
      data: snackObj
    })
    .then(function(response) {
      dfd.resolve(response.data);
    })
    .catch(function(err) {
      dfd.reject(err);
    });
  }

})
