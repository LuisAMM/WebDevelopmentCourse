// fetch is the newer way of doing http requests via js
// support promises and it's not supported on IE

// fetch will return a promise and it will succeed when 
// it receive the header of the information from the web api
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((res) => {
    console.log('response, waiting to parse...', res);
    // the .json method returns a promise that will be resolved when
    // all the information has arrived.
    // also it will automatically parse the json data into an object
    return res.json();
  })
  .then((data) => {
    console.log('data parsed: ', data);
    console.log(data.ticker.price);
  })
  .catch((err) => {
    console.log('error in: ', err);
  })

// fetch it's not ideal but it's definitely better than XHR
// we can clean a little this request with async and await

async function fetchBTCValue() {
  try {
    let res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log('awaiting for body, headers received: ', res);
    let data = await res.json();
    console.log('data parsed: ', data);
    console.log(data.ticker.price);
  }
  catch (err) {
    console.log(err)
  }
}

fetchBTCValue()