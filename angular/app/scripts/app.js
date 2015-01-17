'use strict';

/**
 * @ngdoc overview
 * @name hotPieApp
 * @description
 * # hotPieApp
 *
 * Main module of the application.
 */
angular
    .module('hotPieApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/thermostat");
        //
        // Now set up the states
        $stateProvider
            .state('thermostat', {
                url: "/thermostat",
                templateUrl: "/views/thermostat.html"
            })
            .state('settings', {
                url: "/settings",
                templateUrl: "/views/settings.html"
            })
            .state('schedule', {
                url: '/schedule',
                templateUrl: '/views/schedule.html'
            });
    });
