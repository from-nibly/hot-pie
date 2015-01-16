module.exports = function(context) {

  setInterval(function() {
    console.log('changing temp', context.temp.current);
    console.log('override', context.temp.override);
    if (context.temp.current > context.temp.override) {
      console.log('turring on ac', context.temp.current);
      context.temp.current -= 1;
    } else if (context.temp.current < context.temp.override) {
      console.log('turning on heater', context.fake, context.temp.current);
      if (context.fake) {
        context.temp.current += 1;
      }
      console.log('new heater', context.temp.current);
    }
  }, 3000);


};
