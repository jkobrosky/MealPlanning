angular.module('meal-planning', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    resolve: {
      initialBreakfast: function($q, homeService, infoStorage) {
        var dfd = $q.defer();

        homeService.getBreakfasts()
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(err) {
          console.error(err);
          dfd.reject(err);
        })
        return dfd.promise;
      },

      initialLunch: function($q, homeService) {
        var dfd = $q.defer();

        homeService.getLunches()
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(err) {
          console.error(err);
          dfd.reject(err);
        })
        return dfd.promise;
      },

      initialDinner: function($q, homeService) {
        var dfd = $q.defer();

        homeService.getDinners()
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(err) {
          console.error(err);
          dfd.reject(err);
        })

        return dfd.promise;
      },

      initialSnacks: function($q, homeService) {
        var dfd = $q.defer();

        homeService.getSnacks()
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(err) {
          console.error(err);
          dfd.reject(err);
        })

        return dfd.promise;
      }
    },
  })

  .when('/recipes', {
    templateUrl: 'views/recipes.html'
  })

  .when('/calendar', {
    templateUrl: 'views/calendar.html'
  })

  .when('/shopping', {
    templateUrl: 'views/shopping.html'
  })

  .when('/favorites', {
    templateUrl: 'views/favorites.html'
  })

  .otherwise({
    redirectTo: '/home'
  })
});
