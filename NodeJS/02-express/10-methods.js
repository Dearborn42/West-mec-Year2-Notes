const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.get('/api/people', (req, res) => {
    res.json({success: true, data: people});
})


app.post('/api/people', (req, res) => {
    console.log(req.body);
    const {name, id} = req.body;
    if(name)
        res.status(201).json({success: true, person: name});
    else    
        res.status(404).json({success: false});
})


app.post('/login', (req, res) => {
    console.log(req.body);
    const {name, id} = req.body;
    if(name)
        res.status(200).json({status: 200, data: name});
    else
        res.send("Please enter credentials")
})

