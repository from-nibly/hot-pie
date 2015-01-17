'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.dateService
 * @description
 * # dateService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('dateService', function($q, $http) {
    this.getDate = function() {
      var dfd = $q.defer();

      $http({
        url: 'http://localhost:3000/date',
        method: "GET"
      }).success(function(resp, status, headers, config) {
        if (status < 300) {
          console.log(resp.value);
          dfd.resolve(resp.value);
        } else {
          console.log('failed to get date');
          dfd.reject(status);
        }
      });

      return dfd.promise;
    };
  });
