var page = require('webpage').create(),
  system = require('system'),
  address = system.args[1];

if (system.args.length === 1){
  console.log('Usage: loadsuccess.js <some URL>');
  phantom.exit();
}


page.onResourceReceived = function(response){
    if (response.status == 200 && response.stage == 'end') {
        t = Date.now() - t;
        console.log('Aww, Yeah. Locked and loaded ' + response.url + ' in ' + t + ' msec.');
        phantom.exit();
    } else {
        page.open(address);
    }
}

t = Date.now();
console.log('Time to get 24th century on his ass..');
page.open(address);
