const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let result = '';

// Middlewhere
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('frontend'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

// Function executes when user creates a post request form the browser
app.post('/', (req, res) => {
    result = req.body;
    console.log(result);
    res.sendFile(__dirname + '/frontend/finished.html');
});

app.get('/answers', (req, res) => {
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});