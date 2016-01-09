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
