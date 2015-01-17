var moment = require('moment');

module.exports = function(context) {

  setInterval(function() {
    if (!context.mode || context.mode.toLowerCase() == "schedule") {

      var now;
      if (context.date) {
        now = moment(context.date);
      } else {
        now = moment();
      }

      var day = now.format('dddd').toLowerCase();

      console.log('checking schedules for', day);

      var schedule = context.schedule[day];

      var found = false;
      for (var o in schedule.overrides) {
        var override = schedule.overrides[o];

        console.log('looking for', now.format('YYYY:MM:DD:') + override.start);
        start = moment(now.format('YYYY:MM:DD:') + override.start, 'YYYY:MM:DD:HH:mm');
        var stop = moment(now.format('YYYY:MM:DD:') + override.stop, 'YYYY:MM:DD:HH:mm');

        console.log('start', start.format(), now.format(), start.from(now));
        console.log('stop', stop.from(now))

        if (start.from(now).indexOf('ago') != -1 && stop.from(now).indexOf('in') != -1) {
          found = true;
          console.log('--------------we found the schedule we are on', override);
          context.temp.override = override.temp;
        }
      }

      if (!found) {
        context.temp.override = schedule.otherwise;
      }

    }

  }, 3000);

}
