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
      color: 'background-color: rgba(255,0,0,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 47px;right: 101px;',
      style: 'top: 47px;right: 101px;',
      high: 99
    },
    {
      on: false,
      color: 'background-color: rgba(230,0,26,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 74px;right: 70px;',
      style: 'top: 74px;right: 70px;',
      high: 94
    },
    {
      on: false,
      color: 'background-color: rgba(204,0,51,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 106px;right: 45px;',
      style: 'top: 106px;right: 45px;',
      high: 89
    },
    {
      on: false,
      color: 'background-color: rgba(179,0,77,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 141px;right: 25px;',
      style: 'top: 141px;right: 25px;',
      high: 84
    },
    {
      on: false,
      color: 'background-color: rgba(153,0,102,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 180px;right: 14px;',
      style: 'top: 180px;right: 14px;',
      high: 79
    },
    {
      on: false,
      color: 'background-color: rgba(128,0,128,.5); border-color: rgba(128,0,128,.5);',
      coordinates: 'top: 220px;right: 10px;',
      style: 'top: 220px;right: 10px;',
      high: 74
    },
    {
      on: false,
      color: 'background-color: rgba(102,0,153,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 260px;right: 14px;',
      style: 'top: 260px;right: 14px;',
      high: 69
    },
    {
      on: false,
      color: 'background-color: rgba(77,0,179,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 299px;right: 25px;',
      style: 'top: 299px;right: 25px;',
      high: 64
    },
    {
      on: false,
      color: 'background-color: rgba(51,0,204,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 334px;right: 45px;',
      style: 'top: 334px;right: 45px;',
      high: 59
    },
    {
      on: false,
      color: 'background-color: rgba(26,0,230,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 366px;right: 70px;',
      style: 'top: 366px;right: 70px;',
      high: 54
    },
    {
      on: false,
      color: 'background-color: rgba(0,0,255,.5); border-color: rgba(153,0,102,.5);',
      coordinates: 'top: 393px;right: 101px;',
      style: 'top: 393px;right: 101px;',
      high: 49
    }
  ];

  $scope.currentTemp = "00";
  var updateIndicator = function (temp) {
    console.log('in update indicator - temp: ', temp);
    var dots = $scope.indicatorDots;
    for (var i = 0; i < dots.length; i++) {
      if (dots[i].high <= temp) {
        dots[i].on = true;
        dots[i].style = dots[i].coordinates + dots[i].color;
        console.log("colored dot: ", dots[i]);
      } else {
        dots[i].on = false;
        dots[i].style = dots[i].coordinates;
        console.log("grey dot: ", dots[i]);
      }
    }
  };

  $interval(function () {

    thermostatService.getCurrentTemp().then(function (body, resp, err) {
      console.log('got response for', name);
      if (err) {
        console.log('rejecting', err);
      }
      else {
        console.log('accepted!');
        $scope.currentTemp = body.data.newValue;
        updateIndicator(body.data.newValue);
      }
    });
  }, 2000);
});
