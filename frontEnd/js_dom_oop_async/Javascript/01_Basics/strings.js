// property of str
// .lenght

// some methods of str
// .slice()
// .toUpperCase()
// .toLowerCase()
// .indexOf()
// .trim()
// .replace()

// Template literal
let product = 'Artichoke';
let price = 2.25;
let qty = 5;

// I want to print 'You Bought qty product'

// annoying closing and opening quotes
console.log("You Bought " + qty + " " + product + ". Total is: " + price*qty);

// template literals (only works with backticks ` will not work with ' nor ")
console.log(`You Bought ${qty} ${product}. Total is: $${price*qty}`)