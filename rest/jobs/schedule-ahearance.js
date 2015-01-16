var moment = require('moment');

module.exports = function(context) {

  setInterval(function() {
    if (!context.mode || context.mode.toLowerCase() == "schedule") {

      console.log('checking schedules');

      if (!context.schedule) {
        context.schedule = require('../schedules/default.json');
      }

      var day = moment().format('dddd').toLowerCase();

      var schedule = context.schedule[day];

      var found = false;
      for (var o in schedule.overrides) {
        var override = schedule.overrides[o];
        var now = moment();
        var start = moment(override.start, 'HH:mm');
        var stop = moment(override.stop, 'HH:mm');

        if (start.fromNow().indexOf('ago') != -1 && stop.fromNow().indexOf('in') != -1) {
          found = true;
          console.log('we found the schedule we are on', override);
          context.temp.override = override.temp;
        }
      }

      if (!found) {
        context.temp.override = schedule.otherwise;
      }

    }

  }, 3000);

}
