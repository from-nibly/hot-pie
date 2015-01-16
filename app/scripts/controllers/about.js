'use strict';

/**
 * @ngdoc function
 * @name hotPieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hotPieApp
 */
angular.module('hotPieApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
