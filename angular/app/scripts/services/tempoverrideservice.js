'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.tempOverrideService
 * @description
 * # tempOverrideService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('tempOverrideService', function ($http) {
       this.getTemp = function() {
           $http({
               method : "GET",
               url : "http://137.190.206.60:3000/schedules/default"
           }, function(err, resp, body) {
               console.log(err, resp, body);
           });
       };

        this.setTemp = function() {
            $http({
                method : "POST"
            })
        }
  });
