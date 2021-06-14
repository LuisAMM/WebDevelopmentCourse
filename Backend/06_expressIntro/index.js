const express = require('express');
const app = express();
const port = 3000;

// app.listen will open the port of the server

// console.dir(app);
app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
});

// app.use will respond to any incoming request. it's better to use other app methods(get, post, ...) to route the information
// app.use((req,res) => {
//   console.log('we got a new req');
//   // we can send text, html or js objects (the latter will be transformed into json) 
//   // res.send('Welcome to my website')
//   res.send('<h1>Welcome to my website</h1>')
//   // res.send({welcome : 'user'})
// })

// app.get receive the incoming request of an specific page. for example 
// app.get('/dogs') will receive the incoming request of localhost:3000/dogs
// there are 2 special values those are: / and * 
// * will be at the end explained.

app.get('/dogs', (req, res) => {
  console.log('/dogs request arrived')
  // there can be only 1 res.send for 1 req, the rest are ignored
  res.send('<h1>Woof!</h1>');
})
app.get('/cats', (req, res) => {
  console.log('/cats request arrived')
  res.send('<h1>Meow!</h1>');
})
app.get('/mouses', (req, res) => {
  console.log('/mouse request arrived')
  res.send('<h1>mouseSound!</h1>');
})
// app.get('/') will receive the incoming request of localhost:3000
app.get('/', (req, res) => {
  console.log('root request arrived')
  res.send('<h1>Welcome to my website!</h1>');
})

// we can also have other types of request (for example post request)
// express have methods to deal with this types
// this res.send will only be activated when we receive a post request. 
// if we try to access from our browser to /cats we will be handled by get because the browsers always send get requests
app.post('/cats', (req, res) => {
  console.log('we got a post request');
  res.send('Post request received. This is your answer');
})


// we can also have patterns, we do not need to define each page that our website has.
// we can define a pattern in a get method with ':' 
// this pattern will work for localhost/r/anything
// but when we arrive to another / the pattern it's not longer valid

app.get('/r/:subreddit', (req, res) => {
  // we can access the 'variable' part of the pattern in req.params
  // req.params is an obj that contain all the 'variables' parameters 
  // that are in the request
  const { subreddit } = req.params;
  res.send(`<h1>We are on a ${subreddit} subreddit!</h1>`)
})

// we can define multiple patterns chaining them up 
// this pattern will work for localhost:3000/r/whatever/anything

app.get('/r/:subreddit/:userID', (req, res) => {
  const { subreddit, userID } = req.params;
  res.send(`<h1>Viewing the ${subreddit} of the user ${userID}</h1>`)
})

// working with the query string,
// this callback will start up once we receive a /search parameter in the request. 

// req.query is an object that will save up all the parameters passed in 
// the request as a query string for example:
// localhost:3000/search?q=lalaland&color=blue

// the req.query={q='lalaland',color='blue'}, each parameter must be separated by an ampersand
app.get('/search', (req, res) => {
  console.log(req.query);
  // const {q,color} = req.query;
  const { q } = req.query;
  if (!q) {
    res.send(`if nothing search nothing found`)
  }
  res.send(`<h1>You are viewing the results for ${q}</h1>`)
})


// app.get('*') will receive the incoming request of localhost:3000/anything
//  that's not listed above will be redirected to this get

// app.get('*') must be at the end, otherwise will be the first to answer when a request arrive
app.get('*', (req, res) => {
  console.log('unknown page requested.')
  res.send('Error page not found')
})