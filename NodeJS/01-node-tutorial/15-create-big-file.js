const {writeFileSync, createReadStream, createWriteStream} = require('fs');

const path = require('path');

for(let i = 0; i<100; i++){
    writeFileSync(path.join(__dirname, '/content/bigFile.txt'), `Hello Jerk ${i}\n`, {flag:"a"});
}

Server.on('request', (req, res) => {
    const src = fs.createReadStream(path.join(__dirname, '/content/bigFile.txt'));
    src.pipe(res)
})
