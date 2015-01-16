module.exports = function(server, context) {


  server.post('/temp/override/:value', function(req, resp, next) {

    context.temp.override = req.params.value;

    resp.status(200).jsonp({
      status: 'OK',
      newValue: context.temp.override
    });

    next();
  });

  server.get('/temp/override', function(req, resp, next) {
    resp.status(200).jsonp({
      status: 'OK',
      newValue: context.temp.override
    });

    next();
  });

};
