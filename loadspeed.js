var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];
console.log('Undercover pursuit in progress... Baby');
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('Damn, I tried but this happened: ' + status);
  } else {
    t = Date.now() - t;
    console.log('Ohhh, yeahhhh. Loaded in: ' + t + ' msec.');
  }
  phantom.exit();
});
