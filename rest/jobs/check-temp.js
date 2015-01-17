var spawn = require('child_process').spawn;

module.exports = function(context) {

  var child = spawn('node', ['./input/printTemp.js']);

  child.stdout.on('data', function(data) {
    var temp = parseInt(data.toString('utf8')) * 1.8 + 32;
    console.log('stdout:', data.toString('utf8'));
    console.log('---------------current temp', temp);
    if (!context.fake) {
      console.log('setting temperature', context.fake);
      context.temp.current = temp;
    }
  });

  child.stderr.on('data', function(data) {
    console.log('stderr:', data.toString('utf8'));
  });

  child.on('close', function(code) {
    console.log('child process exited with code ' + code);
  });

};
