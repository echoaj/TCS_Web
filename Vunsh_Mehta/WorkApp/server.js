const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5500'
}));

// Middleware
app.use(express.static('public'));

// Use ejs template engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('login');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

let attachment = "<h1>Hello World</h1>";

app.get('/attachment', (req, res) => {
    res.send(attachment);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
