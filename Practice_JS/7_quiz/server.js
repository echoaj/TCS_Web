const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3000;
let results = '';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(__dirname + '/frontend/favicon.ico'));

// Step 1
/*app.get('/', (req, res) => { 
    res.send('<h1>Hello World</h1>');
});*/

// Step 2
app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/frontend/index.html');
});

// Step 3
// app.use(express.static('frontend'));

app.post('/', (req, res) => {
    results = req.body;
    res.sendFile(__dirname + '/frontend/finished.html');
});

app.get('/answers', (req, res) => {
    res.send(results);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});


