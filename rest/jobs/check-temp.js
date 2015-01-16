var spawn = require('child_process').spawn;

module.exports = function(context) {

  var child = spawn('node', ['./input/printTemp.js']);

  child.stdout.on('data', function(data) {
    console.log('stdout:', data.toString('utf8'));
    if (!context.fake) {
      console.log('setting temperature', context.fake);
      context.temp.current = parseInt(data.toString('utf8'));
    }
  });

  child.stderr.on('data', function(data) {
    console.log('stderr:', data.toString('utf8'));
  });

  child.on('close', function(code) {
    console.log('child process exited with code ' + code);
  });

};
