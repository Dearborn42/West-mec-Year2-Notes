const {createReadStream, createWriteStream} = require('fs');


const path = require('path');


const stream = createReadStream(path.join(__dirname, '/content/bigFile.txt'), {encoding: 'utf8'});