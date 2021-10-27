// Axios is easier to use than fetch.  It is build on top of fetch.

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        console.log("FROM EXAMPLE AXIOS 1: ", res.data.ticker.price);
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

// Async Version
const fetchBTC2 = async function () {
    try{
        res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log("FROM EXAMPLE AXIOS 2: ", res.data.ticker.price);
    }catch(e){
        console.log("Something went wrong");
        console.log(e);
    }

};

fetchBTC2();