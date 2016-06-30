'use strict';

angular.module('dndWithD3App', ['ngRoute', 'ui.bootstrap', 'restangular']).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'lc-drag_drop_d3.html',
    controller: 'MainCtrl'
  }).otherwise({
    redirectTo: '/'
  });
})
  .run(function($window, $rootScope) {
    $rootScope.isOnline = navigator.onLine;
    $window.addEventListener("online", function() {
      $rootScope.$apply(function() {
        $rootScope.isOnline = true;
      });
    }, false);
    $window.addEventListener("offline", function() {
      $rootScope.$apply(function() {
        $rootScope.isOnline = false;
      });
    }, false);
  });