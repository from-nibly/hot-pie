var fs = require('fs');

module.exports = function(server, context) {


  server.post('/temp/override/:value', function(req, resp, next) {

    context.temp.override = req.params.value;
    context.mode = "override";

    resp.status(200).jsonp({
      status: 'OK',
      newValue: context.temp.override
    });

    next();
  });

  server.post('/mode/:value', function(req, resp, next) {

    context.mode = resp.params.value;

    resp.status(200).jsonp({
      status: 'OK',
    });

  });

  server.get('/mode', function(req, resp, next) {

    resp.status(200).jsonp({
      status: 'OK',
      value: context.mode
    });

  });

  server.get('/temp/override', function(req, resp, next) {
    resp.status(200).jsonp({
      status: 'OK',
      newValue: context.temp.override
    });

    next();
  });

  server.get('/temp/current', function(req, resp, next) {
    resp.status(200).jsonp({
      status: 'OK',
      newValue: context.temp.current
    });
  });

  server.post('/temp/current/:value', function(req, resp, next) {
    context.temp.current = parseInt(req.params.value);

    resp.status(200).jsonp({
      status: 'OK'
    });

  });

  server.post('/fake', function(req, resp, next) {
    context.fake = !context.fake;
    resp.status(200).jsonp({
      status: 'OK'
    });
  });

  var days = ['sunday', 'monday', 'tuesday', 'wednessday', 'thursday', 'friday', 'saturday'];

  server.post('/schedule/:name', function(req, resp, next) {

    context.schedule = require('./schedules/' + req.params.name + '.json');
    context.schedule.name = req.resp.name;
    resp.status(200).jsonp({
      status: 'OK'
    });

  });

  server.get('/schedule', function(req, resp, next) {

    resp.status(200).jsonp({
      status: 'OK',
      value: context.schedule.name
    });

  });

  server.post('/schedules/:name', function(req, resp, next) {

    var schedule = req.body;
    var name = req.params.name;

    for (var day in days) {
      var d = days[day];
      if (!schedule[d]) {
        schedule[d] = {
          overrides: [],
          otherwise: 72
        };
      }
    }

    fs.writeFile('schedules/' + name + '.json', JSON.stringify(schedule, null, 2), function(err) {
      if (err) {
        resp.status(500).jsonp({
          status: 'OK'
        });
      } else {
        resp.status(200).jsonp({
          status: 'OK'
        });
      }
    });

  });

  server.get('/schedules/:name', function(req, resp, next) {

    var name = req.params.name;

    resp.status(200).jsonp(context.schedule);

  });

};
