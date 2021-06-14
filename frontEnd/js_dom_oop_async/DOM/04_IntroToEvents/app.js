const button2 = document.querySelector('#v2');

// better approach than inline events on the html
// we can write the function appart

button2.onclick = function(){
  console.log('You clicked me!');
  console.log('It hope it work');
}

// we can have multiple events with the same button

function scream(){
  console.log('Ahhhh!');
  console.log('Stop touching me');
}

// this event execute scream when we enter in the button (without click it)
button2.onmouseenter = scream;

// ========================================================================== //
// addEventListener(eventName,function)
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function(){
  alert('clicked!');
})

// ========================================================================== //
// differences between addEventListener and the property (onclick, ondblclick,.....)

function twist(){
  console.log('twist!'.toUpperCase());
}

function shout(){
  console.log('shout!'.toUpperCase());
}
// if we want to apply 2 functions to this event through the property onclick then
const btn4 = document.querySelector('#tas');
// btn4.onclick = twist;
// btn4.onclick = shout;
// only shout() executes when we click the button
// this happen because shout override twist in the onclick property, just as we override a color 

// in this case it's better to use addEventListener
// it will add the shout function to the twist function
btn4.addEventListener('click', twist)
// if we want to execute shout only the first time that the button it's clicked we can add the once argument 
btn4.addEventListener('click', shout, {once: true})