const btn = document.querySelector('button')
const p = document.querySelector('p')

// as it is both events will be fired when we click 
// the button, in order to solve this we must use
// e.stopPropagation on the button. This way when we 
// click the button the only trigged event will be 
// the button

// btn.addEventListener('click', function(e){
//   console.log('btn fired!');
// })

// p.addEventListener('click', function(e){
//   console.log('p fired!');
// })

btn.addEventListener('click', function(e){
  e.stopPropagation()
  console.log('btn fired!');
})

p.addEventListener('click', function(e){
  console.log('p fired!');
})
