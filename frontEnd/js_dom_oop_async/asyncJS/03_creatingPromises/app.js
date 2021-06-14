const fakeRequest = (url) => {
  // resolve and reject can have any name
  return new Promise((resolve, reject) => {
    // resolve(); if I call the resolve function it will set the promise as resolved
    // reject(); if I call the reject function it will set the promise as rejected
    // and if any of the two functions are called the promise will be pending
    const rand = Math.random()
    setTimeout(() => {
      if (rand < 0.7) {
        resolve('FAKE DATA')
      }
      else {
        reject('Request error')
      }
      resolve(); //After a second the promise will be resolved
    }, 1000);
  })
}

fakeRequest('perros.com/1')
  .then((res) => {
    console.log('it worked, your data is: ' + res)
  })
  .catch((error) => {
    console.log('it did not work: ' + error)
  })

// ========================================================================== //
// if we do this with callbacks instead of promises it will be huge
const changeDelayedColor = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay)
  })
}

// we can also use implicit return
// changeDelayedColor('red', 1000)
//   .then(() => {
//     return changeDelayedColor('yellow', 1000)
//   })
//   .then(() => {
//     return changeDelayedColor('orange', 1000)
//   })
//   .then(() => {
//     return changeDelayedColor('blue', 1000)
//   })
//   .then(() => {
//     return changeDelayedColor('green', 1000)
//   })

changeDelayedColor('red', 1000)
  .then(() => changeDelayedColor('yellow', 1000))
  .then(() => changeDelayedColor('orange', 1000))
  .then(() => changeDelayedColor('blue', 1000))
  .then(() => changeDelayedColor('green', 1000))

