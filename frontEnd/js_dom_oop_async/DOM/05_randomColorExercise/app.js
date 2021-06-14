const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const body = document.querySelector('body');
// or document.body directly

function generateRandomColor(){
  let r = Math.ceil(Math.random()*255);
  let g = Math.ceil(Math.random()*255);
  let b = Math.ceil(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', function(){
  let newColor = generateRandomColor();
  h1.innerText = newColor;
  body.style.backgroundColor = newColor;
});