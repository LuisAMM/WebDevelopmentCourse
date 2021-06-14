
// only one of the two will happen, if we want the orange to happen after the red we must do the math a put 2000 instead of 1000

// setTimeout(() => {
//   document.body.style.backgroundColor = 'red';
// }, 1000);
// setTimeout(() => {
//   document.body.style.backgroundColor = 'orange';
// }, 1000);

// we can solve this with

// setTimeout(() => {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'green';
//       setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//           document.body.style.backgroundColor = 'palevioletred';
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);


// it's a little long but we can compress it with functions

function delayedColorNext(nextColor, delay, doNext){
  setTimeout(() => {
    document.body.style.backgroundColor = nextColor;
    doNext && doNext()
  }, delay);
}

delayedColorNext('red', 1000, ()=>{
  delayedColorNext('orange', 1000, ()=>{
    delayedColorNext('green', 1000, ()=>{
      delayedColorNext('blue', 1000, ()=>{
        delayedColorNext('palevioletred', 1000);
      })
    })
  })
})

// It's better but still it will nest really deep if 
// we want more colors and if we had a second function 
// it will be even worse, this is called callbackHell 
// it's better explained in the Promises intro folder