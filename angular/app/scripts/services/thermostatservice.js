'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.thermostatService
 * @description
 * # thermostatService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('thermostatService', function($http) {

    this.getCurrentTemp = function(name) {
      return $http({
        method: "GET",
        url: "http://localhost:3000/temp/current"
      });
    };

    this.setCurrentTemp = function(temp) {
      return $http({
        method: "POST",
        url: "http://localhost:3000/temp/override/" + temp
      }).then(function(data) {
        console.log(data);
      })
    }
  });
