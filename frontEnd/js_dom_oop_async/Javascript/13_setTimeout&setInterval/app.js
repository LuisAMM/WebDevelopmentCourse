// in other languages

// print "hello..."
// pause(3000)
// print "are you still there"

// wait 3 seconds to do the second console.log
console.log("Hello...")

setTimeout(() => {
  console.log("Are you still there?");
}, 3000)

// If we do a console.log here will run immediately. Before the second console.log
console.log('Goodbye!')

// ========================================================================== //

// repeat the code indefinitely every 3 seconds
// with the return value we can stop the interval
const pid = setInterval(() => {
  console.log(Math.random());
}, 3000)

setTimeout(() => {
  // stop the setInterval process
  clearInterval(pid);
}, 10000)
