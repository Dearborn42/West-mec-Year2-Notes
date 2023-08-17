const path = require('path')

console.log(path.sep)

const filePath = path.join("/content", "subfolder", "first.txt")

console.log(filePath)

const base = path.basename(filePath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', "first.js")

console.log(absolute)