const express = require('express');
const path = require('path');
const json = require('./data.js');
const app = express();

// Set up static middleware

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    console.log(req.url);
    res.send(json.products);
})


app.get('*', (req, res) => {
    res.status(404).sendFile("404 not found");
})

app.listen(5000, () =>{
    console.log("listening on port 5000")
})