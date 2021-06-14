let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;
let die6 = Math.floor(Math.random() * 6) + 1;

// best 

function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}

die1 = rollDice();
die2 = rollDice();
die3 = rollDice();
die4 = rollDice();
die5 = rollDice();
die6 = rollDice();

// Another example

function singSong(){
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

singSong()

// Arguments, input of a function
function greet(person){
  console.log(`Hi, ${person}!`);
}

greet('Luis');

// multiple arguments

function addition(elem1, elem2){
  console.log(elem1+elem2);
}

addition(1,2);

function repeat(content, times){
  let result = '';
  for(let i = 0; i < times; i++){
    result += content;
  }
  console.log(result)
}

// return keyword

function add(x,y){
  return x+y;
}

let sum = add(13,22);
console.log(add(add(12,1),13))
