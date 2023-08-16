const os = require('os');

const user = os.getUser();

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalMem(),
    freeMem: os.freeMem()
}

console.log(user);