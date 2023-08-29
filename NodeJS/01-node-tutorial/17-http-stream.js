const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res)=>{
    const text = fs.readFileSync(path.join(__dirname, './content/bigFile.txt'), 'utf8');
    res.end(text);
}).listen(3000, ()=>{
    console.log('server listening on port 3000');
})
