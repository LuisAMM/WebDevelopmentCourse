const movies = [
  {
    title: 'Aliens',
    score: 90,
    year: 2000
  },
  {
    title: 'Titanic',
    score: 80,
    year: 2001
  },
  {
    title: 'Harry Potter',
    score: 45,
    year: 2002
  },
  {
    title: 'Aliens Return',
    score: 100,
    year: 2003
  },
  {
    title: 'Titanic fallout',
    score: 65,
    year: 2004

  },
  {
    title: 'Harry Potter 2',
    score: 62,
    year: 2005
  }
];

// const newMovies = movies.filter((movie)=>{
//   return movie.year > 2003; 
// });

// or!

// more compact, same result
// const newMovies = movies.filter((m) => m.year > 2003)
// if we want only the titles:
// const newTitles = newMovies.map((m) => m.title);

// we can do the same in only one line (when the chain it's too large we can break it in multiple lines )
const newTitles = movies
                        .filter((m) => m.year > 2003)
                        .map((m) => m.title);
console.log(newTitles)

// ========================================================================== //

// every => test a function and if all the elements of the array return true then every return true. false otherwise

if(movies.every((m) => m.year > 1999)){
  console.log('we only have 2000 and onwards movies');
}
else
{
  console.log('we have movies from every year')
}

const scores = [5,3,3,3];
console.log(scores.every((s)=>s > 2));

// ========================================================================== //

// some => similar to every, but returns true if any of the array elements pass the test function

console.log(scores.some((s)=> s === 5));
console.log(scores.some((s)=> s === 4));

console.log(movies.some((m) => movies.year > 2005))

// ========================================================================== //

// reduce
// executes a reducer function on each element of the array, resulting in a single value

const reducedValue = [4,5,6].reduce((accumulator, currentValue) => {
  console.log(`accumulator = ${accumulator} -> currentValue = ${currentValue}`)
  return accumulator + currentValue;
})

const minValue = [1.5,2,4,5,6,0.99].reduce((minV, currentV) => {
  return minV < currentV ? minV : currentV;
})

// we can specify an initial value for the accumulator parameter

const totalPrice = [4,5,6].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100)

// total price will be 115 bc the first value of accumulator was 100
console.log(reducedValue, minValue, totalPrice);


// ========================================================================== //
// arrow functions with the keyword this
// the keyword this inside of an arrow functions change it's behaviour. in this case it will refer to the same value of the keyword this in the scope of where the function was created.

const personCorrected = {
  fname: 'Luis',
  lname: 'Munoz',
  fullName: function (){
    return `${this.fname} ${this.lname}`
  },
  shoutName: function (){
    setTimeout( () => {
      // in this case the keyword this refer to the person object, because the arrow function will change the value of the keyword this to the value of the keyword this in the scope of where the function was created  
      console.log(this.fullName());
      console.log('from person corrected')
    }, 2500);
  }
}

const person = {
  fname: 'Luis',
  lname: 'Munoz',
  fullName: () => {
    // in this case the keyword this refer to the window object
    return `${this.fname} ${this.lname}`
  },
  shoutName: function (){
    setTimeout(function (){
      // in this case the keyword this refer to the windows object, because setTimeout it's a method from the window object. in this case make sense to use the arrow function. as showed below
      console.log('from person')
      console.log(this.fullName());
    }, 3000);
  }
}

console.log('//====================================//')
console.log(personCorrected.fullName())
console.log(personCorrected.shoutName())
console.log(person.fullName())
console.log(person.shoutName())
