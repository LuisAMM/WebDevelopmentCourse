const person = {
  firstName : 'Luis',
  lastName  : 'Munoz',
  age       : 26
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

console.log(person);
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);

// creates a new element in the object
person.middleName = 'Alfredo';

console.log(person.middleName)


// array with objects inside
const shoppingCart=[
  {
    product: 'Jenga',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo dot',
    price: 29.99,
    quantity: 2
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 3
  }
]

console.log(shoppingCart[1].product);

// objectss with arrays inside

const student = {
  firstName:'David',
  lastName:'Jones',
  strengths: ['Music', 'Art'],
  exams:{
    midterm: 92,
    final: 88
  }
}

console.log(student.strengths[0]);
console.log(student.exams.midterm)