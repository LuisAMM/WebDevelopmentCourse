// Default parameters

// old way
// function rollDie(numSides){
//   numSides = typeof numSides !== 'undefined' ? numSides : 6;
//   return Math.ceil(Math.random() * numSides)
// }

// new way (like python)
function rollDie(numSides = 6) {
  return Math.ceil(Math.random() * numSides)
}

console.log(rollDie())
console.log(rollDie())
console.log(rollDie())
console.log(rollDie(10))
console.log(rollDie(100))
console.log(rollDie(1000))
console.log(rollDie(25))

// ========================================================================== //
// spread with functions and arrays
const nums = [13, 1, 5, 4, 2, 5, 8, 85, 55, 5, 5, 41, 4, 45, 2, 3]

// Math.max() does no accept arrays as arguments

console.log(Math.max(nums))     //returns nan 
console.log(Math.max(...nums))  //returns 85
console.log(...'Hello');

const cats = ['michi', 'michu']
const dogs = ['sukky', 'olaf']

const allPets = [...cats, ...dogs, 'iguana']

// ========================================================================== //
// spread with objects

const feline = { legs: 4, family: 'feliade' };
const canine = { family: 'canidae', furry: true };
const dog = { ...canine, isPet: true };
const lion = { ...feline, genus: 'Panthera' };
//in this case the catDog has a family of canidae because the canine object was the last one and override the cat object
const catDog = { ...feline, ...canine };

console.log(feline)
console.log(canine)
console.log(dog)
console.log(lion)
console.log(catDog)

// ========================================================================== //
// spread an array in an object

const arrayInObj = { ...[10, 20, 30] }
//array in obj will use the index of the array as key and the value of the array as value
console.log(arrayInObj)

// ========================================================================== //
// argument object -> contains all the arguments from a function, it's implicit inside every function. it has a length property but it does not have a any array method. lastly it's not available inside arrow functions

function sumAll() {
  let total = 0;
  // we cannot use for..of or reduce in order to do this operation
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4, 55, 2, 32, 323, 2, 3, 2, 3))

// ========================================================================== //
// rest-> use the same syntax as spread but in a different context , mean something different
// in order to solve the problems the arguments has we use rest

function sumAll_rest(...nums) {
  return nums.reduce((total, value) => total += value);
}

console.log(sumAll_rest(1, 2, 3, 4, 5))

// we can also used to store the rest of the variables that we don't want to single out
function raceResult(first, second, ...everyoneElse) {
  console.log(`Gold to ${first}\nSilver to ${second}\nThanks for participating ${everyoneElse}`)
}

raceResult('l', 's', 'j', 'j', 'l');

// ========================================================================== //
// destructuring -> it's a short syntax to 'unpack' values from an array and properties from objects into distinct variables

const scores = [99, 85, 74, 22, 10] //sorted elements

// this works but there is a shorter and more compact way
// const highScore = scores[0]
// const secondScore = scores[1]

// in this case highScore will contain the first element and secondScore the second. The variable declaration must contain [] if we are extracting values from an array
// const [highScore, secondScore] = scores

//we can also extract the rest of the elements together in another variable with:
const [highScore, secondScore, ...everyoneElse] = scores
console.log(highScore, secondScore, everyoneElse)

// ========================================================================== //
// destructuring an object -> same as before but with objects and another syntaxis

const runner = [
  {
    firstName: 'Luis',
    lastName: 'Munoz',
    title: 'Gordo'
  }, 
  {
    firstName: 'Alberto',
    lastName: 'Munoz',
    country: 'Venezuela',
    title: 'Gordo2',
    death: 1995
  }
]

// in this case it will extract the firstName, lastName and country from the object and it will store the value in the variable (just to be clear, runner remain the same).
// The order does not matter but the name of the variable must be the same.

// const {country, firstName, lastName} = runner
// console.log(country,firstName,lastName)

// in case we want to rename the variable then:

const { country: originCountry, firstName: fName, lastName: lName } = runner[0]

console.log(originCountry, fName, lName)

// we can also give a default value to a variable in case the object don't have that property

const { country:countryR1='No Country', firstName:fNameR1, death:deathR1 = 'N/A' } = runner[0]
const { country:countryR2, firstName:fNameR2, death:deathR2 = 'N/A' } = runner[1]

console.log(`the runner ${fNameR1} comming from ${countryR1}`)

// ========================================================================== //
// destructuring param -> we can destructure an object at the input of a function if we don't need the rest of the parameters with:

function fullName({lastName:lName, firstName:fName}){
  return `${fName} ${lName}`;
}

console.log(fullName(runner[0]))


// if we want to implement fullName for all the elements then:

const fullNameRunners = runner.map(({firstName, lastName}) => {
  return `${firstName} ${lastName}`;
})

console.log(fullNameRunners)