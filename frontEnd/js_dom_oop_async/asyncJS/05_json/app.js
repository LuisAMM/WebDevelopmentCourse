// json stands for java script object notation. as it's name suggest
// uses a notation similar to objects in java script, where the 
// only differences are that the keys must be double quoted strings
// and json values can only be:
                        // -object
                        // -array
                        // -string
                        // -number
                        // -true
                        // -false
                        // -null
//example:

// {
//   "ticker":{
//     "base": "BTC",
//     "target": "USD",
//     "price": "15000"
//   }
// }

// in order to transform from a string json format to an js object we can use
let tickerBTCJSON ='{"ticker":{"base":"BTC","target":"USD","price":"15000"}}'
let tickerBTCObj = JSON.parse(tickerBTCJSON)

// this is a string
console.log(tickerBTCJSON)
// this is an object
console.log(tickerBTCObj)

// if we want to change an object to a json file we can do it with
 let someObj = {
   name: 'luis',
   age: 26
 }

 let someJSON = JSON.stringify(someObj)

 console.log(someJSON)
 console.log(someObj)