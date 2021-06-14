// in order to create multiple objects with the same functions we can use a factory function (not really used anymore)

// for example:

const makeColor = function (r,g,b){
  const color = {};
  
  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function(){
    let {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`;    
  }
  color.hex = function(){
    let {r,g,b} = this;
    return `#` + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
  }
  return color;
}

// the problem with this approach is that for each color object we create we will make a copy of each function. which it's not ideal 
// (that's why we must use the prototype)

let red = makeColor(255,0,0)
let green = makeColor(0,255,0)

console.log(red.rgb())
console.log(red.hex())

console.log('red.rgb === green.rgb ? ')
console.log(red.rgb === green.rgb)

console.log("'example'.__proto__.toUpperCase === 'otherStr'.__proto__.toUpperCase ? ")
console.log('example'.__proto__.toUpperCase === 'otherStr'.__proto__.toUpperCase)
