const fs = require('fs')
const math = require('./math')
// if id start with dot find it in user code(./math), else find it in node builtin system if exist in node builtin module then well and good, else find it in node modules(npm init then npm i express), else throw error to user 

fs.writeFile('test.txt','Hello World',()=>{})

console.log({__filename, __dirname})
console.log(math.adding(2,5))


// wrapper function arguments - exports, require, module, __filename, __dirname