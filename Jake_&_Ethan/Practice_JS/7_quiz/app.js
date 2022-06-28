const express = require('express');
const app = express();
const PORT = 3000;

// Middlewhere
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend'));

// Function executes when user creates a post request form the browser
app.post('/', (req, res) => {
    res.send('<h1>Thank you for your submission!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});