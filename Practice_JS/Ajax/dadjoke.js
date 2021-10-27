
const dadJoke = async () => {
    const config = { headers: { Accept: "application/json", } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log("DAD JOKE: ", res.data.joke);
};

dadJoke();