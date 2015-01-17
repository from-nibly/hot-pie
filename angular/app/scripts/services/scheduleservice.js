'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.scheduleService
 * @description
 * # scheduleService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
    .service('scheduleService', function ($http, $q) {

        var cached = {};

        this.getSchedule = function(name) {
            var dfd = $q.defer();
            console.log('getting the schedule');
            console.log("http://137.190.207.214:3000/schedules/" + name);
            $http({
                method : "GET",
                url : "http://137.190.207.214:3000/schedules/" + name
            }).then(function(body, resp, err) {
                console.log('got response for', name);
                if(err) {
                    console.log('rejecting', err);
                    dfd.reject(err);
                }
                else {
                    console.log('resolving');
                    cached = body.data;
                    dfd.resolve(body.data);
                }
                console.log(err, resp, body);
            });

            return dfd.promise;
        };


        //this is where the new code is.
        //let me know if this works.
        this.addBlock = function(day, obj) {
            cached[day].overrides.push(obj);
            $http({
                method: 'POST',
                url : 'http://137.190.207.214:3000/schedules/default',
                body : JSON.stringify(cached)
            }).then(function() {
                console.log('we sent the data to the rest service');
            });
        };

        this.getMungedSchedule = function(name) {
            var dfd = $q.defer();

            console.log('munging data');

            this.getSchedule(name).then(function(obj) {
                console.log('got data ready to munge', obj);
                if(obj.sunday) {
                    console.log('starting munge code');
                    var count = 0;
                    try {
                        //munge code here
                        var rtn = [];
                        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                        for (var day in obj) {
                            var date = days.indexOf(day);
                            for (var b in obj[day].overrides) {
                                var block = obj[day].overrides[b];
                                var diff = date - new Date().getDay();
                                var rtnDate = new Date().getDate() + diff;
                                rtn.push({
                                    start: '2014-1-' + rtnDate + 'T' + block.start + ':00',
                                    end: '2014-1-' + rtnDate + 'T' + block.stop + ':00',
                                    id: new Number(count) + 0,
                                    text: block.temp
                                });
                                count+= 1;
                            }
                        }
                    }
                    catch(ex) {
                        console.log('exception', ex);
                    }
                    dfd.resolve(rtn);
                    console.log(rtn);
                }
                else {
                    console.log('did not have sunday');
                    dfd.reject(obj);
                }
            });

            return dfd.promise;
        };
    });