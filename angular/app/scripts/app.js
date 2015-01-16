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
    $urlRouterProvider.otherwise("/app/thermostat");
    //
    // Now set up the states
    $stateProvider
      .state('app', {
        abstract: true,
        url: "/app",
        templateUrl: "/app/index.html"
      })
      .state('app.thermostat', {
        url: "/thermostat",
        templateUrl: "/app/views/thermostat.html"
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
      })
      .state('state2.list', {
        url: "/list",
        templateUrl: "partials/state2.list.html"
      });
  });
