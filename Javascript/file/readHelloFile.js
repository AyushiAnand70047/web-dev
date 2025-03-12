const fs = require('fs')

console.log('Starting Program')

//const contents = fs.readFileSync('hello.txt','utf-8')

// console.log('File Reading Success: ',contents);

fs.readFile('hello.txt','utf-8',(err,contents)=>{
    if(err){
        console.log('Error in file reading')
    } else{
        console.log('File Reading Success: ',contents);
    }
})

console.log('End of Program');