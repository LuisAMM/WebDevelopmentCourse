// const add = add = (x,y) => x + y
// const square = square = (x) => x*x
// const PI = PI = 3.14159

// worst, repetitive
// // module.exports.add = add
// // module.exports.square = square
// // module.exports.PI = PI

// const math = {
//   add : add,  
//   square : square,
//   PI : PI
// }

// module.exports = math

const divide = (x,y) => x/y

// best approach
module.exports.add = (x,y) => x + y
module.exports.square = (x) => x*x
module.exports.PI = 3.14159


