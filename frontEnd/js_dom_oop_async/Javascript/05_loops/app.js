const animals = ["elephant", "dog", "cat"]
// for (let i = 0; i < animals.lenght; i++) {
//   console.log(animals[i]);
// }

// nested loops

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`\tj is: ${j}`);
//   }
// }

// while loop

// const SECRET = "BabyHippo"

// let guess = prompt('enter the secret code...');
// while(guess!==SECRET){
//   guess = prompt('enter the secret code...');
// }

// console.log("congrats")

// let input = prompt("hey! say something");
// while(true){
//   input = prompt(input);
//   if (input.toLowerCase() === "stop"){
//     console.log("ok")
//     break;
//   }
// }

// guessing game
// let guess = false
// let maxNumber = parseInt(prompt("Welcome! Enter your max number:"));

// while (!maxNumber) {
//   maxNumber = parseInt(prompt("Invalid, try again:"));
// }

// let counter = 0;
// let randomNumber = Math.ceil(Math.random() * maxNumber);
// let input = prompt(`Enter your first guess:`);

// while (guess !== true) {

//   counter++;
//   if (!parseInt(input)){
//     if(input === 'q'){
//       alert('ok, quitting')
//       break;
//     }
//     input = prompt("invalid input. Input must be a number, try again");
//   }
//   else if(parseInt(input) < randomNumber){
//     input = prompt("Too Low. Guess again:");
//   }
//   else if(parseInt(input) > randomNumber){
//     input = prompt("Too High. Guess again:");
//   }
//   else{
//     alert("congrats!")
//     alert(`it took you ${counter} guesses`)
//     guess = true;
//   }
// }

// for..of
// works with any iterable

const letters = ['a','b','c','d','e','f','g']

for(let letter of letters){
  console.log(letter);
}

const sittingChart = [['luis','sabrina','jose'],['tanja','whendy','luis'],['miguel','javier',' andres']]

for(let row of sittingChart){
  for(let student of row){
    console.log(student);
  }
}

// Iterating over objects
// they are not iterables

const testScores = {
  luis: 35,
  sabrina: 45,
  jose: 36,
  tanja: 55,
  whendy: 75,
  luis: 235,
  miguel: 1235,
  javier: 1235,
  andres: 115 
}

// ERRORRRRR

// for(let person of testScores){
//   console.log(person)
// }

// for objects literal we use for..in
// only give us the key
for(let person in testScores){
  console.log(`${person} scored ${testScores[person]}`)

}

// will return the values of the test scores in an array
Object.values(testScores)

let total = 0;
for(let score of Object.values(testScores)){
  total+=score;
}
console.log(total / Object.values(testScores).length)
// will return the keys of the test scores in an array
Object.keys(testScores)

// will return an array of [['key1',value1],...,['keyN',valueN]] of test scores
Object.entries(testScores)