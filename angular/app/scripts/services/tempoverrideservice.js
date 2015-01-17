'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.tempOverrideService
 * @description
 * # tempOverrideService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('tempOverrideService', function($http, $timeout) {

    var update;

    this.getTemp = function() {
      $http({
        method: "GET",
        url: "localhost:3000/temp/override/"
      }).then(function(data) {
        console.log(data);
      }, function(err) {
        console.log(err);
      });
    };

    this.setTemp = function() {
      if (update) {
        $timeout.cancel(update);
      }
      update = $timeout(function() {
        $http({
          method: "POST",
          url: "localhost:3000/temp/override/" + value
        }).then(function(data) {
          console.log(data);
        }, function(err) {
          console.log(err);
        });
      }, 200);

    }


  });
