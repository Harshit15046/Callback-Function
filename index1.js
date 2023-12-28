// Callback function to be executed after the timeout
function myCallback() {
    console.log('Callback function executed after timeout');
  }
  
  // Using setTimeout with a callback function
  setTimeout(myCallback, 2000); // The callback function will be executed after a 2000ms (2 seconds) delay

  // Using an anonymous function as a callback
setTimeout(function() {
  console.log('Callback function executed after timeout');
}, 4000);

  