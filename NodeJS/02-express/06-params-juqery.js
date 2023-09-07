const express = require('express');
const app = express();
const {products} = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>This is the home page</h1><a href="/api/products">Products</a>');
    res.end();
})


app.get('/api/products', (req, res)=>{
    const newProducts = products.map(x => {
        const {id, name, image, price, desc} = x
        return {id, name, image, price, desc}
    })

    res.json(newProducts);
    res.end();
});

app.get('/api/products/:productId', (req, res) => {
    console.log(req.params);
    const { productId } = req.params
    const singleProduct = products.find(x => x.id === Number(productId));
    if(!singleProduct)
        return res.status(404).send("Product not found")
    else
        return res.json(singleProduct)
});


app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((x) => {
            return x.name.startsWith(search)
        })
    }
    if(limit)
        sortedProducts = sortedProducts.slice(0, Number(limit));
    
    if(sortedProducts.length < 2)
        return res.status(200).json({success: true, data: []})

    res.status(200).json(sortedProducts);
});

app.listen(5000, ()=>{

})