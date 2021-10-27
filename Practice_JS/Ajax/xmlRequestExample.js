// npm install xmlhttprequest --save
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const req = new XMLHttpRequest();

req.onload = function() {
    console.log("All done with request.");
    console.log(this);
}

req.onerror = function() {
    console.log("Error happened.");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();
console.log(req.response);