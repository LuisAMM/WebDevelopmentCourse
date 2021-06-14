// npm is a package manager, a tool for the command line that allow us to add package to our projects

// npm have a tool that allow us to create a package.json with the minimum information
              // npm init
  
  // the package.json file will record all the packages that we install and it will make easier to download all the dependencies that our software needs
  // NOTE: node_modules contain all the dependencies and it's a heavy folder we usually DON'T upload this folder
  // in order to install all the dependencies of a project we just need to run
      
              // npm install

  // this command will look for the package.json file in our project folder (the package.json must be on the root folder of out project) and will install all the dependencies listed there

// to install a new package we simply run 
              // npm install packageName
              // npm i packageName

// if we want to use a package in our nodejs program we need to install it first (some are already installed like fs for example)

// to require this package we need to run 
              // npm install give-me-a-joke 
              // npm install colors
              // npm install figlet

// if we inspect!
const jokes = require('give-me-a-joke')
const colors = require('colors')
const figlet = require('figlet')

jokes.getRandomDadJoke((joke)=>{
  console.log(joke.rainbow)
})

figlet("hello world",(err, data)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(data)
})