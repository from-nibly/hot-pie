'use strict';

/**
 * @ngdoc function
 * @name hotPieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hotPieApp
 */
angular.module('hotPieApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
