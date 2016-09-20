angular.module('meal-planning', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })

  .when('/recipes', {
    templateUrl: 'views/recipes.html'
  })

  .when('/calendar', {
    templateUrl: 'views/calendar.html',
    controller: 'CalendarController',
    resolve: {
      initialBreakfast: function($q, calendarService, infoStorage) {
        var dfd = $q.defer();

        calendarService.getBreakfasts()
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(err) {
          console.error(err);
          dfd.reject(err);
        })
        return dfd.promise;
      },

      initialLunch: function($q, calendarService) {
        var dfd = $q.defer();

        calendarService.getLunches()
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(err) {
          console.error(err);
          dfd.reject(err);
        })
        return dfd.promise;
      },

      initialDinner: function($q, calendarService) {
        var dfd = $q.defer();

        calendarService.getDinners()
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(err) {
          console.error(err);
          dfd.reject(err);
        })

        return dfd.promise;
      },

      initialSnacks: function($q, calendarService) {
        var dfd = $q.defer();

        calendarService.getSnacks()
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
