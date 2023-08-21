let http = require('http');
const server = http.createServer((req, res) =>{
    // conditional routing
    if(req.url === '/'){
        res.end("Welcome to the home page!")
    }else if(req.url === '/about'){
        res.end("Welcome to the about page!")
    }else{
        res.end(`<h1>Oops! Something went wrong</h1>
        <p> We can't seem to find the page you are looking for.</p>`)
    }
})

server.listen(3000)