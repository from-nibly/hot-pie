module.exports = function(context) {

  setInterval(function() {

    if (!context.temp.current) {
      console.log('checking current temp');
      context.temp.current = 75;
    }

  }, 3000);

};
