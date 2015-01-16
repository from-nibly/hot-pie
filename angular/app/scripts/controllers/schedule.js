'use strict';

/**
 * @ngdoc function
 * @name hotPieApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the hotPieApp
 */
angular.module('hotPieApp')
    .controller('ScheduleCtrl', function ($scope) {
        console.log('testing 123');

        var dp = new DayPilot.Calendar("dp");

        // behavior and appearance
        dp.cssClassPrefix = "calendar_white";

        // view
        dp.startDate = "2013-03-25";  // or just dp.startDate = "2013-03-25";
        dp.days = 1;

        var e = new DayPilot.Event({
            start: new DayPilot.Date("2013-03-25T00:00:00"),
            end: new DayPilot.Date("2013-03-27T00:00:00"),
            id: DayPilot.guid(),
            text: "Event"
        });
        dp.events.add(e);
        dp.init();

    });
