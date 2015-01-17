var cli = require('cli'),
  request = require('request');

cli.parse({
  fakeTemp: ['t', 'turn on or off fake temp fake tempurature'],
  fakeDate: ['d', 'turn on or off fake date']
});

cli.main(function(args, options) {
  console.log('worked');

  if (options.fakeTemp) {
    console.log('faketemp');

    request.post({
      url: "http://localhost:3000/fake/true"
    }, function(err, resp, body) {
      console.log(body);
    });
  } else {
    console.log('faketemp');

    request.post({
      url: "http://localhost:3000/fake/false"
    }, function(err, resp, body) {
      console.log(body);
    });
  }

  if (options.fakeDate) {
    console.log('fakeDate');
  }

});
