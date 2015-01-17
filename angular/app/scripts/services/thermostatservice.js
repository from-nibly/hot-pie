'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.thermostatService
 * @description
 * # thermostatService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('thermostatService', function($http, config) {
    var host = config.getHost();
    this.getCurrentTemp = function() {
      return $http({
        method: "GET",
        url: "http://" + host + ":3000/temp/current"
      });
    };

    this.setCurrentTemp = function(temp) {
      return $http({
        method: "POST",
        url: "http://" + host + ":3000/temp/override/" + temp
      }).then(function(data) {
        console.log(data);
      })
    };

        this.getOverrideTemp = function() {
            return $http({
                method:"GET",
                url: "http://localhost:3000/temp/override"
            });
        }
  });
