'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.config
 * @description
 * # config
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('config', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var host = '';
    this.getHost = function() {
      return host || 'localhost';
    }
  });
