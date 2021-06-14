console.log('start')

// try it's an element that we use to detect things that could go wrong
try {
  // error on purpose
  // because it's inside a try it will not stop the code everything will run normally
  hello.toUpperCase();
}
// catch it's an element which specify what to do if the try portion went wrong
catch {
  console.log('Error');
}

console.log('middle')

// if it's not inside a try/catch will stop the code 
// hello.toUpperCase()

console.log('final')

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(5));
  } catch (e) {
    // exception
    console.log(e);
    console.log('Please pass a string next time!')
  }
}

// wors normally
yell('hello\n')
// enter in the catch
yell(1)