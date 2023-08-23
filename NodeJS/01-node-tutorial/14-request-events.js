const http = require('http');
const emmitter = require('events');

const customEmmitter = new emmitter();

let siteVisited = 0;
const server = http.createServer();

server.on("request", (req, res) => {
    if(req.url === '/about'){
        console.log(req.url);
        customEmmitter.emit('visited', req.method, req.url)
        req.end("about");
    }else if(req.url === '/time'){
        res.sendFile(__dirname + '/aboutUs.html')
    }
})


customEmmitter.on('visited', (method, url) => {
    siteVisited++;
    console.log(`Event has been triggered: This site has been visited`);
    console.log(`Method is: ${method}, url is: ${url}`);
})

server.listen(4000, () => {
    console.log(`Server listening on 3000`);
});