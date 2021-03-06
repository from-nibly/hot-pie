var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  routes = require('./routes.js'),
  jobRunner = require('./job-runner.js'),
  fs = require('fs');



var server = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

server.use(morgan());
server.use(bodyParser());
server.use(methodOverride('_method'));
server.use(allowCrossDomain);

var context = {};
context.temp = {};
context.temp.current = 70;
context.fake = true;
context.mode = "schedule"
fs.readFile('./schedules/default.json', function(err, data) {
  context.schedule = JSON.parse(data);
});

jobRunner(context);

routes(server, context);

server.listen(3000, function() {
  console.log('server is up and running');
});
