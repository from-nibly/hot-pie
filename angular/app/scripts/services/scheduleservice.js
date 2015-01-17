'use strict';

/**
 * @ngdoc service
 * @name hotPieApp.scheduleService
 * @description
 * # scheduleService
 * Service in the hotPieApp.
 */
angular.module('hotPieApp')
  .service('scheduleService', function($http, $q) {

    var cached = {};

    this.getSchedule = function(name) {
      var dfd = $q.defer();
      console.log('getting the schedule');
      console.log("http://localhost:3000/schedules/" + name);
      $http({
        method: "GET",
        url: "http://localhost:3000/schedules/" + name
      }).then(function(body, resp, err) {
        console.log('got response for', name, body.data);
        if (err) {
          console.log('rejecting', err);
          dfd.reject(err);
        } else {
          console.log('resolving');
          cached = body.data;
          dfd.resolve(body.data);
        }
        console.log(err, resp, body.data);
      });

      return dfd.promise;
    };

    //this is where the new code is.
    //let me know if this works.
    this.addBlock = function(day, obj) {
      console.log('day', day);
      console.log('cached', cached);
      console.log('cached day', cached[day]);
      cached[day].overrides.push(obj);
      $http({
        method: 'POST',
        url: 'http://localhost:3000/schedules/default',
        headers: {
          'Content-Type': 'application/json'
        },
        data: cached
      }).then(function() {
        console.log('we sent the data to the rest service');
      });
    }

    this.getMungedSchedule = function(name) {
      var dfd = $q.defer();

      console.log('munging data', name);

      this.getSchedule(name).then(function(obj) {
        console.log('got data ready to munge', obj);
        if (obj.sunday) {
          console.log('starting munge code');
          var count = 0;
          try {
            //munge code here
            var rtn = [];
            var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            for (var day in obj) {
              console.log('itteration ', day, obj[day]);
              var date = days.indexOf(day);
              for (var b in obj[day].overrides) {
                var block = obj[day].overrides[b];
                console.log('block', block);
                block.start
                var diff = date - new Date().getDay();
                var rtnDate = new Date().getDate() + diff;
                rtnDate = ("" + rtnDate).length > 1 ? rtnDate : "0" + rtnDate;
                var data = {
                  start: '2015-01-' + rtnDate + 'T' + block.start + ':00-07:00',
                  end: '2015-01-' + rtnDate + 'T' + block.stop + ':00-07:00',
                  // start: '2015-01-15T04:00:00',
                  // end: '2015-01-15T05:00:00',
                  id: new Number(count) + 0,
                  text: block.temp
                };
                console.log('pushing data', data);
                rtn.push(data);
                count += 1;
              }
            }
          } catch (ex) {
            console.log('exception', ex);
          }
          console.log('finishing munging with', rtn);
          dfd.resolve(rtn);
        } else {
          console.log('did not have sunday');
          dfd.reject(obj);
        }
      });
      return dfd.promise;
    };
  });
