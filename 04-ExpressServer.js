const express = require('express');

const port = 5000 || process.env.PORT;
const app = express();

// Routes 
app.get("/", (req, res) => {
    res.send("<h2>Home Page</h2>");
});

app.get("/about", (req, res) => {
    res.send("<h2>About Page</h2>");
});

app.listen(port, () => {
    console.log(`Server run on http://localhost:${ port }`);
});