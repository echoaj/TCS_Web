const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// Use ejs template engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
