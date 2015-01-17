module.exports = function(context) {

  var last = new Date();

  setInterval(function() {
    if (context.date) {
      context.date.setMinutes(context.date.getMinutes() + 10);
    }
  }, 1000);
};
