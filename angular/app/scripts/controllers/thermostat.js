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
        color: 'gray',
        style: 'top: 0;right: 0;',
        range: [99, 94]
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 220px;right: 10px;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      },
      {
        on: false,
        color: 'gray',
        style: 'top: 0;right: 0;'
      }
    ];


    $scope.currentTemp = "00";

        $interval(function(){
            thermostatService.getCurrentTemp().then(function(body, resp, err) {
                console.log('got response for', name);
                if(err) {
                    console.log('rejecting', err);
                }
                else {
                    console.log(body.data.newValue);
                    debugger;
                    $scope.currentTemp = body.data.newValue;
                }
            });
        },2000);



  });
