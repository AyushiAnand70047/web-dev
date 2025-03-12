// Read the contents of file from file1.txt
// Then create a new file named as backup.txt
// copy the contents of file1.txt to backup file
// delete file1

const fs = require('fs')

// Synchronously
// const file1Content = fs.readFileSync('file1.txt','utf-8')
// fs.writeFileSync('backup.txt',file1Content)
// fs.unlinkSync('file1.txt')

// Asynchronous
fs.readFile('file1.txt','utf-8',(err,content)=>{
    if(err){
        console.log("Error in reading file1.txt ",err)
    } else{
        console.log('File content: ',content)
        fs.writeFile('backup.txt',content,(err)=>{
            if(err){
                console.log('Error in writing in backup.txt', err)
            } else{
                console.log('file1.txt content added in backup.txt')
                fs.unlink('file1.txt',(err)=>{
                    if(err){
                        console.log('Error in deleting file1.txt',err)
                    } else{
                        console.log('file1.txt deleted successfully')
                    }
                })
            }
        })
    }
})