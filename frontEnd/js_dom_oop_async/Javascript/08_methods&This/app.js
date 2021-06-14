// ========================================================================== //
// methods
// functions inside an object we call them with . after the name of the object
// all methods are function but not all functions are methods

const myMath = {
  PI: 3.14159,
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  }
}

console.log(myMath.PI)
console.log(myMath.multiply(3, 5))
console.log(myMath.divide(3, 5))
console.log(myMath.square(3))

// or we could also (not so commonly)

console.log(myMath['square'](4))

// we can also add functions to an object without the function keyword
// shorthand

const objectTest = {
  blah: 'hi',
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}

console.log(objectTest.multiply(2, 3))

// ========================================================================== //
// This keyword
// typically used inside a method (inside an object) to access elements of the object
const cat = {
  name: 'pet',
  color: 'grey',
  breed: 'scottish fold',
  meow(){
    console.log('This is ', this)
    // console.log(`meow meow meow ${color}`); //throws an error because color does not exist.
    console.log(`${this.name} it's ${this.color} and says meow `);
  }
}

cat.meow();
const copy = cat.meow;

// if I copy the meow function in a different variable the keyword this will refer to the windows object.

// the window object contains all of the functions that we usually use, we will learn more about it later

// if a function exist on it's own then it's added to the window object

copy();

console.log(this)

// ========================================================================== //

