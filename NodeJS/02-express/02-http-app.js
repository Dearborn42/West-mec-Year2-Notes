const http = require('http');
const path = require('path');
const {readFileSync} = require('fs');

const homePage = readFileSync(path.join(__dirname, '/public/index.html'));
const homeStyle = readFileSync(path.join(__dirname, '/public/styles.css'));
const homeImage = readFileSync(path.join(__dirname, '/public/logo.svg'));
const homeLogic = readFileSync(path.join(__dirname, '/public/browser_app.js'));

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if(url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page of the Murph Man</h1>');
        res.end();
    }else if(url =='/styles.css'){
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(homePage);
        res.end();
    }else if(url =='/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About the Murph Man</h1>');
        res.end();
    }else if(url =='/browser-app.js'){
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>I guess not: 404</h1>');
        res.end();
    }
});

server.listen(5000);