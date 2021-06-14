const math = require('./math')
// will look into the shelter folder an index file that will explain 
// to node what it's returned from the folder
const pets = require('./shelter')

console.log(math.PI)
console.log(math.add(2,2))
console.log(math.square(1))
console.log(pets)

// we didn't export divide but it's defined in the math.js file
// we will get an error
try{
  console.log(math.divide(1,2))
}
catch(err){
  console.log(`math.divide was not added to module.export`)
  console.log(`that's why the catch it's fired! ${err}`)
}

// we can also use destructuring to extract only certain values or functions
// const {add, PI} = require('./math)
// console.log(PI)
// console.log(add(2,2))
