// the keyword class indicate a class
// the name will be the same name of the constructor

class Color {
  // we use the name constructor inside of a class to indicate the constructor function
  // because we are inside of an 'object' we can use the shorthand way of defining a funtion (just the name and the arguments)
  constructor(r, g, b, name = 'unnamed') {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name
    // we can call a later function in the constructor
    this.calcHSL();
  }
  // thanks to the class keyword we can now define the methods of the object inside the class
  innerRGB() {
    let { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    let { r, g, b } = this;
    // if we want to call an internal class method we just need to use 'this' keyword
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    let { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(alpha = 1.0) {
    let { r, g, b } = this;
    return `rgba(${this.innerRGB()}, ${alpha})`;
  }
  // copied function from internet that transform rgb to hsl
  calcHSL() {
    let { r, g, b } = this;

    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0)
      h = 0;
    // Red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
      h += 360;

    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    this.h = h;
    this.s = s;
    this.l = l;
  }
  // hsl is another color format like rgb, the second and third value are percentages
  hsl() {
    let { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  opposite() {
    let { h, s, l } = this
    return `hsl(${(h + 180) % 360}, ${s}%, ${l}%)`;
  }
  fullSaturation() {
    let { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }
}

let bgColor = new Color(255, 0, 0, 'background');
document.body.style.backgroundColor = bgColor.rgb()