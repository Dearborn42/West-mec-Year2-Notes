const EventEmmitter = require('events');

const customEventEmitter = new EventEmmitter();

customEventEmitter.on('response', (name, id)=>{
    console.log(`Data recieved: ${name} with id ${id}`);
})

customEventEmitter.on('testing', ()=>{
    console.log("Some other login is here");
});

customEventEmitter.emit("response", "John", 34)