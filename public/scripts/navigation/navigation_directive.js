angular.module('meal-planning')

.directive('navigationDirective', function() {
  return {
    restrict: 'EA',
    scope: true,
    templateUrl: './views/navigation.html'
  }
})
