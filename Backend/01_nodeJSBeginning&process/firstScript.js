for(let i=0; i<2; i++){
  console.log('hello', i) 
}

console.log(process.version)
console.log(process.release)
console.log(process.cwd())
console.log(process.argv)

const args = process.argv.slice(2)

for(let arg of args){
  console.log(`Hi ${arg}!`)
}