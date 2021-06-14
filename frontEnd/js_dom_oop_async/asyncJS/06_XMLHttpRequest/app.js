// old way of doing http request to apis

const req = new XMLHttpRequest();

req.onload = function(){
  console.log('done');
  console.log(JSON.parse(this.responseText).ticker)
}

req.onerror = function(err){
  console.log(err, this)
}

req.open('Get', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();
