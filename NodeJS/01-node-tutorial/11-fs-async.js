const {readFile, writeFile, read, write} = require("fs");
const path = require("path");

readFile(path.join(__dirname, "content/first.txt"), "utf8", (err, result)=>{
    if (err) {console.log(err);return}
    const first = result;

    readFile(path.join(__dirname, "content/first.txt"), "utf8", (err, result)=>{
        if (err) {console.log(err);return}
        const second = result;

        writeFile(path.join(__dirname, "content/result-async.txt"), `here is the result: ${first}, ${second}`, (err, result)=>{
            if (err) {
                console.log(err);
                return
            }
            console.log("Done");
        });
    });
});

console.log("Winter is here");