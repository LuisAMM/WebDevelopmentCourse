const button = document.querySelector('#btn1');
// e contains information regarding the event
// it's often used with the keyboard event
button.addEventListener('click', function (e) {
  console.log(e);
})

const keyup = document.querySelector('input[placeholder="keyup"]');
const keydown = document.querySelector('input[placeholder="keydown"]');

// keydown its an event that occur when a key 
// of the keyboard it's pressed e contains info
//  regarding the event, including the key pressed

keydown.addEventListener('keydown', function (e) {
  console.log(e);
  // if we prioritize position we use code
  console.log(e.code);
  // if we prioritize the value then we use key 
  console.log(e.key);
})

// keyup will call the event each time a key it's released

keyup.addEventListener('keyup', function (e) {
  console.log(e);
  // if we prioritize position we use code
  console.log(e.code);
  // if we prioritize the value then we use key 
  console.log(e.key);
})

// we can track the keys pressed on the current website with

window.addEventListener('keyup', function (e) {
  switch (e.code) {
    case 'ArrowUp':
      console.log('Up!');
      break;
    case 'ArrowDown':
      console.log('Down!');
      break;
    case 'ArrowLeft':
      console.log('Left!');
      break;
    case 'ArrowRight':
      console.log('Right!');
      break;
  }
})