
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let results = '';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Step 1
/*app.get('/', (req, res) => { 
    res.send('<h1>Hello World</h1>');
});*/

// Step 2
/*app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/frontend/index.html');
});*/

// Step 3
app.use(express.static('frontend'));

app.post('/', (req, res) => {
    results = req.body;
    console.log(results)
    res.send('<h1>Form Submitted!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});


