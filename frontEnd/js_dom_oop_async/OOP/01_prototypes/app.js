// the prototype attribute it's a mechanism by which Js obj inherit features
// from one another. 

// the String data type for example has a prototype, we can access it with
// String.prototype and more importantly we can add new functions this way:

String.prototype.firstFunc = function() {
  console.log("stop");
}

String.prototype.secondFunc = function() {
  console.log(this);
}
// we must not use arrow functions here due to the use of the this keyword
String.prototype.thirdFunc = function() {
  return `${this.toUpperCase()}!`
}

// now every string that we create in this page will have access to first,
// second and third func

"hello".firstFunc();
let bye = "bye"
bye.secondFunc();
const test = "test"
console.log(test.thirdFunc());