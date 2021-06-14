// forEach method for arrays it's recently replaced with for of
// accepts a function as a parameter and each of the values in the array goes through the function
const num = [1,2,3,4,3,6,7,8];
const f = function(elem){
  console.log(elem);
}
num.forEach(f);

// ========================================================================== //

const movies = [
  {
    title: 'Aliens',
    score: 90
  },
  {
    title:'Titanic',
    score:80

  },
  {
    title:'Harry Potter',
    score:45
  }
];

movies.forEach(function(movie){
  console.log(`${movie.title} has an score of ${movie.score}`);
});

// ========================================================================== //

// Map -> similar to forEach, receive a function as a parameter and pass all the elements of an array through a function
// the difference is that Map return a new array with the return values of the function

// const num = [1,2,3];
// using num declaration above
const doubles = num.map(function(n){
  return n*2;
})

console.log(`nums * 2 = ${doubles}`)
 
const titles = movies.map(function(mov){
  return mov.title.toUpperCase();
});

console.log(`the titles in upper case are ${titles}`);

// ========================================================================== //
// Arrow functions => compact way to write a function

const add = (x,y) =>{
  return x+y;
}

const logSomething = () => {
  console.log("You need empty ( ) in the declaration and the execution");
}

const rolldie = () => {
  return Math.ceil(Math.random() * 6);
}

console.log(rolldie());
logSomething();
console.log(add(3,7));

const triple = num.map((n) =>{
  return n*3;
})

console.log(triple);

// ========================================================================== //
// implicit return
// Replacing the {} that wrap up the function with () will return the line without explicitly set it.
// works only with 1 line functions

const implicitReturnFunction = () => (
  Math.ceil(Math.random() * 3)
)

console.log(implicitReturnFunction())
// we can declare it without the () if we put it in the same line
const addImpRet = (a,b) => a + b

const isEven = (num) => num % 2 === 0
// ========================================================================== //

// full function
// const newMovies = movies.map(function (movie){
//   return `${movie.title} - ${movie.score / 10}`
// })

// arrow function 
const newMovies = movies.map((movie) => (
  `${movie.title} - ${movie.score / 10}`
));

console.log(newMovies)