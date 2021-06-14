// constructors are functions that create and initialize
// a new object and attach a protoype

// it's encoraged that the constructor first letter is capitalized
// we can use this inside the constructor because when we instantiate
// a new color the keyword 'new' will link the constructor with the object.
function Color(r,g,b){
  this.r = r;
  this.g = g;
  this.b = b;  
}

let red = new Color(255,0,0);
console.log(red)

// now we can add methods to the prototype and they will not be different
// across all the objects

Color.prototype.rgb = function(){
  let {r,g,b} = this;
  return `rgb(${r}, ${g}, ${b})`;    
}
Color.prototype.hex = function(){
  let {r,g,b} = this;
  return `#` + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}
Color.prototype.rgba = function(alpha = 1.0){
  let {r,g,b} = this;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;    
}

console.log(red.hex())
console.log(red.rgb())
console.log(red.rgba(0.5))

document.body.style.backgroundColor = red.rgba(0.1);

// now this works fine. but it's unconfortable to add all the functions outside of it's declaration. that's why classes were created. we will see it in the next folder
