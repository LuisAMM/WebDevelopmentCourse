// class Cat{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   eat(){
//     return `${this.name} is eating!`
//   }
//   meow(){
//     return `MEOW!`
//   }
// }

// class Dog{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   eat(){
//     return `${this.name} is eating!`
//   }
//   bark(){
//     return `WOOF!`
//   }
// }

// const sukky = new Dog('sukky', 12);
// const kitty = new Cat('kitty', 10);

// console.log(sukky.eat());
// console.log(sukky.bark());
// console.log(kitty.eat());
// console.log(kitty.meow());

// now, we are repeating a lot of code, we can create 
// a template class which will contain all the information
// that is repeating in both of our classes.

class Pet{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating!`
  }
}

// with the keyword exted we are basically saying copy every method and attribute from Pet into Cat
class Cat extends Pet{
  meow(){
    return `MEOW!`
  }
}

class Dog extends Pet{
  // in case I want to reuse the code from the Pet class and also add some new functionality i can use the keyword super
  constructor(name, age, livesLeft=9){
    // now instead of repeating this.name = name and this.age = age i can simply use 
    super(name,age);
    // and now i can add the new features and all the previous declaration is made with super
    this.livesLeft = 8;
  }
  // if I want a particular functionality on an extended function I can simply override the declaration again
  eat(){
    return `${this.name} the fatso eat!`
  }
  bark(){
    return `WOOF! I stil have ${this.livesLeft} lives left`
  }
}

// now cat and dog has a constructor and an eat method even if we didn't explicitly declare it
const sukky = new Dog('sukky', 12);
const kitty = new Cat('kitty', 10);

console.log(sukky.eat());
console.log(sukky.bark());
console.log(kitty.eat());
console.log(kitty.meow());
