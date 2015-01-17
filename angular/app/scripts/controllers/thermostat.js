'use strict';

/**
 * @ngdoc function
 * @name hotPieApp.controller:ThermostatCtrl
 * @description
 * # ThermostatCtrl
 * Controller of the hotPieApp
 */
angular.module('hotPieApp').controller('ThermostatCtrl', function ($scope, thermostatService, $interval) {
  $scope.indicatorDots = [
    {
      on: false,
      color: 'background-color: rgba(255,0,0,1);',
      coordinates: 'top: 47px;right: 101px;',
      style: '',
      range: [99, 95]
    },
    {
      on: false,
      color: 'background-color: rgba(229.5,0,25.5,1);',
      coordinates: 'top: 74px;right: 70px;',
      style: '',
      range: [94, 90]
    },
    {
      on: false,
      color: 'background-color: rgba(204,0,51,1);',
      coordinates: 'top: 106px;right: 45px;',
      range: [89, 85]
    },
    {
      on: false,
      color: 'background-color: rgba(178.5,0,76.5,1);',
      coordinates: 'top: 141px;right: 25px;',
      style: '',
      range: [84, 80]
    },
    {
      on: false,
      color: 'background-color: rgba(153,0,102,1);',
      coordinates: 'top: 180px;right: 14px;',
      style: '',
      range: [79, 75]
    },
    {
      on: false,
      color: 'background-color: rgba(127.5,0,127.5,1);',
      coordinates: 'top: 220px;right: 10px;',
      style: '',
      range: [74, 70]
    },
    {
      on: false,
      color: 'background-color: rgba(102,0,153,1);',
      coordinates: 'top: 260px;right: 14px;',
      style: '',
      range: [69, 65]
    },
    {
      on: false,
      color: 'background-color: rgba(76.5,0,178.5,1);',
      coordinates: 'top: 299px;right: 25px;',
      style: '',
      range: [64, 60]
    },
    {
      on: false,
      color: 'background-color: rgba(51,0,204,1);',
      coordinates: 'top: 334px;right: 45px;',
      style: '',
      range: [59, 55]
    },
    {
      on: false,
      color: 'background-color: rgba(25.5,0,229.5,1);',
      coordinates: 'top: 366px;right: 70px;',
      style: '',
      range: [54, 50]
    },
    {
      on: false,
      color: 'background-color: rgba(0,0,255,1);',
      coordinates: 'top: 393px;right: 101px;',
      style: '',
      range: [49, 45]
    }
  ];

  $scope.currentTemp = "00";

  $interval(function () {
    thermostatService.getCurrentTemp().then(function (body, resp, err) {
      console.log('got response for', name);
      if (err) {
        console.log('rejecting', err);
      }
      else {
        console.log(body.data.newValue);
        $scope.currentTemp = body.data.newValue;
        updateIndicator(body.data.newValue);
      }
    });
  }, 2000);

  var updateIndicator = function (temp) {
    var dots = $scope.indicatorDots;
    var highEnd = 0;
    var lowEnd = 1;
    for (var i = dots.length - 1; i <= 0; i--) {
      if (dots[i].range[highEnd] >= temp && temp >= dots[i].range[lowEnd]) {
        dots[i].on = true;
        dots[i].style = dots[i].coordinates + dots[i].color;
      } else {
        dots[i].on = false;
        dots[i].style = dots[i].coordinates + dots[i].color;
      }
    }
  };
});
