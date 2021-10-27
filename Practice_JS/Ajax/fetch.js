
// as soon as fetch recieves the headers, it resolves the promise
// but it is not guranteed to get you all the information immediately
// so we must use another function for that
// Promise Version
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        console.log("Resolved Promise Response:", res);
        return res.json();  // returns promise
    })
    .then((data) => {
        console.log("Data Parsed... ", data);
        console.log("FROM EXAMPLE FETCH 1: ", data.ticker.price);
    })
    .catch((err) => {
        console.log("Error", err);
    });

// Async Version
const fetchBTC1 = async function () {
    try{
        res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        data = await res.json();
        console.log("FROM EXAMPLE FETCH 2: ", data.ticker.price);
    }catch(e){
        console.log("Something went wrong");
        console.log(e);
    }

};

fetchBTC1();