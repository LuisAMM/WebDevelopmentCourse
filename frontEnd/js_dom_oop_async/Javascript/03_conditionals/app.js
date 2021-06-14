// console.log("It's connected");

// let random = Math.random();

// if(random < 0.5){
//   console.log(`your number it's less than 0.5 -> ${random}`);
// }
// else{
//   console.log(`your number it's greater (or equal) than 0.5 -> ${random}`);
// }

// console.log("after conditional");

//============================================================================//


// const dayOfWeek = prompt('enter a day:').toLowerCase();

// if(dayOfWeek==='monday'){
//   console.log('uggh I hate mondays');
// }
// else if (dayOfWeek === 'saturday'){
//   console.log('yay I love saturdays')
// }
// else if (dayOfWeek === 'friday'){
//   console.log('Fridays are decent, specially after work!')
// }
// // any other string
// else 
// {  
//   console.log('Meh')
// }

//============================================================================//

// 0-5 Baby Free
// 5-10 Child $10
// 10-65 Adult S$20
// 65+ Senior $10

// const age = 18;

// if(age < 5){
//   console.log("You are a baby, you get in for free!");
// }
// // Only execute if the previous one it's false
// else if(age < 10){
//   console.log("You are a child, you pay $10")
// }
// else if(age < 65){
//   console.log("You are a Adult, you pay $20")
// }
// else{
//   console.log("You are a Senior, you pay $10")
// }

//============================================================================//

// const password = prompt("Please enter a new password:");

// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//     console.log("password accepted");
//   }
//   else {
//     console.log("password should not have spaces");
//   }
// }
// else {
//   console.log("Password must be greater than 6");
// }

//============================================================================//

// const password = prompt("Please enter a new password:");

// if(password.length >= 6 && password.indexOf(' ') === -1){
//   console.log('Valid password');
// }
// else{
//   console.log('Incorrect format');
// }

//============================================================================//

// 0-5 Baby Free
// 5-10 Child $10
// 10-65 Adult S$20
// 65+ Senior $10

const age = parseInt(prompt("enter yout age"));

if((age >= 0 && age < 5) || age > 65){
  console.log("Free");
}
else if(age < 10 && age >=5){
  console.log("$10");
}
else if(age < 65 && age >=10){
  console.log("$20");
}
else{
  console.log("invalid age");
}