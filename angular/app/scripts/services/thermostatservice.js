'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.thermostatService
 * @description
 * # thermostatService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('thermostatService', function ($http) {
    this.getCurrentTemp = function() {
        return $http({
            method : "GET",
            url : "http://137.190.207.214:3000/temp/current" + name
        });
    }
  });
