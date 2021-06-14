//============================================================================//

// create an array
let emptyArray = [];
let multiTypeArray =[0,1,null,undefined,'string'];
let numberArray = [0,1,2,3,4];
numberArray[numberArray.length] = 5;

//============================================================================//

// push/pop
let movieLine = ['tom','nancy'];

// enter oliver at the end of the array
// modify the array inline
movieLine.push('oliver');
movieLine.push('pablo');

// add both of them at the end of the array
movieLine.push('harry', 'hermione');

// extract the last element of the array
// modify the array inline
let person = movieLine.pop();

//============================================================================//

// shift/unshift

// shift remove the first name of the array
// modify the array inline
person = movieLine.shift()

// unshift add colt to the first positon of the array
// modify the array inline
movieLine.unshift('colt')

//============================================================================//

const array1 = ['a1','b1','c1'];
const array2 = ['a2','b2','c2'];

// concat 

// concat return array1 and array2 concatenated
// first array1 then array2
const array3 = array1.concat(array2);

//============================================================================//

// includes

// includes returns true if a value exist in an array
// false otherwise

if(array3.includes('a1')){
  console.log('array3 contains a1');
}

//============================================================================//

// reverse

// reverse reorder the array, the first is the last and so on
// modify the array inplace

array3.reverse()

//============================================================================//

// indexOf

// we can also use indexOf as in strings

let position = array3.indexOf("a1");

//============================================================================//

// slice

// if any value it's passed return a copy of the array
// if one value it's passed return a copy of the array from that value to the end
// if two values are passed return a copy of the array from the first value until the second value without include it.

let colors = ['red','yellow','green', 'indigo']
console.log(`colors is = ${colors}`)
let copyColors = colors.slice();
console.log(`copyColors is = ${copyColors}`)
let colorWithoutRed = colors.slice(1);
console.log(`colorWithoutRed is = ${colorWithoutRed}`)
let yellowGreen = colors.slice(1,3);
console.log(`yellowGreen is = ${yellowGreen}`)
let last2elements = colors.slice(-2);
console.log(`last2elements is = ${last2elements}`)

//============================================================================//

// splice

// changes the content of an array by removing or replacing existing elements and/or adding new elements in place

// first value where should start the new element
// second value how many elements should delete
// third value new element 

const months = ['Jan','March','April','June'];

// insert Feb in the second position without eliminating anything

months.splice(1,0,'Feb');

// insert May in the last position and remove june

months.splice(4,1,'May');

// insert march-april and delete march and april

months.splice(2,2,'march-april');

