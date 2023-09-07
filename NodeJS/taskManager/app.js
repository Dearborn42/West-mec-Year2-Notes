const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}), express.json())
    .use(express.static('./public'))
    .listen(5000, ()=>{
        console.log('listening on 5000');
    })