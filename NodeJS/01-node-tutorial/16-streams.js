const {createReadStream, createWriteStream} = require('fs');


const path = require('path');


const stream = createReadStream(path.join(__dirname, '/content/bigFile.txt'), {encoding: 'utf8'});

// there are 4 fundamental streams types in node.js
// readable, writeable, duplex, and transform steams


// readable stream is an abstraction for a source from which data can be consumed
// writeable stream is an abstraction for a source from which data can be written
// duplex stream is both readable and writable
// transform stream is basically a duplex that can be used to modify or transform data