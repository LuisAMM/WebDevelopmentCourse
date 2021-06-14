// to make a request we simply use
// axios will return a promise.

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((res)=>{
    // we receive directly the whole body with all the information
    // when the axios promise is resolved, all the information is delivered
    // not only the header PLUS it's already parsed into an object
    // inside res.data we will find all the information that we need 
    console.log(res)
    console.log(res.data.ticker.price);
  })
  .catch((err) =>{
    console.log('error', err);
  })

// or if we want to use async and await

async function fetchBTCPrice(){
  try{
    let res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log(res.data.ticker.price)
  }
  catch(err){
    console.log(err)
  }
}

fetchBTCPrice()