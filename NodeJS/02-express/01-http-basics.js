const http = require('http');
const path = require('path');


const server = http.createServer((req, res) => {
    console.log(req.method);
    const url = req.url;
    if(url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page of the Murph Man</h1>');
        res.end();
    }else if(url =='/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About the Murph Man</h1>');
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>I guess not: 404</h1>');
        res.end();
    }
}).listen(5000);