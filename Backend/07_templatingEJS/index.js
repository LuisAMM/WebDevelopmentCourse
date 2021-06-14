const express = require('express');
const path = require('path');
const app = express();
// require json data from a file
const redditData = require('./data.json');

// defines the view engine to ejs
app.set('view engine', 'ejs')
// with this we can run the nodemon index.js from anywhere in filesystem without worrying about the views folder 
app.set('views', path.join(__dirname,'/views'))

app.listen(3000, ()=>{
  console.log('Listening on port 3000');
});

app.get('/', (req,res)=>{
  // render the view defined on /views/home.ejs
  res.render('home');
})

app.get('/random', (req,res)=>{
  const num = Math.ceil(Math.random()*100);
  // render the view defined on /views/random.ejs
  // the second value will pass a random number 'num' to the view renamed into rand
  // if you dont want to change the name, simply put {num} 
  res.render('random', {rand : num});
})

// ========================================================================== //

// subreddit template demo

app.get('/r/:subreddit',(req,res)=>{
  const {subreddit} = req.params;
  const data = redditData[subreddit]
  if(data){
    res.render('subreddit', {...data})
  }
  else{
    res.render('notfound', {subreddit});
  }
})

app.get('/cats',(req,res)=>{
  const cats = ['misu', 'lion', 'gordo', 'pelusa'];
  res.render('cats', {cats})
})