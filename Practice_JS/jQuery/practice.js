
let api = 'https://api.coinbase.com/v2/prices/spot?currency=USD'

// NORMAL WAY
const req = new XMLHttpRequest();

req.onload = function() {
    const h1 = document.querySelector("h1");
    h1.innerText = this.responseText;
}

req.open('GET', api);
req.send();



// USING JQUERY
$.get(api, function (response) {
    $("h1").text(JSON.stringify(response))
})



