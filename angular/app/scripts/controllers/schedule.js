'use strict';

/**
 * @ngdoc function
 * @name hotPieApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the hotPieApp
 */
angular.module('hotPieApp')
    .controller('ScheduleCtrl', function ($scope, $http, scheduleService) {
        console.log('stuff');
        var dp = new DayPilot.Calendar("dp");

        // behavior and appearance
        dp.cssClassPrefix = "calendar_white";

        // view
        var date = new Date();
        var day = date.getFullYear() + '-' + parseInt(date.getMonth()) + 1 + '-' + parseInt(date.getDate() - date.getDay());
        console.log(day);
        dp.startDate = day;  // or just dp.startDate = "2013-03-25";

        dp.days = 7;

//        var e = new DayPilot.Event({
//            start: new DayPilot.Date("2015-01-16T01:00:00"),
//            end: new DayPilot.Date("2015-01-16T012:00:00"),
//            id: DayPilot.guid(),
//            text: "Event"
//        });
//        dp.events.add(e);



        dp.onTimeRangeSelected = function (args) {
            console.log('event fired');
            var temp = prompt("Temperature", "72");
            console.log('temp', temp);
            if (!temp) return;
            var e = new DayPilot.Event({
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                resource: args.resource,
                text: temp

            });

            var dayNumber = args.start.d.getDay();

            var dayOfWeek = ["sunday", "monday", "tuesday", "wednessday", "thursday", "friday", "saturday"];
            console.log(dayOfWeek[dayNumber]);

            var startHour = args.start.d.getHours();
            var startMinute = args.start.d.getMinutes();

            var startTime = startHour + ":" + startMinute;

            var endHour = args.start.d.getHours();
            var endMinute = args.start.d.getMinutes();

            var endTime = endHour + ":" + endMinute;


            scheduleService.addBlock(dayOfWeek[dayNumber], {
                "start": startTime,
                "stop": endTime,
                "temp": temp
            });

            dp.events.add(e);
            dp.clearSelection();
            dp.message("Created");

        };


        dp.init();

        scheduleService.getMungedSchedule("default").then(function(data) {
            console.log('trying to shove crap into the callendar', data);
            dp.events.list = data;
            dp.update();
        });
    });