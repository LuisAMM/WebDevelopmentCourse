// when a function it's declared async will return a promise
// if the function returns a value the promise it's fullfilled 
// with that value.
// if we want the promise to fail we throw an error as showed on 
// uhoh()
async function hello(){
  return 'hello';
}

const result = hello();

async function uhOh(){
  throw new Error ('uhOh');
}

const errorResult = uhOh()

// more meaningful example
// we do not need to create a new error to throw 
// an exception
const login = async (user,password)=>{
  if(!user || !password) throw `Missing Credentials`;
  if(password === '1234') return `Welcome`;
  throw `invalid password`;
}

login('asd','1234')
  .then((msg)=>{
    console.log(msg, ` User`);
  })
  .catch((error)=>{
    console.log(error)
  })


// await - the await keyword is mostly used in functions declared
// with async.
// await will pause the execution of the current function until a 
// promise is fulfilled 

// this function will return a promise resolved when the timeout it's finished
const delayedChangeColor = (newColor, delay) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      document.body.style.backgroundColor = newColor
      resolve();
    }, delay);  
  })
}

async function rainbow(){
  // it will block the execution of rainbow until the promise of delayedchangecolor it's resolved
  await delayedChangeColor ('red',1000)
  await delayedChangeColor ('green',1000)
  await delayedChangeColor ('white',1000)
  await delayedChangeColor ('black',1000)
}

rainbow().then(()=>{console.log('End of rainbow')})

// ========================================================================== //

// Handling errors with async and await 
// helper fake request
const fakeRequest = (url) => {
  // resolve and reject can have any name
  return new Promise((resolve, reject) => {
    // resolve(); if I call the resolve function it will set the promise as resolved
    // reject(); if I call the reject function it will set the promise as rejected
    // and if any of the two functions are called the promise will be pending
    const rand = Math.random()
    setTimeout(() => {
      if (rand < 0.7) {
        resolve(`FAKE DATA OF ${url.toUpperCase()}`)
      }
      else {
        reject(`Request error: ${url} not reachable`)
      }
      resolve(); //After a second the promise will be resolved
    }, 1000);
  })
}

// this will generate an error and stop the program 50% of the time
// in order to avoid stopping the program we must use try and catch

// async function make2req(){
//   let data1 = await fakeRequest('https://google.com');
//   console.log(data1)
// }

async function make2req(){
  try{
    let data1 = await fakeRequest('https://google.com');
    let data2 = await fakeRequest('https://reddit.com');
    console.log(data1,data2)
  }
  catch(e){
    console.log(e)
  }
}

make2req();