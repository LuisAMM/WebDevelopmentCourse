const input = document.querySelector('input');

// will be triggered when we modify the input and leave the input
input.addEventListener('change', function(e){
  console.log('Fired!')
})

const h1 = document.querySelector('h1');

// will be triggered when we modify the input (even without leaving it)
input.addEventListener('input', function(e){
  h1.innerText = input.value
})