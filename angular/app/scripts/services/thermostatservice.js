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
        var server = "http://137.190.207.214:3000";
        this.getCurrentTemp = function (name) {
            return $http({
                method: "GET",
                url: server + "/temp/current"
            });
        };

        this.setCurrentTemp = function (temp) {

            return $http({
                method: "POST",
                url: server + "/temp/override/" + temp

            }).then(function (data) {
                console.log(data);
            })
        }
    });
