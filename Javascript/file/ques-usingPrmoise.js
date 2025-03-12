const fs = require('fs/promises')


// Moder code

fs
    .readFile('file1.txt','utf-8')
    .then((content) => fs.writeFile('backup.txt',content))
    .then(() => fs.unlink('file1.txt'))
    .catch((err) => console.log('Error: ',err))