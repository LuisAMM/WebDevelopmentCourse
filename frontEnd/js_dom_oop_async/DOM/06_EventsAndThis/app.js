function generateRandomColor(){
  let r = Math.ceil(Math.random()*255);
  let g = Math.ceil(Math.random()*255);
  let b = Math.ceil(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`;
}

const btns = document.querySelectorAll('button');
for(let btn of btns){
  btn.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');
for(let h1 of h1s){
  h1.addEventListener('click', colorize);
}

// in order to avoid duplication we will write a separate function
function colorize(){
  // we need to use the keyword this to have access to the element that has been clicked
  // when the keyword this it's inside a callback from an eventListener it(this) will refer to the element that it's being clicked
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}