const { json } = require('body-parser');
const express = require('express');
const path = require('path');
const {menu} = require('./menu.js')

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send(menu);
})


app.get('/search/:id', (req, res) => {
    const { id } = req.params;
    if(id){
        res.send(menu.filter(x => x.id === Number(id)))
    }
})

app.get('/sort/:category', (req, res) => {
    const {category} = req.params;
    const sorted = menu.filter(x => x.category === category);
    if(sorted){
        res.send(sorted)
    }
})

app.get('/price/:way', (req, res) => {
    const {way} = req.params;
    if(way === 'asc')
        res.send(menu.sort((x, y) => {return x.price-y.price}))
    else if(way === 'des')
        res.send(menu.sort((x, y) => {return y.price-x.price}))
})

app.listen(5000);