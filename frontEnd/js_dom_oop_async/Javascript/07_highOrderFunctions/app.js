// does not work due to the scope of the function
// the variable only exist inside the funcion

// function collectEggs(){
//   let totalEggs = 6;         //FUNCTION SCOPE
// }

// collectEggs();
// console.log(totalEggs)

// ========================================================================== //

// works but the idea of a function modifying global variables it's not a good idea

// let totalEggs = 0;

// function collectEggs(){
//   totalEggs = 6;             //FUNCTION SCOPE
// }

// console.log(totalEggs)
// collectEggs()
// console.log(totalEggs)

// ========================================================================== //

// this will give an error because msg and x only exist inside the if. the same happens with variables declared inside a loop. 

// let radius = 8;
// if (radius > 0) {
//   let msg = 'abc';           //BLOCK SCOPE
//   const x = 15;
// }

// console.log(x)
// console.log(msg);

// ========================================================================== //

// everything will run until we arrive to cryForHelp() outside bankRobbery(), Javascript will not recognize it. But it will recognize the cryForHelp() inside bankRobbery()

// function bankRobbery(){
//   const heroes = ['Spiderman', 'Wolverine', 'Black Panther'];  //heroes are accesible for any function inside bankRobbery()
//   function cryForHelp(){
//     let color = 'purple';        // color it's not accessible from bankRoberry()
//     for(let hero of heroes){
//       console.log(`PLEASE HELP US ${hero.toUpperCase()}`);   // LEXICAL SCOPE
//     }
//   }
//   cryForHelp();
// }

// bankRobbery();
// cryForHelp();

// ========================================================================== //

// function expression

// regular way to declare a function

// function add(x,y){
//   return x+y;
// }

// we can also declare a function like this
const add = function (x, y) {
  return x + y
};

// we can use the add function the same way as before

console.log(add(1, 2));

// ========================================================================== //

// higher order functions
// functions that accept other functions as arguments

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     console.log(f());
//   }
// }

// let greet = function () { console.log('Hi!') }

// callTwice(greet); //We need to pass the function without parenthesis () because inside of callTwice will be executed

// callTenTimes(greet);

// ========================================================================== //

// functions that return functions

// function makeMysteryFunc(){
//   const rand = Math.random();
//   if(rand > 0.5){
//     return function(){
//       console.log('Congrats! I am a good function');
//     }
//   }
//   else{
//     return function(){
//       alert('You have been infected');
//       alert('Stop trying to close this window');
//       alert('Stop trying to close this window');
//       alert('Stop trying to close this window');
//       alert('Stop trying to close this window');
//       alert('Stop trying to close this window');
//       alert('Stop trying to close this window');
//     }
//   }
// }

// const mystery = makeMysteryFunc();
// mystery()


// makeBetweenFunc(5,10) =>should return a function that check if a value it's between min and max (5-10)

function makeBetweenFunc(min,max){
  return function(number){
    return number >= min && number <= max
  }
}

const isChild = makeBetweenFunc(0,17)
const isAdult = makeBetweenFunc(18,64)
const isSenior = makeBetweenFunc(65,100)

console.log(`isChild(4) = ${isChild(4)}`)
console.log(`isAdult(54) = ${isAdult(54)}`)
console.log(`isSenior(35) = ${isSenior(35)}`)


