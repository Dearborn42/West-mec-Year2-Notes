const express = require('express');
const app = express();
const {products} = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>This is the home page</h1><a href="/api/products">Products</a>');
})


app.get('/api/products', (req, res)=>{
    const newProducts = products.map(x => {
        const {id, name, image, price, desc} = x
        return {id, name, image, price, desc}
    })

    res.send(newProducts);
    res.end();
});

app.listen(5000, ()=>{

})