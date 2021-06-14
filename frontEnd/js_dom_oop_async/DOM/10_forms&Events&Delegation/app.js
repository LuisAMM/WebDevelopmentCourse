const tweetForm = document.querySelector('#tweetForm');
const tweetsList = document.querySelector('#tweets');

tweetForm.addEventListener('submit', (e) => {
  // preventDefault will prevent that the website reload 
  // each time we submit a form 
  e.preventDefault();

  let tweet = tweetForm.elements.tweet;
  let username = tweetForm.elements.username;

  let newTweet = document.createElement('li');
  let boldedTag = document.createElement('strong');
  boldedTag.append(username.value);
  newTweet.append(boldedTag);
  newTweet.append(` - ${tweet.value}`);

  tweetsList.append(newTweet);

  tweet.value = "";
  username.value = "";

})

// if i wanted to delete the tweets with a click, 
// this approach will only works with preexisting
// tweetsList, the new tweets will not have this 
// event listener 

// const lis = document.querySelectorAll('li');

// for (let li of lis) {
//   li.addEventListener('click', (e)=>{
//     li.remove();
//   });
// }

// in these cases we need to attach the event of 
// destroy the tweets to a parent node, in this case
// the ul

tweetsList.addEventListener('click', (e)=>{
  console.log(e)
  if(e.target.nodeName === 'LI'){
    e.target.remove();
  }
})