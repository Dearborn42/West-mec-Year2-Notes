const {readFileSync, writeFileSync} = require("fs");
const path = require("path");
const first = readFileSync(path.join(__dirname, "/content/first.txt"), "utf8");
const second = readFileSync(path.join(__dirname, "/content/second.txt"), "utf8");
writeFileSync(path.join(__dirname, "/content/result-async.txt"), `Here is the result: ${first}  ${second}`, {flag: 'w'})


console.log(first)