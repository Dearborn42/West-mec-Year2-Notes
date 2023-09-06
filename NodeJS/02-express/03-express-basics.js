const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("User Hit Reqsource");
    res.status(200).send("Home page found");
})

app.get('/about', (req, res) => {
    console.log("User Hit Reqsource");
    res.status(200).send("About page found");
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>");
})

app.listen(3000, () => {
    console.log("listening on 3000");
})