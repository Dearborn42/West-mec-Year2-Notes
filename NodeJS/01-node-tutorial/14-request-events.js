const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    if(req.url === '/about'){
        console.log(req.url);
        req.readableEnded("About");
    }else{
        res.end("Welcome")
    }
})

server.listen(3000);