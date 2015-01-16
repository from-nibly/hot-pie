var fs = require('fs');

function JobRunner(context) {

  console.log('context', context);

  var jobs = [];

  fs.readdir('./jobs', function(err, files) {

    for (var file in files) {
      var f = files[file];

      var job = require('./jobs/' + f);

      jobs.push(job);

      job(context);

    }

    console.log('loaded jobs', files);

  });

}

module.exports = JobRunner;
